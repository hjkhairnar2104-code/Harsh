package org.example.farmer.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fromDate;
    private String toDate;

    private int numberOfDays;

    private String location;

    private Double pricePerDay;
    private Double totalAmount;

    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "equipment_id")
    private Equipment equipment;
}
