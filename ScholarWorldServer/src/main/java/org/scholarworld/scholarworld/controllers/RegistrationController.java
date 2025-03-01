package org.scholarworld.scholarworld.controllers;

import org.scholarworld.scholarworld.Services.RegistrationService;
import org.scholarworld.scholarworld.models.Registration;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Only allow this origin
@RequestMapping("/registration")
public class RegistrationController {

    private RegistrationService registrationService;

    RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping(produces = "application/json", consumes = "application/json")
    public Registration createRegistration(@RequestBody Registration registration) {
        return registrationService.createRegistration(registration);
    }
}
