package org.scholarworld.scholarworld.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class VipProducts extends BaseModels {

    @ManyToOne
    Category category;
}
