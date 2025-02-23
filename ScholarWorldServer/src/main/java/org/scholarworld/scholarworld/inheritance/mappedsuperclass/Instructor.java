package org.scholarworld.scholarworld.inheritance.mappedsuperclass;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity(name = "mps_it")
public class Instructor extends User {
    private String specialization;
}
