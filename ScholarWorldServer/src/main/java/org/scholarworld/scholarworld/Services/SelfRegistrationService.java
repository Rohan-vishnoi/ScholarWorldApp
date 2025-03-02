package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.models.Registration;
import org.scholarworld.scholarworld.repositories.RegistrationRepo;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class SelfRegistrationService implements RegistrationService{
    private RegistrationRepo registrationRepo;

    public SelfRegistrationService(RegistrationRepo registrationRepo) {
        this.registrationRepo = registrationRepo;
    }

    @Override
    public Registration createRegistration(Registration registration) {
        return registrationRepo.save(registration);
    }
}
