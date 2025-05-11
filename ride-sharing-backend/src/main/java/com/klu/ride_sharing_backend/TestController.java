package com.klu.ride_sharing_backend;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {

    @GetMapping("/ping")
    public String ping() {
        return "Backend is connected!";
    }
}

