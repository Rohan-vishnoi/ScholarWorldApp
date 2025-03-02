package org.scholarworld.scholarworld.controllers;
import org.scholarworld.scholarworld.Exceptions.ProductLimitReachedException;
import org.scholarworld.scholarworld.Services.ProductService;
import org.scholarworld.scholarworld.entities.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private ProductService  productService;

    ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Product> getProductById(@PathVariable long id) throws ProductLimitReachedException{
        if(id < 100){
            return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
        } else {
            throw new ProductLimitReachedException("product Ask reached to limit");
        }
    }

    @GetMapping(produces = "application/json")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping(value = "/{id}", produces = "application/json", consumes = "application/json")
    public Product replaceProduct(@PathVariable("id") long id, @RequestBody Product product) {
        return new Product();
    }

    @PatchMapping(value = "/{id}", produces = "application/json", consumes = "application/json")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
        return new ResponseEntity<>(productService.updateProduct(id,product), HttpStatusCode.valueOf(200));
    }

    @DeleteMapping(value = "/{id}", produces = "application/json", consumes = "application/json")
    public HttpStatusCode deleteProduct(@PathVariable("id") long id) {
        return productService.deleteProduct(id);
    }


}