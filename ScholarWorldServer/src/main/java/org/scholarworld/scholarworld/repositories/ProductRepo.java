package org.scholarworld.scholarworld.repositories;

import org.scholarworld.scholarworld.Projections.ProductWithTitleAndDescription;
import org.scholarworld.scholarworld.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

    Optional<Product> findById(Long id);

    void delete(Product product);

    @Override
    Product save(Product product); //Both create and update\

    //HQL
    @Query("select p.title as title, p.description as description from Product p where p.Id = :id")
    ProductWithTitleAndDescription someRandomQuery(@Param("id") Long id);
}
