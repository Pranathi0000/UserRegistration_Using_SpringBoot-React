package com.restapi.services;

import com.restapi.model.User;

public interface UserServices {
	
	//for user login
	public String login(User user);
	
	//for new user registration
	public String register(User user);

	

}
