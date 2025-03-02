package org.scholarworld.scholarworld.repositories;

import org.scholarworld.scholarworld.models.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepo extends JpaRepository<Registration, Long> {

    @Override
    Registration save(Registration registration);
}
