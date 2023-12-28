package com.restapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.model.User;
import com.restapi.services.UserServices;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserServices userService;
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody User user)
	{
		return new ResponseEntity<String>(userService.login(user),HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody User user)
	{
		return new ResponseEntity<String>(userService.register(user),HttpStatus.OK);
	}

}
