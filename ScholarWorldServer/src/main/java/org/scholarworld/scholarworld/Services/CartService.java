package org.scholarworld.scholarworld.Services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.common.errors.ResourceNotFoundException;
import org.scholarworld.scholarworld.dtos.CartItemDto;
import org.scholarworld.scholarworld.dtos.CartViewDto;
import org.scholarworld.scholarworld.entities.Cart;
import org.scholarworld.scholarworld.entities.CartItem;
import org.scholarworld.scholarworld.entities.Product;
import org.scholarworld.scholarworld.repositories.CartItemRepo;
import org.scholarworld.scholarworld.repositories.CartRepo;
import org.scholarworld.scholarworld.repositories.ProductRepo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class CartService {

    private final CartRepo cartRepository;
    private final ProductRepo productRepository;
    private final CartItemRepo cartItemRepository;


    public CartService(CartRepo cartRepository, ProductRepo productRepository, CartItemRepo cartItemRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.cartItemRepository = cartItemRepository;
    }

    private Cart getOrCreateCart() {

        return cartRepository.findFirstByOrderByIdAsc().orElseGet(() -> {
            Cart newCart = new Cart();
            return cartRepository.save(newCart);
        });
    }

    public CartViewDto getCartView() {
        Cart cart = getOrCreateCart();
        return mapCartToViewDto(cart);
    }

    public CartViewDto addItemToCart(CartItemDto itemDto) {
        Cart cart = getOrCreateCart();
        Product product = productRepository.findById(itemDto.getProductId())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + itemDto.getProductId()));

        if (itemDto.getQuantity() <= 0) {
            throw new IllegalArgumentException("Quantity must be positive.");
        }

        Optional<CartItem> existingItemOpt = cartItemRepository.findByCartIdAndProductId(cart.getId(), product.getId());

        if (existingItemOpt.isPresent()) {
            CartItem existingItem = existingItemOpt.get();
            existingItem.setQuantity(existingItem.getQuantity() + itemDto.getQuantity());
            cartItemRepository.save(existingItem); // JPA manages updates
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(itemDto.getQuantity());
            cart.addItem(cartItemRepository.save(newItem)); // Save item and update cart's list reference if needed

        }

        // Fetch fresh cart state to return updated view
        Cart updatedCart = cartRepository.findById(cart.getId())
                .orElseThrow(() -> new IllegalStateException("Cart disappeared unexpectedly")); // Should not happen in transaction
        return mapCartToViewDto(updatedCart);
    }

    public CartViewDto updateItemQuantity(Long cartItemId, int quantity) {
        if (quantity <= 0) {
            return removeItemFromCart(cartItemId);
        }

        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("CartItem not found with id: " + cartItemId));



        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem); // Update the item

        return mapCartToViewDto(cartItem.getCart());
    }

    public CartViewDto removeItemFromCart(Long cartItemId) {
        CartItem cartItem = cartItemRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("CartItem not found with id: " + cartItemId));

        Cart cart = cartItem.getCart();

        cartItemRepository.delete(cartItem);

        return mapCartToViewDto(cart);
    }

    public void clearCart() {
        Cart cart = getOrCreateCart();
        List<CartItem> itemsToDelete = cart.getItems(); // Get list before clearing
        if (itemsToDelete != null && !itemsToDelete.isEmpty()) {

            cartItemRepository.deleteAll(itemsToDelete); // Bulk delete associated items
        }

    }


    // --- Mapper Helper ---
    private CartViewDto mapCartToViewDto(Cart cart) {
        CartViewDto cartViewDto = new CartViewDto();
        cartViewDto.setCartId(cart.getId());

        List<CartViewDto.CartItemViewDto> itemDtos = cart.getItems().stream().map(item -> {
            CartViewDto.CartItemViewDto itemDto = new CartViewDto.CartItemViewDto();
            itemDto.setItemId(item.getId());
            itemDto.setProductId(item.getProduct().getId());
            itemDto.setProductName(item.getProduct().getTitle());
            itemDto.setQuantity(item.getQuantity());
            itemDto.setPricePerUnit(item.getProduct().getPrice());
            itemDto.setLineTotal(item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())));
            return itemDto;
        }).collect(Collectors.toList());

        cartViewDto.setItems(itemDtos);

        BigDecimal total = itemDtos.stream()
                .map(CartViewDto.CartItemViewDto::getLineTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        cartViewDto.setTotalPrice(total);

        return cartViewDto;
    }
}