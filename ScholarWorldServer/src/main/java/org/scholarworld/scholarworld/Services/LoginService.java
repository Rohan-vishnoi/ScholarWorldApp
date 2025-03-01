package org.scholarworld.scholarworld.Services;


import org.scholarworld.scholarworld.models.Login;

public interface LoginService {

    boolean checkLogin(String username, String password);
}
