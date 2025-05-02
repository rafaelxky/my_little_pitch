package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.RfpJpaDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RfpService {
    Rfp get(Integer id);

    @Transactional
    void saveOrUpdate(Rfp rfp);

    List<Rfp> list();

    List<Rfp> getByUserId(Integer id);

    void delete(Integer id);
}
