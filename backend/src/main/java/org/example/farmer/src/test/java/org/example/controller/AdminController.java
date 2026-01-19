package org.example.farmer.controller;


import org.example.farmer.dto.*;
import org.example.farmer.service.AdminService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/admin")
@CrossOrigin
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // ✅ ADMIN ADDS PRODUCT
    @PostMapping("/equipment/add")
    public EquipmentResponseDTO addEquipment(
            @RequestBody EquipmentRequestDTO dto) {

        return adminService.addEquipment(dto);
    }

    // ✅ ADMIN VIEW ALL PRODUCTS
    @GetMapping("/equipment")
    public List<EquipmentResponseDTO> allEquipment() {
        return adminService.getAllEquipment();
    }

    // ✅ ADMIN DELETE PRODUCT
    @DeleteMapping("/equipment/{id}")
    public String deleteEquipment(@PathVariable Long id) {
        adminService.deleteEquipment(id);
        return "Equipment deleted successfully";
    }

    // ✅ ADMIN VIEW ALL USERS (FARMERS)
    @GetMapping("/users")
    public List<UserResponseDTO> users() {
        return adminService.getAllUsers();
    }

    // ✅ ADMIN VIEW ALL BOOKINGS
    @GetMapping("/bookings")
    public List<BookingResponseDTO> bookings() {
        return adminService.getAllBookings();
    }
}
