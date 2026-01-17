package org.example.farmer.service;


import org.example.farmer.dto.MyBookingResponseDTO;
import org.example.farmer.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepo;

    public BookingService(BookingRepository bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    // ✅ FARMER: VIEW HIS BOOKINGS WITH PRODUCT DETAILS
    public List<MyBookingResponseDTO> myBookings(Long userId) {

        return bookingRepo.findByUser_Id(userId)
                .stream()
                .map(b -> new MyBookingResponseDTO(
                        b.getId(),
                        b.getFromDate(),
                        b.getToDate(),
                        b.getNumberOfDays(),
                        b.getStatus(),

                        b.getEquipment().getId(),
                        b.getEquipment().getName(),
                        b.getEquipment().getLocation(),
                        b.getEquipment().getPricePerDay(),

                        b.getTotalAmount()
                ))
                .toList();
    }
}
