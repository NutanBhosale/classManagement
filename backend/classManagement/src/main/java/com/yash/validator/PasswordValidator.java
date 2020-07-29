package com.yash.validator;

import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


import com.yash.domain.User;

@Service
public class PasswordValidator implements Validator {

	@Override
	public boolean supports(Class<?> aClass) {
		return User.class.equals(aClass);
	}

	@Override
	public void validate(Object object, Errors errors) {
		User user = (User) object;
		
		if(user.getPassword().length()<3) {
			errors.rejectValue("password", "Lenght", "password must be at least 3 char");
		}
		
		if(!user.getPassword().equals(user.getConfirmPassword())) {
			errors.rejectValue("confirmPassword", "Match", "password must match");
		}
	}
}
