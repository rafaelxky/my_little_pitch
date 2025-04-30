package com.example.demo.my_little_pitch.persistance.dao.jpa;

import com.example.demo.my_little_pitch.persistance.dao.UserDao;
import com.example.demo.my_little_pitch.persistance.model.User;
import org.springframework.stereotype.Repository;


@Repository
public class UserJpaDao extends GenericDao<User> implements UserDao {

    public UserJpaDao() {
        super(User.class);
    }

}
