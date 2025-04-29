package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.ResponseDao;
import com.example.demo.my_little_pitch.persistance.model.Response;
import com.example.demo.my_little_pitch.persistance.model.Rfp;

public class ResponseJpaDao extends GenericDao<Response> implements ResponseDao {

    public ResponseJpaDao(Class<Rfp> modelType) {
        super(Response.class);
    }
}
