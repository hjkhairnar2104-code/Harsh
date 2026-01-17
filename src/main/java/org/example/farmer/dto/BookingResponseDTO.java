package org.example.farmer.dto;



import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BookingResponseDTO {
    private Long id;
    private Long equipmentId;
    private String bookingDate;
    private String status;
}

