package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;


@Entity
@Table(name = "responses")
public class Response extends AbstractModel{

        private String rating;
        private String response;

        private Integer userId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }

        public String getResponse() {
            return response;
        }

        public void setResponse(String response) {
            this.response = response;
        }
}
