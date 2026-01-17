package org.example.farmer.dto;



import lombok.AllArgsConstructor;
import lombok.Data;



import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CheckoutResponseDTO {

    private Long bookingId;

    private String equipmentName;
    private String location;

    private String fromDate;
    private String toDate;
    private int numberOfDays;

    private Double pricePerDay;
    private Double totalAmount;

    private String paymentMethod;
    private String paymentStatus;

    private String message;
}

