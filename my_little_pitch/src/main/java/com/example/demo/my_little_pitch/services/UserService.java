package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.model.User;

public interface UserService {

    public User get(Integer id);

    void saveOrUpdate(User user);
}
