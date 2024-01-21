package com.example.demo;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.auth.oauth2.GoogleCredentials;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;

@Configuration
public class FirebaseConfig {

    @Bean
    public FirebaseApp initializeFirebase() {
        try {
            InputStream serviceAccount = getClass().getResourceAsStream("/nomadhub-767de-firebase-adminsdk-oc4yn-1c8aefed08.json");

            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://nomadhub-767de-default-rtdb.europe-west1.firebasedatabase.app/")
                    .build();

            return FirebaseApp.initializeApp(options);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Error initializing Firebase: " + e.getMessage());
        }
    }
}
