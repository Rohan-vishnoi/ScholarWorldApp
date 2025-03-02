package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.dtos.FakeStoreProductDto;
import org.scholarworld.scholarworld.entities.Category;
import org.scholarworld.scholarworld.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;

@Service("fakeProductService")
public class FakeProductService implements ProductService {

    private RestTemplate restTemplate;


    @Autowired
    FakeProductService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public Product getProductById(long id) {
       FakeStoreProductDto fakeStoreProductDto =
               restTemplate.getForObject("https://fakestoreapi.com/products/" + id, FakeStoreProductDto.class);
        return convertFakeStoreProductDtoToProduct(fakeStoreProductDto);
    }

    @Override
    public List<Product> getAllProducts() {
        List<FakeStoreProductDto> fakeStoreProductList = restTemplate.getForObject("https://fakestoreapi.com/products", List.class);
        return convertArrayListToProductList(fakeStoreProductList);
    }

    @Override
    public Product createProduct(Product product) {
        FakeStoreProductDto fakeStoreProductDto = convertProductToFakeStoreProductDto(product);
        fakeStoreProductDto =  restTemplate.postForObject("https://fakestoreapi.com/products",fakeStoreProductDto, FakeStoreProductDto.class);
        return convertFakeStoreProductDtoToProduct(fakeStoreProductDto);
    }

    @Override
    public Product replaceProduct(long id, Product product) {
        return null;
    }

    @Override
    public Product updateProduct(long id, Product product) {
        FakeStoreProductDto fakeProductDto = convertProductToFakeStoreProductDto(product);
        fakeProductDto = restTemplate.patchForObject("https://fakestoreapi.com/products/" + id, fakeProductDto, FakeStoreProductDto.class);
        return convertFakeStoreProductDtoToProduct(fakeProductDto);
    }

    @Override
    public HttpStatusCode deleteProduct(long id) {
        restTemplate.delete("https://fakestoreapi.com/products/" + id);
        return HttpStatusCode.valueOf(201);
    }

    private static Product convertFakeStoreProductDtoToProduct(FakeStoreProductDto dto) {

        if(dto == null){
            return null;
        }
        Product product = new Product();
        product.setId(dto.getId());
        product.setTitle(dto.getTitle()); // Map title to name
        product.setPrice(dto.getPrice());
        product.setDescription(dto.getDescription());

        Category category = new Category();
        category.setTitle(dto.getCategory());

        product.setCategory(category);

        return product;
    }


    public static FakeStoreProductDto convertProductToFakeStoreProductDto(Product product) {
        FakeStoreProductDto productDto = new FakeStoreProductDto();
        productDto.setId(product.getId());
        productDto.setTitle(product.getTitle());
        productDto.setDescription(product.getDescription());
        productDto.setPrice(product.getPrice());
        productDto.setCategory(product.getCategory().toString());

        return productDto;
    }

    public static List<Product> convertArrayListToProductList(List<FakeStoreProductDto> fakeStoreProductList) {
        List<Product> productList = new ArrayList<>();
        for (FakeStoreProductDto fakeStoreProductDto : fakeStoreProductList) {
                productList.add(convertFakeStoreProductDtoToProduct(fakeStoreProductDto));
        }
        return productList;
    }

}
