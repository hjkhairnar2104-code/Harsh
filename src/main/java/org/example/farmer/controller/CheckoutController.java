package org.example.farmer.controller;


import org.example.farmer.dto.CheckoutRequestDTO;
import org.example.farmer.dto.CheckoutResponseDTO;
import org.example.farmer.model.User;
import org.example.farmer.repository.UserRepository;
import org.example.farmer.service.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/checkout")
@CrossOrigin
@PreAuthorize("hasRole('FARMER')")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;
    private final UserRepository userRepo;

    public CheckoutController(CheckoutService checkoutService,
                              UserRepository userRepo) {
        this.checkoutService = checkoutService;
        this.userRepo = userRepo;
    }

    @PostMapping
    public CheckoutResponseDTO checkout(
            @RequestBody CheckoutRequestDTO dto,
            Authentication auth) {

        User user = userRepo.findByEmail(auth.getName()).orElseThrow();
        return checkoutService.checkout(dto, user.getId());
    }
}

