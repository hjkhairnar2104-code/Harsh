package org.example.farmer.controller;



import org.example.farmer.dto.MyBookingResponseDTO;
import org.example.farmer.model.User;
import org.example.farmer.repository.UserRepository;
import org.example.farmer.service.BookingService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class BookingController {

    private final BookingService bookingService;
    private final UserRepository userRepo;

    public BookingController(BookingService bookingService,
                             UserRepository userRepo) {
        this.bookingService = bookingService;
        this.userRepo = userRepo;
    }

    // ✅ FARMER: VIEW HIS BOOKINGS
    @PreAuthorize("hasRole('FARMER')")
    @GetMapping("/my")
    public List<MyBookingResponseDTO> myBookings(Authentication auth) {

        User user = userRepo.findByEmail(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return bookingService.myBookings(user.getId());
    }
}
