package com.ujjawalgupta29.leetcode_back_end.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;

@Service
public class CodeExecutionService {

    public String executeCode(String code) {
        String result = "";
        try {
            // Save code to a file
            String filePath = "C:\\Users\\Admin\\Downloads\\Leetcode-Clone\\leetcode-back-end\\src\\main\\resources\\static\\main.cpp"; // Adjust path based on your Docker setup
            Files.write(Paths.get(filePath), code.getBytes());

            // Build Docker run command
            ProcessBuilder processBuilder = new ProcessBuilder(
                    "docker", "run", "-v", "C:\\Users\\Admin\\Downloads\\Leetcode-Clone\\leetcode-back-end\\src\\main\\resources\\static\\:/usr/src/app/code", "cpp-code-executor"
            );

            // Start the Docker container
            Process process = processBuilder.start();

            // Get the output from the process
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                result += line + "\n";
            }

            process.waitFor();
        } catch (Exception e) {
            e.printStackTrace();
            result = "Error: " + e.getMessage();
        }
        return result;
    }
}
