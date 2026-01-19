package org.example.farmer.controller;



import org.example.farmer.dto.AuthRequestDTO;
import org.example.farmer.dto.AuthResponseDTO;
import org.example.farmer.dto.UserResponseDTO;
import org.example.farmer.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // 🔥 ONE TIME ADMIN SETUP
    @PostMapping("/setup-admin")
    public UserResponseDTO setupAdmin(@RequestBody AuthRequestDTO dto) {
        return authService.createFirstAdmin(dto);
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        // JWT is stateless → nothing to clear
        return ResponseEntity.ok("Logged out successfully");
    }


    // ✅ REGISTER (PUBLIC → FARMER only)
    @PostMapping("/register")
    public UserResponseDTO register(@RequestBody AuthRequestDTO dto) {
        return authService.register(dto);
    }

    // ✅ LOGIN (ALL ROLES)
    @PostMapping("/login")
    public AuthResponseDTO login(@RequestBody AuthRequestDTO request) {
        return authService.login(request);
    }
}
