package org.scholarworld.scholarworld.repositories;

import org.scholarworld.scholarworld.entities.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<Login, Long> {
    Login findByUsernameAndPassword(String username, String password);
}
