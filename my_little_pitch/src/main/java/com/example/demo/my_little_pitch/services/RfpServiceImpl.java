package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.RfpJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

}
