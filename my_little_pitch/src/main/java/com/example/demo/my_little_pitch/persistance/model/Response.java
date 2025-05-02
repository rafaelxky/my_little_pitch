package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;


@Entity
@Table(name = "responses")
public class Response extends AbstractModel{

        // the id is already in the superclass
        private String rating;
        private String response;
        private Integer userId;
        private Integer rfpId;
        private String title;
        private String feedBack;
        private String tokens;


    public Integer getRfpId() {
        return rfpId;
    }

    public void setRfpId(Integer rfpId) {
        this.rfpId = rfpId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFeedBack() {
        return feedBack;
    }

    public void setFeedBack(String feedBack) {
        this.feedBack = feedBack;
    }

    public String getTokens() {
        return tokens;
    }

    public void setTokens(String tokens) {
        this.tokens = tokens;
    }

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
