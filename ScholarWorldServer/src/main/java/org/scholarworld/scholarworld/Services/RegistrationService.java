package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.models.Registration;
import org.springframework.stereotype.Service;

@Service
public interface RegistrationService {


    Registration createRegistration(Registration registration);
}
