package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.RfpJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import org.springframework.transaction.annotation.Transactional;

public interface RfpService {
    Rfp get(Integer id);

    @Transactional
    void saveOrUpdate(Rfp rfp);
}
