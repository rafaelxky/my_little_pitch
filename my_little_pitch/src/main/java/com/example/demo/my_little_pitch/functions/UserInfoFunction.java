package com.example.demo.my_little_pitch.functions;

import com.example.demo.my_little_pitch.functions.requests.UserInfoRequest;
import com.example.demo.my_little_pitch.persistance.model.User;


import java.util.function.Function;

public class UserInfoFunction implements Function<UserInfoRequest, UserInfoResponse> {

    private User customer;

    public UserInfoFunction(User customer) {
        this.customer = customer;
    }


    @Override
    public UserInfoResponse apply(UserInfoRequest userInfoRequest) {
        return new UserInfoResponse(
                customer.getId(),
                customer.getName(),
                customer.getEmail()
        );
    }
}
