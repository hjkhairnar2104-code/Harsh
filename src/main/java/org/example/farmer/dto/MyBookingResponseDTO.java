package org.example.farmer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MyBookingResponseDTO {

    private Long bookingId;

    private String fromDate;
    private String toDate;
    private int numberOfDays;
    private String status;

    // Equipment details
    private Long equipmentId;
    private String equipmentName;
    private String location;
    private Double pricePerDay;

    private Double totalAmount;
}
