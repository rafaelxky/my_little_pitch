package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.ResponseJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ResponseServiceImpl implements ResponseService{
    // update as its needed
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
    public Response saveOrUpdate(Response response){
        return responseJpaDao.saveOrUpdate(response);
    }

    @Override
    public List<Response> list(){
        return responseJpaDao.findAll();
    }

    @Override
    public List<Response> getByUserId(Integer id){
        return responseJpaDao.getByUserId(id);
    }

}
