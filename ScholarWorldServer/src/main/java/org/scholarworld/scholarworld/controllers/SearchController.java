package org.scholarworld.scholarworld.controllers;

import org.scholarworld.scholarworld.Services.SearchService;
import org.scholarworld.scholarworld.dtos.SearchRequestDto;
import org.scholarworld.scholarworld.entities.Product;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {

    private final SearchService searchservice;

    public SearchController(SearchService searchservice) {
        this.searchservice = searchservice;
    }


    @PostMapping
    public List<Product> search(@RequestBody SearchRequestDto searchRequestDto) {
        // search for products
        return searchservice.search(searchRequestDto.getKeyword(), searchRequestDto.getPagenumber(),searchRequestDto.getPagesize() );

    }
}
