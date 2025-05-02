package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;

@Entity
@Table(name = "rfps")
public class Rfp extends AbstractModel {

    // the id is already in the superclass
    private String name;
    private String sector;
    private String text;
    private String file;
    private String tokens;

    private Integer userId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTokens() {
        return tokens;
    }

    public void setTokens(String tokens) {
        this.tokens = tokens;
    }
}
