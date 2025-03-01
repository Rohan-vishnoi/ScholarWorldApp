package org.scholarworld.scholarworld.controllers;

import org.scholarworld.scholarworld.Services.LoginService;
import org.scholarworld.scholarworld.models.Login;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/check-login")
@CrossOrigin(origins = "http://localhost:4200") // Only allow this origin
public class LoginController {

    private LoginService loginService;

    LoginController(LoginService loginService) {
        this.loginService = loginService;
    }
    
    @PostMapping(produces = "application/json", consumes = "application/json")
    public boolean checkLogin(@RequestBody Login login) {
        return loginService.checkLogin(login.getUsername(), login.getPassword());
    }
}
