package org.scholarworld.scholarworld.inheritance.singletable;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity(name = "st_it")
@DiscriminatorValue(value = "3")
public class Instructor extends User {
    private String specialization;
}
