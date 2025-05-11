//package com.klu.ride_sharing_backend;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.Optional;
//
//public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {
//    Optional<EmergencyContact> findByUserId(String userId);  // Get contact by user ID
//}


package com.klu.ride_sharing_backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {
    Optional<EmergencyContact> findByUser(User user);
}
