package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.ResponseJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ResponseServiceImpl implements ResponseService{
    private ResponseJpaDao responseJpaDao;

    @Autowired
    public void setResponseJpaDao(ResponseJpaDao responseJpaDao) {
        this.responseJpaDao = responseJpaDao;
    }

    @Override
    public Response get(Integer id) {
        return responseJpaDao.findById(id);
    }

    @Override
    @Transactional
    public void saveOrUpdate(Response response){
        responseJpaDao.saveOrUpdate(response);
    }
}
