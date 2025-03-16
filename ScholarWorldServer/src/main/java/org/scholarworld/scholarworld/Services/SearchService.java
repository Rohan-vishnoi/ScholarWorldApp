package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.entities.Product;
import org.scholarworld.scholarworld.repositories.ProductRepo;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SearchService {

    private ProductRepo productRepo;

    public SearchService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public List<Product> search(String keyword, int pagenumber, int pagesize) {
        return productRepo.findByTitleContains(keyword, PageRequest.of(pagenumber, pagesize));
    }

}
