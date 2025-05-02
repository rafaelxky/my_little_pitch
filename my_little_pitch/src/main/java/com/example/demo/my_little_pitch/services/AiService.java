package com.example.demo.my_little_pitch.services;
//import org.springframework.ai.openai.api.OpenAiChatClient;
//import org.springframework.ai.openai.OpenAiChatClient;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import com.example.demo.my_little_pitch.persistance.model.User;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.openai.*;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.ChatResponse;



public interface AiService {


    Generation respondToRfp(String rfpQuery, User user);

    Generation info(String question);

    Generation answerQuestion(String Question);
}
