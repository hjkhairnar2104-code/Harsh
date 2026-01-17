package org.example.farmer.dto;



import lombok.Data;

@Data
public class EquipmentRequestDTO {
    private String name;
    private Double pricePerDay;
    private String description;
    private String location;
    private boolean available;
}
