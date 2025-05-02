package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.RfpJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RfpServiceImpl implements RfpService{
    private RfpJpaDao rfpJpaDao;

    @Autowired
    public void setRfpJpaDao(RfpJpaDao rfpJpaDao) {
        this.rfpJpaDao = rfpJpaDao;
    }

    @Override
    public Rfp get(Integer id) {
        return rfpJpaDao.findById(id);
    }

    @Override
    @Transactional
    public void saveOrUpdate(Rfp rfp){
        rfpJpaDao.saveOrUpdate(rfp);
    }

    @Override
    public List<Rfp> list(){
        return rfpJpaDao.findAll();
    }

    @Override
    public List<Rfp> getByUserId(Integer id){
        return rfpJpaDao.getByUserId(id);
    }

    @Override
    public void delete(Integer id) {
        rfpJpaDao.delete(id);
    }

}
