package org.scholarworld.scholarworld.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

public class Image {
    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto Increment

    private Long Id;
    private String createdAt;
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    private String url;
}
