package org.scholarworld.scholarworld.configurations;

import org.scholarworld.scholarworld.dtos.ChatModels;
import org.scholarworld.scholarworld.entities.Product;
import org.scholarworld.scholarworld.repositories.ProductRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Description;

import java.util.List;
import java.util.function.Function;

@Configuration
public class ChatbotTools {

    private final ProductRepo productRepo;


    public ChatbotTools(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }
    public record ProductSearchResponse(String resultDetails) {}

    @Bean
    @Description("Search the ScholarWorld database for academic products, courses, and books based on a user query.")
    public Function<ChatModels.ProductSearchRequest, ProductSearchResponse> searchProducts() {
        return request -> {
            System.out.println("--> AI Tool Triggered: Searching DB for: " + request.searchQuery());
            List<Product> foundProducts = productRepo.findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(request.searchQuery(), request.searchQuery());
            if(foundProducts.isEmpty()) {
                return new ProductSearchResponse("No products found matching that description");
            }

            return new ProductSearchResponse(foundProducts.toString());
        };
    }
}