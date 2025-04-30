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

    @GetMapping("/user")
    public List<User> listUsers(){
        return userService.list();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id){
        return userService.get(id);
    }

    @GetMapping("/user/{id}/rfp")
    public List<Rfp> getUserRfp(@PathVariable Integer id){
        return rfpService.getByUserId(id);
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/user/form"})
    public User addUser(@Valid @ModelAttribute("user") User user){
        // receives the user form data as a POST request
        User savedUser = userService.saveOrUpdate(user);
        return savedUser;
    }

    @GetMapping("/response")
    public List<Response> listResponse(){
        return responseService.list();
    }
    @GetMapping("/response/{responseId}")
    public Response getResponse(@PathVariable Integer responseId){
        // return specific response based on id
        return responseService.get(responseId);
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/response/form"})
    public Response addResponse(@Valid @ModelAttribute("response") Response response){
        return responseService.saveOrUpdate(response);
    }

    // working
    // add validation
    @GetMapping("/rfp")
    public List<Rfp> listRfp(){
        return rfpService.list();
    }
    @GetMapping("/rfp/{rfpId}")
    public Rfp getRfp(@PathVariable Integer rfpId){
        return rfpService.get(rfpId);
        // return specific response based on id
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/rfp/form"})
    public Rfp addRfp(@Valid @ModelAttribute("rfp") Rfp rfp){

        rfpService.saveOrUpdate(rfp);
        // receives the Rfp form data as a POST requests
        return rfp;
    }

}
