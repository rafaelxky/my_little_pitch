package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;

@Entity
@Table(name = "rfps")
public class Rfp extends AbstractModel {

    private String text;
    private String tokens;

    private Integer userId;

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
