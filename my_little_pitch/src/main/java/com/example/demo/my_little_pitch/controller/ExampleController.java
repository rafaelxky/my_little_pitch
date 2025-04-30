package com.example.demo.my_little_pitch.controller;

import com.example.demo.my_little_pitch.persistance.dao.jpa.UserJpaDao;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class ExampleController {

    @Autowired
    private UserService userService;

    @GetMapping("/example")
    public ResponseEntity<String> test() {

        String something = "hello world";

        return new ResponseEntity<>(something, HttpStatus.OK);
    }

    @GetMapping("/dbtest")
    public String dbtest(){
        User user = new User();
        user.setEmail("wadjdwaghj@gmaiulcom");
        user.setName("boda");
        userService.saveOrUpdate(user);
        return userService.get(1).toString();
    }


}
