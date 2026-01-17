package org.example.farmer.service;

import org.example.farmer.dto.CheckoutRequestDTO;
import org.example.farmer.dto.CheckoutResponseDTO;
import org.example.farmer.model.*;
import org.example.farmer.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CheckoutService {

    private final BookingRepository bookingRepo;
    private final PaymentRepository paymentRepo;
    private final EquipmentRepository equipmentRepo;
    private final UserRepository userRepo;

    public CheckoutService(
            BookingRepository bookingRepo,
            PaymentRepository paymentRepo,
            EquipmentRepository equipmentRepo,
            UserRepository userRepo
    ) {
        this.bookingRepo = bookingRepo;
        this.paymentRepo = paymentRepo;
        this.equipmentRepo = equipmentRepo;
        this.userRepo = userRepo;
    }

    public CheckoutResponseDTO checkout(CheckoutRequestDTO dto, Long userId) {

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Equipment equipment = equipmentRepo.findById(dto.getEquipmentId())
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        if (!equipment.isAvailable()) {
            throw new RuntimeException("Equipment not available");
        }

        // Create Booking
        Booking booking = new Booking();
        booking.setUser(user);
        booking.setEquipment(equipment);
        booking.setFromDate(dto.getFromDate());
        booking.setToDate(dto.getToDate());
        booking.setNumberOfDays(dto.getNumberOfDays());
        booking.setLocation(dto.getLocation());
        booking.setPricePerDay(dto.getPricePerDay());
        booking.setTotalAmount(dto.getTotalAmount());
        booking.setStatus("CONFIRMED");

        Booking savedBooking = bookingRepo.save(booking);

        // Create Payment
        Payment payment = new Payment();
        payment.setBooking(savedBooking);
        payment.setAmount(dto.getTotalAmount());
        payment.setPaymentMethod(dto.getPaymentMethod());
        payment.setStatus("SUCCESS");

        paymentRepo.save(payment);

        // Update equipment availability
        equipment.setAvailable(false);
        equipmentRepo.save(equipment);

        // ✅ RETURN RESPONSE
        return new CheckoutResponseDTO(
                savedBooking.getId(),
                equipment.getName(),
                booking.getLocation(),
                booking.getFromDate(),
                booking.getToDate(),
                booking.getNumberOfDays(),
                booking.getPricePerDay(),
                booking.getTotalAmount(),
                payment.getPaymentMethod(),
                payment.getStatus(),
                "Booking & Payment Successful"
        );
    }



}
