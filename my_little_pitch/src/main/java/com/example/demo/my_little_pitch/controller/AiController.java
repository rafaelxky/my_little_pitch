package com.example.demo.my_little_pitch.controller;

import com.example.demo.my_little_pitch.command.QuestionDto;
import com.example.demo.my_little_pitch.persistance.model.Response;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.services.ResponseService;
import com.example.demo.my_little_pitch.services.RfpService;
import com.example.demo.my_little_pitch.services.UserService;
import com.example.demo.my_little_pitch.services.AiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AiController {

    private AiService aiService;
    private UserService userService;

    private RfpService rfpService;

    private ResponseService responseService;

    @Autowired
    public void setResponseService(ResponseService responseService) {
        this.responseService = responseService;
    }
    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setAiService(AiService aiService) {
        this.aiService = aiService;
    }

    @Autowired
    public void setCustomerService(UserService userService) {
        this.userService = userService;
    }
    @Autowired
    public void setRfpService(RfpService rfpService) {
        this.rfpService = rfpService;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/info", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> info(@Valid @RequestBody QuestionDto request, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(aiService.answerQuestion(request.question()).getOutput().getContent(), HttpStatus.OK);
    }

    @PostMapping(path = "/user/{cid}")
    public ResponseEntity<String> customer(@Valid @RequestBody String question, BindingResult bindingResult, @PathVariable Integer cid) {


        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User user = userService.get(cid);
        System.out.println(user + " asdf");

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        System.out.println("Cenoura");

        return new ResponseEntity<>(aiService.respondToRfp(question, user).getOutput().getContent(),HttpStatus.OK);

    }

    @PostMapping(path = "/rfp/{id}/generateResponse")
    public ResponseEntity generateResponseForRfp(@PathVariable Integer id){

       String question = rfpService.get(id).getText() + " - based on this information generate a response to this rfp";
        User user = new User();
        user.setName("rafa");
        user.setEmail("blebla@flflf");
        user.setId(1);



        return new ResponseEntity<>(aiService.respondToRfp(question, user).getOutput().getContent(),HttpStatus.OK);
    }


    @PostMapping(path = "/rfp/{id}/generateResponse2")
    public ResponseEntity<String> generateResponseForRfp2(@PathVariable Integer id) {
        // Retrieve the RFP by its ID
        Rfp rfp = rfpService.get(id);
        if (rfp == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("RFP not found");
        }

        // Compose the question for the AI
        String question = rfp.getText() + " - based on this information generate a response to this RFP, dont add any placeholders or things for me to change, just make stuff up. dont make the text too long. Dont add any [] or ** specifically";

        // Dummy user (in a real app, this should come from the logged-in user)
        User user = new User();
        user.setId(1);
        user.setName("rafa");
        user.setEmail("blebla@flflf");

        // Use AI service to generate a response
        try {
            String aiResponseText = aiService.respondToRfp(question, user).getOutput().getContent();
            return ResponseEntity.ok(aiResponseText);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("AI generation failed");
        }
    }

}

