package org.example.farmer.service;


import org.example.farmer.dto.*;
import org.example.farmer.model.User;
import org.example.farmer.repository.BookingRepository;
import org.example.farmer.repository.EquipmentRepository;
import org.example.farmer.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final UserRepository userRepo;
    private final EquipmentRepository equipmentRepo;
    private final BookingRepository bookingRepo;
    private final EquipmentService equipmentService;
    private final PasswordEncoder passwordEncoder;

    public AdminService(
            UserRepository userRepo,
            EquipmentRepository equipmentRepo,
            BookingRepository bookingRepo,
            EquipmentService equipmentService,
            PasswordEncoder passwordEncoder
    ) {
        this.userRepo = userRepo;
        this.equipmentRepo = equipmentRepo;
        this.bookingRepo = bookingRepo;
        this.equipmentService = equipmentService;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ OPTIONAL: ADMIN CREATES FARMER
    public UserResponseDTO createFarmer(CreateUserDTO dto) {

        if (userRepo.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("User already exists");
        }

        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        user.setRole("ROLE_FARMER"); // ✅ FIXED

        User saved = userRepo.save(user);

        return new UserResponseDTO(
                saved.getId(),
                saved.getEmail(),
                saved.getRole()
        );
    }
    public void deleteEquipment(Long id) {

        // ❌ Block delete if equipment is booked
        if (bookingRepo.existsByEquipment_Id(id)) {
            throw new RuntimeException(
                    "Cannot delete equipment. It has active bookings."
            );
        }

        equipmentRepo.deleteById(id);
    }

    // ✅ ADMIN ADDS PRODUCT
    public EquipmentResponseDTO addEquipment(EquipmentRequestDTO dto) {
        return equipmentService.add(dto);
    }




    // ✅ ADMIN VIEW ALL PRODUCTS
    public List<EquipmentResponseDTO> getAllEquipment() {
        return equipmentRepo.findAll()
                .stream()
                .map(e -> new EquipmentResponseDTO(
                        e.getId(),
                        e.getName(),
                        e.getPricePerDay(),
                        e.getLocation(),
                        e.getDescription(),
                        e.isAvailable()

                ))
                .toList();
    }

    // ✅ ADMIN VIEW ALL USERS (ADMIN + FARMER)
    public List<UserResponseDTO> getAllUsers() {
        return userRepo.findAll()
                .stream()
                .map(u -> new UserResponseDTO(
                        u.getId(),
                        u.getEmail(),
                        u.getRole()
                ))
                .toList();
    }

    // ✅ ADMIN VIEW ALL BOOKINGS
    public List<BookingResponseDTO> getAllBookings() {
        return bookingRepo.findAll()
                .stream()
                .map(b -> new BookingResponseDTO(
                        b.getId(),
                        b.getEquipment().getId(),
                        b.getFromDate() + " to " + b.getToDate(),
                        b.getStatus()
                ))
                .toList();
    }

}

