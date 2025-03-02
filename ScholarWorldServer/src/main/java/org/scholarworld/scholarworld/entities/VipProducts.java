package org.scholarworld.scholarworld.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class VipProducts {

    @Getter
    @Setter
    @jakarta.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto Increment

    private Long Id;
    @Setter
    @Getter
    private String createdAt;

    @ManyToOne
    Category category;
}
