package com.yash.service;


import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.domain.User;
import com.yash.exception.EmailException;
import com.yash.payload.LoginRequest;
import com.yash.repository.UserRepository;

import net.bytebuddy.asm.Advice.Return;
import net.bytebuddy.implementation.bytecode.Throw;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public User saveUser(User newUser) throws SQLException {
//			Optional<User> optional = userRepository.findByEmail(newUser.getEmail());
			if(!(userRepository.findByEmail(newUser.getEmail())).isPresent()) {
				try {
					newUser.setConfirmPassword("");
					return userRepository.save(newUser);
				} catch (Exception e) {
					System.out.println("error: "+e);
					throw new SQLException("SQL Error: "+e);
				}
			}else {
				throw new EmailException("Email " +newUser.getEmail().toString()+ " already exsits.");
			}


			
	}
	
	
	public Optional<User> loginUser(LoginRequest loginUser) {
		Optional<User> user = userRepository.findByEmailAndPassword(loginUser.getEmail(), loginUser.getPassword());
		if(user.isPresent())
			return user;
		throw new EmailException("Wrong Email or Password ");
			
		
		
	}

}
