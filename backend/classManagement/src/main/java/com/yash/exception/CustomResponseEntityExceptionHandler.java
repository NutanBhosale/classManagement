package com.yash.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@RestController
@ControllerAdvice
public class CustomResponseEntityExceptionHandler  extends ResponseEntityExceptionHandler{

	
	@ExceptionHandler
	public final ResponseEntity<Object> handleEmailException(EmailException ex, WebRequest request) {
		EmailExceptionResponse exceptionResponse = new EmailExceptionResponse(ex.getMessage());

		return new ResponseEntity(exceptionResponse, HttpStatus.BAD_GATEWAY);
	}
	
	
	public final ResponseEntity<Object>  handleWrongEmailOrPasswordException(WrongEmailOrPasswordException ex,
			WebRequest request) {
		
		EmailExceptionResponse exceptionResponse = new EmailExceptionResponse(ex.getMessage());

		return new ResponseEntity(exceptionResponse, HttpStatus.BAD_GATEWAY);
	}
		
	
	
		
	
}