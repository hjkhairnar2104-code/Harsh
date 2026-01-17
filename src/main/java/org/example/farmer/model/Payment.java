package org.example.farmer.model;



import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;
    private String paymentMethod;
    private String status;

    // 🔗 ONE PAYMENT → ONE BOOKING
    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
}
