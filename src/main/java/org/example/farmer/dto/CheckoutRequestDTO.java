package org.example.farmer.dto;


import lombok.Data;

@Data
public class CheckoutRequestDTO {

    private Long equipmentId;

    // yyyy-MM-dd
    private String fromDate;
    private String toDate;

    private int numberOfDays;

    private String paymentMethod;

    private Double pricePerDay;
    private Double totalAmount;

    private String location;
}
