package com.example.demo.my_little_pitch.functions;

import com.example.demo.my_little_pitch.functions.responses.InfoResponse;

public record UserInfoResponse(
        Integer id,
        String name,
        String email
) implements InfoResponse {}