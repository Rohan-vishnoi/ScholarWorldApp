package org.scholarworld.scholarworld.inheritance.mappedsuperclass;

import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
public class User {

    @jakarta.persistence.Id
    private Long Id;
    private String name;
    private String email;
    private String password;

}
