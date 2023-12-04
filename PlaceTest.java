package com.example.demo;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class PlaceTest {

    public static void main(String[] args) throws Exception {
        URL url = new URL("http://localhost:8080/api/places/add");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        // Set up the request
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);

        // Set the JSON payload
        String jsonInputString = "{ \"name\": \"Coffee Shop\", \"location\": \"Downtown\" }";

        // Send the request
        try (OutputStream os = connection.getOutputStream()) {
            byte[] input = jsonInputString.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        // Get the response
        int responseCode = connection.getResponseCode();
        System.out.println("Response Code: " + responseCode);

        // Read the response, if needed
        // ...

        connection.disconnect();
    }
}
