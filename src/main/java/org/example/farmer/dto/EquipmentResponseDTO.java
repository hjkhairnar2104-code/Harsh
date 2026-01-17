package org.example.farmer.dto;



import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class EquipmentResponseDTO {
    private Long id;
    private String name;
    private Double pricePerDay;
    private String location;
    private String description;
    private boolean available;
}

