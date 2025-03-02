package org.scholarworld.scholarworld.Services;

import jakarta.persistence.EntityNotFoundException;
import org.scholarworld.scholarworld.entities.Category;
import org.scholarworld.scholarworld.entities.Product;
import org.scholarworld.scholarworld.repositories.CategoryRepo;
import org.scholarworld.scholarworld.repositories.ProductRepo;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Primary
public class SelfproductService implements ProductService {

    private ProductRepo productRepo;
    private CategoryRepo categoryRepo;

    public SelfproductService(ProductRepo productRepo , CategoryRepo categoryRepo) {
        this.productRepo = productRepo;
        this.categoryRepo =categoryRepo;
    }


    @Override
    public Product getProductById(long id) {
        Optional<Product> product = productRepo.findById(id);
        if(product.isEmpty()){
           throw new EntityNotFoundException("Product not found");
        }
        return product.get();
    }

    @Override
    public List<Product> getAllProducts() {
        return List.of();
    }

    @Override
    public Product createProduct(Product product) {
        Category category = product.getCategory();
        if(category.getId() == null){
            Category savedcategory = categoryRepo.save(category);
            product.setCategory(savedcategory);
        }
        return productRepo.save(product);
    }

    @Override
    public Product replaceProduct(long id, Product product) {
        return null;
    }

    @Override
    public Product updateProduct(long id, Product product) {
        return null;
    }

    @Override
    public HttpStatusCode deleteProduct(long id) {
        return null;
    }
}
