package com.restapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.model.User;
import com.restapi.repo.UserRepository;

@Service
public class UserServicesImplemantation implements UserServices {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public String login(User user) {
		
		User record= userRepo.findByEmailAndPassword(user.getEmail(),
				user.getPassword());
		
		if(record!=null) {
			return "Login success";
		}
		
		return "Login failed";
	}

	@Override
	public String register(User user) {
		
		User record=userRepo.save(user);
		
		if(record!=null)
		{
			return "Registration completed";
		}
		return "Registration failed";
	}


}
