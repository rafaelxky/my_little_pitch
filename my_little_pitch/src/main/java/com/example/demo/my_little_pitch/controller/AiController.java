package com.example.demo.my_little_pitch.controller;

import com.example.demo.my_little_pitch.command.QuestionDto;
import com.example.demo.my_little_pitch.command.RfpRequestDto;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.services.UserService;
import com.example.demo.my_little_pitch.services.AiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class     AiController {

    private AiService aiService;
    private UserService userService;

    @Autowired
    public void setAiService(AiService aiService) {
        this.aiService = aiService;
    }

    @Autowired
    public void setCustomerService(UserService userService) {
        this.userService = userService;
    }


    @RequestMapping(method = RequestMethod.POST, path = "/info")
    public ResponseEntity<String> info(@Valid @RequestBody QuestionDto request, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(aiService.answerQuestion(request.question()).getOutput().getContent(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/rfp-response")
    public ResponseEntity<String> generateRfpResponse(@Valid @RequestBody RfpRequestDto request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(aiService.info(request.question()).getOutput().getContent(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/user/{cid}")
    public ResponseEntity<String> user(@RequestBody QuestionDto request, BindingResult bindingResult, @PathVariable Integer cid) {



        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


        //User user = userService.get(cid);
        String question = request.question();

        User user = new User();
        user.setEmail("dfdifjfd");
        user.setId(1);
        user.setName("Nandinho");

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(aiService.userInfo(user, question).getOutput().getContent(), HttpStatus.OK);

    }
}

