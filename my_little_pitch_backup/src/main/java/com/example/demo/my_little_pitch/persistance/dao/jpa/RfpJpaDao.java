package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.RfpDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import org.springframework.stereotype.Repository;


@Repository
public class RfpJpaDao extends GenericDao<Rfp> implements RfpDao {

    /**
     * Initializes a new JPA DAO instance given a model type
     *
     * @param modelType the model type
     */
    public RfpJpaDao() {
        super(Rfp.class);
    }
}
