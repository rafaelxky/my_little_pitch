package com.example.demo.my_little_pitch.persistance.model;


import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User extends AbstractModel{


    // the id is already in the superclass
    private String name;
    private String email;

    private String passWord;



    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + super.getId() +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
