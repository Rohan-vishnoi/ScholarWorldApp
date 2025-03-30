package org.scholarworld.scholarworld.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Setter
@Getter
@Entity
public class Product {

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto Increment

    private Long Id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("price")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @JsonProperty("category")
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn
    @JsonManagedReference
    private Category category;

    @JsonProperty("description")
    private String description;

    @JsonProperty("image")
    private String image;

    @JsonProperty("rate")
    private double rate;

    @JsonProperty("count")
    private int count;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = BigDecimal.valueOf(price);
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}