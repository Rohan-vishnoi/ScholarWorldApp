package org.scholarworld.scholarworld.Services;

import org.scholarworld.scholarworld.models.Login;
import org.scholarworld.scholarworld.repositories.LoginRepo;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class SelfLoginService implements LoginService {

    private final LoginRepo loginRepo;

    public SelfLoginService(LoginRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    @Override
    public boolean checkLogin(String username, String password) {
    Login login = loginRepo.findByUsernameAndPassword(username, password);
    return login != null;
    }
}
