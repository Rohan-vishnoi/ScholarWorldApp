package org.scholarworld.scholarworld.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Category{

    public void setId(Long id) {
        Id = id;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public Long getId() {
        return Id;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getTitle() {
        return title;
    }

    public List<Product> getProductList() {
        return productList;
    }

    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto Increment

    private Long Id;
    private String createdAt;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    private String title;
    @OneToMany(mappedBy = "category")
    private List<Product> productList;
}