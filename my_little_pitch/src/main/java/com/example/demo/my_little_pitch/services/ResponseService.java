package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.model.Response;
import org.springframework.transaction.annotation.Transactional;

public interface ResponseService {
    abstract Response get(Integer id);

    @Transactional
    void saveOrUpdate(Response response);
}
