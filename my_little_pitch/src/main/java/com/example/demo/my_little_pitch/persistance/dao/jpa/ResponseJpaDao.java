package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.ResponseDao;
import com.example.demo.my_little_pitch.persistance.model.Response;
import com.example.demo.my_little_pitch.persistance.model.Rfp;
import com.example.demo.my_little_pitch.persistance.model.User;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ResponseJpaDao extends GenericDao<Response> implements ResponseDao {

    public ResponseJpaDao() {
        super(Response.class);
    }

    public List<Response> getByUserId(Integer userId) {
        CriteriaQuery<Response> criteriaQuery = em.getCriteriaBuilder().createQuery(modelType);
        Root<Response> root = criteriaQuery.from(modelType);

        // Assuming "userId" is a field in your entity, create a Predicate to filter by userId
        Predicate userIdPredicate = em.getCriteriaBuilder().equal(root.get("userId"), userId);

        criteriaQuery.where(userIdPredicate);

        return em.createQuery(criteriaQuery).getResultList();
    }
}
