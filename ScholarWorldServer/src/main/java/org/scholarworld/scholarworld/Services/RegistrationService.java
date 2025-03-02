package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.entities.User;
import org.springframework.stereotype.Service;

@Service
public interface RegistrationService {


    User createRegistration(User user);
}
