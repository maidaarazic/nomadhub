package com.example.demo;
//src/main/java/com/example/demo/UserRepository.java
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
 User findByEmail(String email);
 // You can add other custom queries if needed
}
