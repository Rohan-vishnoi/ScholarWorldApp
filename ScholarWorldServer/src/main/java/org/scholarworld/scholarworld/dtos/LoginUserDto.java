package org.scholarworld.scholarworld.dtos;

import org.scholarworld.scholarworld.entities.User;

public class LoginUserDto {

    private String email;

    private String password;

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return null;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
