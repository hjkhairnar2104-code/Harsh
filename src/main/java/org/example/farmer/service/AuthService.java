package org.example.farmer.service;

import org.example.farmer.dto.AuthRequestDTO;
import org.example.farmer.dto.AuthResponseDTO;
import org.example.farmer.dto.UserResponseDTO;
import org.example.farmer.model.User;
import org.example.farmer.repository.UserRepository;
import org.example.farmer.security.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepo,
                       PasswordEncoder encoder,
                       AuthenticationManager authManager,
                       JwtUtil jwtUtil) {
        this.userRepo = userRepo;
        this.encoder = encoder;
        this.authManager = authManager;
        this.jwtUtil = jwtUtil;
    }

    // FARMER ONLY
    public UserResponseDTO register(AuthRequestDTO dto) {

        if (userRepo.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(encoder.encode(dto.getPassword()));
        user.setRole("FARMER");

        User saved = userRepo.save(user);

        return new UserResponseDTO(saved.getId(), saved.getEmail(), saved.getRole());
    }

    // ONE TIME ADMIN
    public UserResponseDTO createFirstAdmin(AuthRequestDTO dto) {

        if (userRepo.existsByRole("ADMIN")) {
            throw new RuntimeException("Admin already exists");
        }

        User admin = new User();
        admin.setEmail(dto.getEmail());
        admin.setPassword(encoder.encode(dto.getPassword()));
        admin.setRole("ADMIN");

        User saved = userRepo.save(admin);

        return new UserResponseDTO(saved.getId(), saved.getEmail(), saved.getRole());
    }

    public AuthResponseDTO login(AuthRequestDTO dto) {

        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        dto.getEmail(),
                        dto.getPassword()
                )
        );

        User user = userRepo.findByEmail(dto.getEmail()).orElseThrow();

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole());


        return new AuthResponseDTO(token, user.getRole());
    }
}
