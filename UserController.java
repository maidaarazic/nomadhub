package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

 @Autowired
 private UserRepository userRepository;

 @PostMapping("/signup")
 public User signup(@RequestBody User user) {
     // Add validation logic if needed
     return userRepository.save(user);
 }

 @PostMapping("/login")
 public String login(@RequestBody User user) {
     String email = user.getEmail();
     String password = user.getPassword();

     User existingUser = userRepository.findByEmail(email);

     if (existingUser != null && existingUser.getPassword().equals(password)) {
         return "Login successful!";
     } else {
         return "Login failed. Invalid credentials.";
     }
 }
}
