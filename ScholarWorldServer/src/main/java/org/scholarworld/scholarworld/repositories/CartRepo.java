package org.scholarworld.scholarworld.repositories;

import org.scholarworld.scholarworld.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {

    Optional<Cart> findFirstByOrderByIdAsc();
}