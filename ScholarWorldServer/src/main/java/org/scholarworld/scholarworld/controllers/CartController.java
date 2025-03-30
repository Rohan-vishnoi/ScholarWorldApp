package org.scholarworld.scholarworld.controllers;

import lombok.RequiredArgsConstructor;
import org.scholarworld.scholarworld.Services.CartService;
import org.scholarworld.scholarworld.dtos.CartItemDto;
import org.scholarworld.scholarworld.dtos.CartViewDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth/cart")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular dev server
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }


    @GetMapping
    public ResponseEntity<CartViewDto> getCart() {
        CartViewDto cartView = cartService.getCartView();
        return ResponseEntity.ok(cartView);
    }

    @PostMapping("/items")
    public ResponseEntity<CartViewDto> addItemToCart(@RequestBody CartItemDto itemDto) {
        try {
            CartViewDto updatedCart = cartService.addItemToCart(itemDto);
            return ResponseEntity.ok(updatedCart);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null); 
        } catch (Exception e) { 
            return ResponseEntity.internalServerError().body(null); 
        }
    }

    @PutMapping("/items/{itemId}")
    public ResponseEntity<CartViewDto> updateItemQuantity(
            @PathVariable Long itemId,
            @RequestBody Map<String, Integer> payload) { 
        try {
            Integer quantity = payload.get("quantity");
            if (quantity == null) {
                return ResponseEntity.badRequest().body(null); 
            }
            CartViewDto updatedCart = cartService.updateItemQuantity(itemId, quantity);
            return ResponseEntity.ok(updatedCart);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) { 
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @DeleteMapping("/items/{itemId}")
    public ResponseEntity<CartViewDto> removeItemFromCart(@PathVariable Long itemId) {
        try {
            CartViewDto updatedCart = cartService.removeItemFromCart(itemId);
            return ResponseEntity.ok(updatedCart);
        } catch (Exception e) { 
            return ResponseEntity.internalServerError().body(null);
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> clearCart() {
        try {
            cartService.clearCart();
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}