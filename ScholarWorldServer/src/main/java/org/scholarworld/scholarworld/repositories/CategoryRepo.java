package org.scholarworld.scholarworld.repositories;

import org.scholarworld.scholarworld.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepo extends JpaRepository<Category, Long> {

    Optional<Category> findById(Long id);

    @Override
    void delete(Category category);

    @Override
    Category save(Category category); //Both create and update
}
