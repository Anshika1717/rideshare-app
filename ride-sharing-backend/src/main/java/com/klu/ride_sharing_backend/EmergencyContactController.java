package com.klu.ride_sharing_backend;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emergency")
public class EmergencyContactController {

    @Autowired
    private EmergencyContactRepository emergencyContactRepository;

    @Autowired
    private UserRepository userRepository;

    // Save or update emergency contact
    @PostMapping("/save")
    public ResponseEntity<String> saveEmergencyContact(@RequestBody EmergencyContact contact,
                                                       @RequestHeader("user_id") String userIdHeader) {
        try {
            Long userId = Long.parseLong(userIdHeader);
            Optional<User> userOpt = userRepository.findById(userId);

            if (userOpt.isEmpty()) {
                return ResponseEntity.status(400).body("Invalid user ID.");
            }

            User user = userOpt.get();
            Optional<EmergencyContact> existing = emergencyContactRepository.findByUser(user);

            if (existing.isPresent()) {
                EmergencyContact updated = existing.get();
                updated.setName(contact.getName());
                updated.setPhone(contact.getPhone());
                updated.setEmail(contact.getEmail());
                emergencyContactRepository.save(updated);
            } else {
                contact.setUser(user);
                emergencyContactRepository.save(contact);
            }

            return ResponseEntity.ok("Emergency contact saved successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to save contact");
        }
    }

    // Get emergency contact by user ID
    @GetMapping("/{userId}")
    public ResponseEntity<EmergencyContact> getEmergencyContact(@PathVariable("userId") Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        Optional<EmergencyContact> contact = emergencyContactRepository.findByUser(userOpt.get());
        return contact.map(ResponseEntity::ok)
                      .orElseGet(() -> ResponseEntity.status(404).build());
    }
}
