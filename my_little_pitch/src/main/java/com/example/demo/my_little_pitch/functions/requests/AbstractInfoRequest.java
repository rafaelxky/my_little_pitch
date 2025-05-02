package com.example.demo.my_little_pitch.functions.requests;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AbstractInfoRequest {

    @JsonProperty(required = false)
    String dummy;

}
