package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.model.Response;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ResponseService {
    abstract Response get(Integer id);

    @Transactional
    Response saveOrUpdate(Response response);

    List<Response> list();

    List<Response> getByUserId(Integer id);
}
