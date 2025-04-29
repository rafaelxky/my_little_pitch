package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RFP {

    @Id
    private Long id;

    

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
