package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.UserDao;
import com.example.demo.my_little_pitch.persistance.model.User;
import com.example.demo.my_little_pitch.persistance.model.User;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserJpaDao extends GenericDao<User> implements UserDao {

    public UserJpaDao() {
        super(User.class);
    }


}
