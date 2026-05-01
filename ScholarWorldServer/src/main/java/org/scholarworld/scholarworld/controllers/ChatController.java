package org.scholarworld.scholarworld.controllers;

import org.scholarworld.scholarworld.dtos.ChatModels;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatController {

    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.defaultSystem("You are helpful ScholarWorld assistant. Use the searchProducts tool to find items for the user.").build();
    }

    @PostMapping("/chat")
    public ChatModels.ChatResponse chat(@RequestBody ChatModels.ChatRequest request) {
        try {
            String aiReply = chatClient.prompt()
                    .user(request.message())
                    .functions("searchProducts")
                    .call()
                    .content();

            return new ChatModels.ChatResponse(aiReply);

        } catch (Exception e) {
            // This will print the EXACT Google Vertex AI error in your IntelliJ/terminal console!
            System.err.println("=== GEMINI API ERROR ===");
            e.printStackTrace();

            // Return the error safely to the frontend so it doesn't crash
            return new ChatModels.ChatResponse("Server Error: " + e.getMessage());
        }
    }
}
