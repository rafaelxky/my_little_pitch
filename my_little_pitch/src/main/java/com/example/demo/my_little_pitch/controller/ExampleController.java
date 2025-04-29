package com.example.demo.my_little_pitch.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ExampleController {

    @GetMapping("/example")
    public ResponseEntity<String> test() {

        String something = "hello world";

        return new ResponseEntity<>(something, HttpStatus.OK);
    }


}
