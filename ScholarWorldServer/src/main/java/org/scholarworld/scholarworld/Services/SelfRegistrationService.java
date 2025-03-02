package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.entities.User;
import org.scholarworld.scholarworld.repositories.UserRepository;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class SelfRegistrationService implements RegistrationService{
    private UserRepository userRepository;

    public SelfRegistrationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createRegistration(User user) {
        return userRepository.save(user);
    }
}
