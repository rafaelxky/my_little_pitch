package com.example.demo.my_little_pitch.services;

import com.example.demo.my_little_pitch.persistance.dao.jpa.UserJpaDao;
import com.example.demo.my_little_pitch.persistance.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserJpaDao userDao;

    @Autowired
    public void setUserDao(UserJpaDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User get(Integer id) {
        return userDao.findById(id);
    }

    @Override
    @Transactional
    public User saveOrUpdate(User user){
        return userDao.saveOrUpdate(user);
    }

    @Override
    public List<User> list(){
        return userDao.findAll();
    }

}
