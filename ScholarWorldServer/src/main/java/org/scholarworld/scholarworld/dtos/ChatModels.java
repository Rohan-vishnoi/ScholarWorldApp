package org.scholarworld.scholarworld.dtos;

public class ChatModels {

    public record ChatRequest(String message) {}
    public record ChatResponse(String reply) {}
    public record ProductSearchRequest(String searchQuery){}
}
