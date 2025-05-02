package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.RfpDao;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class RfpJpaDao extends GenericDao<Rfp> implements RfpDao {

    /**
     * Initializes a new JPA DAO instance given a model type
     *
     * @param modelRfpype the model type
     */
    public RfpJpaDao() {
        super(Rfp.class);
    }

    public List<Rfp> getByUserId(Integer userId) {
        CriteriaQuery<Rfp> criteriaQuery = em.getCriteriaBuilder().createQuery(modelType);
        Root<Rfp> root = criteriaQuery.from(modelType);

        // Assuming "userId" is a field in your entity, create a Predicate to filter by userId
        Predicate userIdPredicate = em.getCriteriaBuilder().equal(root.get("userId"), userId);

        criteriaQuery.where(userIdPredicate);

        return em.createQuery(criteriaQuery).getResultList();
    }
}
