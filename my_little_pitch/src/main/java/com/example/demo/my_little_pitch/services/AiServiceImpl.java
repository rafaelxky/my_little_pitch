package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.functions.UserInfoFunction;
import com.example.demo.my_little_pitch.persistance.VectorStore;
import com.example.demo.my_little_pitch.persistance.model.User;
import org.springframework.ai.chat.ChatClient;
import org.springframework.ai.chat.Generation;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.model.function.FunctionCallbackWrapper;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AiServiceImpl implements AiService {

    private final ChatClient chatClient;

    @Value("${ai.rag_prompt_template}")
    private Resource ragPromptTemplate;

    @Value("${ai.function_prompt_template}")
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
        System.out.println(promptTemplate);
        Prompt prompt = promptTemplate.create(Map.of(
                "input", question,
                "documents", String.join("\n", contentList)));

        return chatClient.call(prompt).getResult();
    }

    @Override
    public Generation rfp_response(String rfp) {

        List<String> contentList = vectorStore.search(rfp);

        PromptTemplate promptTemplate = new PromptTemplate(ragPromptTemplate);
        Prompt prompt = promptTemplate.create(Map.of(
                "input", rfp));

        return chatClient.call(prompt).getResult();
    }

    @Override
    public Generation answerQuestion(String question) {
        return chatClient.call(new Prompt(question)).getResult();
    }

    @Override
    public Generation answerRfp(String rfp) {
        return chatClient.call(new Prompt(rfp)).getResult();
    }

    @Override
    public Generation userInfo(User customer, String question) {
        OpenAiChatOptions chatOptions = OpenAiChatOptions.builder()
                .withFunctionCallbacks(List.of(
                        FunctionCallbackWrapper.builder(new UserInfoFunction(customer))
                                .withName("UserInfo")
                                .withDescription("Get personal details for a user, such as id, name and email")
                                .build()
                )).build();

        PromptTemplate promptTemplate = new PromptTemplate(functionPromptTemplate);
        Message message = promptTemplate.createMessage(Map.of("input", question));
        Prompt prompt = new Prompt(message, chatOptions);

        return chatClient.call(prompt).getResult();
    }
}


