package org.scholarworld.scholarworld.inheritance.mappedsuperclass;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity(name = "mps_ta")
public class TA extends User {

    private int numberOfSessions;

    private float averageRating;
}
