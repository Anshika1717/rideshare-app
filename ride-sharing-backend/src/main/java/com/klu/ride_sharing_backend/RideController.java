package com.klu.ride_sharing_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/rides")

public class RideController {

    @Autowired
    private RideRepository rideRepository;

    @PostMapping("/book")
    public ResponseEntity<Ride> bookRide(@RequestBody Ride ride) {
        try {
            if (ride.getUserId() == null) {
                return ResponseEntity.badRequest().body(null);
            }

            ride.setTimestamp(LocalDateTime.now());
            ride.setFare(calculateFare(ride));
            Ride savedRide = rideRepository.save(ride);
            return ResponseEntity.ok(savedRide);
        } catch (Exception e) {
            System.out.println("Error booking ride: " + e.getMessage());
            return ResponseEntity.status(500).body(null);
        }
    }

    private Double calculateFare(Ride ride) {
        return 100.0; // Placeholder logic
    }

    @GetMapping("/history/{userId}")
    public ResponseEntity<List<Ride>> getRideHistory(@PathVariable Long userId) {
        try {
            List<Ride> rides = rideRepository.findByUserId(userId);
            return ResponseEntity.ok(rides);
        } catch (Exception e) {
            System.out.println("Error fetching ride history: " + e.getMessage());
            return ResponseEntity.status(500).body(null);
        }
    }
}
