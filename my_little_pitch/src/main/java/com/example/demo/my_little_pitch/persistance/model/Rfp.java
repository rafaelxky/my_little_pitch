package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;

@Entity
@Table(name = "rfps")
public class Rfp extends AbstractModel {

    private String date;
    private String text;
    private String tokens;



    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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
