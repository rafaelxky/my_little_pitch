package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.VectorStore;
import com.example.demo.my_little_pitch.persistance.model.User;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AiServiceImpl implements AiService {

    private final ChatClient chatClient;


    private Resource ragPromptTemplate;


    private Resource functionPromptTemplate;

    private VectorStore vectorStore;


    @Autowired
    public void setVectorStore(VectorStore vectorStore) {
        this.vectorStore = vectorStore;
    }

    @Autowired
    public AiServiceImpl(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    @Override
    public Generation respondToRfp(String rfpQuery, User user) {

        Prompt prompt = new Prompt("Please respond to the following RFP:\n" + rfpQuery);
        return chatClient.call(prompt).getResult();
    }

    @Override
    public Generation info(String question) {

        List<String> contentList = vectorStore.search(question);

        PromptTemplate promptTemplate = new PromptTemplate(ragPromptTemplate);
        Prompt prompt = promptTemplate.create(Map.of(
                "input", question,
                "documents", String.join("\n", contentList)));

        return chatClient.call(prompt).getResult();
    }

    @Override
    public Generation answerQuestion(String question) {
        return chatClient.call(new Prompt(question)).getResult();
    }
}
