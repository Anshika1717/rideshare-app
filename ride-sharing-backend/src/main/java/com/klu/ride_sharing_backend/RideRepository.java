//package com.klu.ride_sharing_backend;
//
//public interface RideRepository {
//
//}

package com.klu.ride_sharing_backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
    List<Ride> findByUserId(Long userId);
}
