package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.entities.Product;
import org.springframework.http.HttpStatusCode;

import java.util.List;

public interface ProductService {

    Product getProductById(long id);
    List<Product> getAllProducts();
    Product createProduct(Product product);
    Product replaceProduct(long id, Product product);
    Product updateProduct(long id, Product product);
    HttpStatusCode deleteProduct(long id);

}
