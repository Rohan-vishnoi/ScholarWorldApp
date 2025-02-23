package org.scholarworld.scholarworld.inheritance.tableperclass;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Entity(name = "tpc_user")
public class User {

    @jakarta.persistence.Id
    private Long Id;
    private String name;
    private String email;
    private String password;

}
