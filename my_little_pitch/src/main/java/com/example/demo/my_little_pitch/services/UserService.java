package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.model.User;

import java.util.List;

public interface UserService {

    public User get(Integer id);

    User saveOrUpdate(User user);


    List<User> list();
}
