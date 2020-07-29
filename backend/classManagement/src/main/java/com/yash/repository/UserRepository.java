package com.yash.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.yash.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	//SELECT * FROM USER WHERE email="nutan@gmail.com" AND PASSWORD = "123"
//	@Query(value = "SELECT * FROM USER WHERE email=:email and password= : password")
//	User loginUser(String email, String password);
	
	Optional<User>  findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(String email);
	
	
	
	

}
