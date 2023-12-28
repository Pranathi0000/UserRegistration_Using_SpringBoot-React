package com.restapi.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restapi.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Serializable>{

	public User findByEmailAndPassword(String email,String password);

}
