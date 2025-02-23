package org.scholarworld.scholarworld.inheritance.tableperclass;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity(name = "tpc_mentor")
public class Mentor extends User {

    private String compName;

    private double averageRating;
}
