package org.example.farmer.repository;


import org.example.farmer.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    // FARMER: bookings by logged-in user
    List<Booking> findByUser_Id(Long userId);

    // OWNER: bookings for specific equipment
    boolean existsByEquipment_Id(Long equipmentId);
}


