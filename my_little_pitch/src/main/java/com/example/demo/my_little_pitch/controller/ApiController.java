package com.example.demo.my_little_pitch.controller;

import com.example.demo.my_little_pitch.persistance.model.Response;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.services.ResponseService;
import com.example.demo.my_little_pitch.services.RfpService;
import com.example.demo.my_little_pitch.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ApiController{


    @Autowired
    private ResponseService responseService;

    @Autowired
    private UserService userService;

    @Autowired
    private RfpService rfpService;


    @GetMapping("/user")
    public List<User> listUsers(){
        return userService.list();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Integer id){
        System.out.println("getUser");
        return userService.get(id);
    }

    @GetMapping("/user/{id}/rfp")

    public List<Rfp> getUserRfp(@PathVariable Integer id){
        return rfpService.getByUserId(id);
    }

    @GetMapping("/user/{id}/response")
    public List<Response> getUserResponse(@PathVariable Integer id){
        return responseService.getByUserId(id);
    }

    @PostMapping(path = {"/user/add"})
    public User addUser(@Valid @RequestBody User user){

        if (user.getId() != null && userService.get(user.getId()) != null) {
            System.out.println("cant pass an Id to create an user");
            return null;
        }

        User savedUser = userService.saveOrUpdate(user);
        return savedUser;
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/user/update"})
    public User updateUser(@Valid @RequestBody User user){

        if (user.getId() != null && userService.get(user.getId()) != null) {
            user.setVersion(userService.get(user.getId()).getVersion());
            return userService.saveOrUpdate(user);
        }

        System.out.println("cant update, that user doesnt exist");
        return null;
    }


    @GetMapping("/response")
    public List<Response> listResponse(){
        return responseService.list();
    }
    @GetMapping("/response/{responseId}")
    public Response getResponse(@PathVariable Integer responseId){

        return responseService.get(responseId);
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/response/add"})
    public Response addResponse(@Valid @RequestBody Response response){

        if (response.getId() != null && responseService.get(response.getId()) != null){
            System.out.println("You cant pass an Id to add a response");
            return null;
        }

        return responseService.saveOrUpdate(response);
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/response/update"})
    public Response updateResponse(@Valid @RequestBody Response response){

        if (response.getId() != null && responseService.get(response.getId()) != null){
            response.setVersion(responseService.get(response.getId()).getVersion());
            return responseService.saveOrUpdate(response);
        }

        System.out.println("cant update this response doesnt exists");
        return null;
    }

    @GetMapping("/rfp")
    public List<Rfp> listRfp(){
        return rfpService.list();
    }
    @GetMapping("/rfp/{rfpId}")
    public Rfp getRfp(@PathVariable Integer rfpId){
        return rfpService.get(rfpId);

    }

    @RequestMapping(method = RequestMethod.POST, path = {"/rfp/add"})
    public Rfp addRfp(@Valid @RequestBody Rfp rfp){
        if (rfp.getId() != null && rfpService.get(rfp.getId()) != null){
            System.out.println("You cant pass an Id to create a rfp");
           return null;
        }

        rfpService.saveOrUpdate(rfp);
        return rfp;
    }

    @RequestMapping(method = RequestMethod.POST, path = {"/rfp/{id}/update"})
    public Rfp updateRfp(@Valid @RequestBody Rfp rfp){
        if (rfp.getId() != null && rfpService.get(rfp.getId()) != null){
            rfp.setVersion(rfpService.get(rfp.getId()).getVersion());
            rfpService.saveOrUpdate(rfp);
            return rfp;
        }

        System.out.println("cant update, this rfp doesnt exist");
        return null;
    }

    @DeleteMapping(path = {"/rfp/{id}/delete"})
    public void deleteRfp(@PathVariable Integer id){
        rfpService.delete(id);
    }
}
