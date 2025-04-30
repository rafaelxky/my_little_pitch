package com.example.demo.my_little_pitch.controller;

import com.example.demo.my_little_pitch.persistance.model.Response;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.services.ResponseService;
import com.example.demo.my_little_pitch.services.RfpService;
import com.example.demo.my_little_pitch.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController{
    // update as is needed

    @Autowired
    private ResponseService responseService;

    @Autowired
    private UserService userService;

    @Autowired
    private RfpService rfpService;

    // its creating a response by itself
    // working but not the id

    @GetMapping("/response")
    public List<Response> listResponses() {
        return responseService.list();
        // return the list of responses from user with userId
    }

    @GetMapping("/user")
    public List<User> listUsers(){
        return userService.list();
    }

    @GetMapping("/user/{id}")
    public User listUser(@PathVariable Integer id){
        return userService.get(id);
    }

    @GetMapping("/response/{responseId}")
    public Response getResponse(@PathVariable Integer responseId){
        return responseService.get(responseId);
        // return specific response based on id
    }


    // working
    // add validation
    @RequestMapping(method = RequestMethod.POST, path = {"/form/rfp"})
    public Rfp addRfp(@Valid @ModelAttribute("rfp") Rfp rfp){

        rfpService.saveOrUpdate(rfp);
        // receives the Rfp form data as a POST requests
        return rfp;
    }

    // working
    // add validation
    @RequestMapping(method = RequestMethod.POST, path = {"/form/user"})
    public User addUser(@Valid @ModelAttribute("user") User user){
        // receives the user form data as a POST request
        User savedUser = userService.saveOrUpdate(user);
        return savedUser;
    }





}
