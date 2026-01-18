package org.example.farmer.controller;

import org.example.farmer.dto.EquipmentResponseDTO;
import org.example.farmer.service.EquipmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipment")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://wrangle-production.up.railway.app"
})
public class EquipmentController {

    private final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    // ✅ FARMER / PUBLIC: get all products
    @GetMapping("/all")
    public List<EquipmentResponseDTO> all() {
        return equipmentService.all();
    }

    // ✅ FARMER / PUBLIC: search by location
    @GetMapping("/search")
    public List<EquipmentResponseDTO> search(
            @RequestParam String location) {

        return equipmentService.search(location);
    }
}


