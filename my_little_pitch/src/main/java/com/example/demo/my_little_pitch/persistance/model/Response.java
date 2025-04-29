package com.example.demo.my_little_pitch.persistance.model;

import jakarta.persistence.*;


@Entity
@Table(name = "users")
public class Response {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String date;
        private String rating;
        private String response;


        public void setId(Long id) {
            this.id = id;
        }

        public Long getId() {
            return id;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
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
