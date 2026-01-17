package org.example.farmer.service;

import org.example.farmer.dto.EquipmentRequestDTO;
import org.example.farmer.dto.EquipmentResponseDTO;
import org.example.farmer.model.Equipment;
import org.example.farmer.repository.EquipmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {

    private final EquipmentRepository repo;

    public EquipmentService(EquipmentRepository repo) {
        this.repo = repo;
    }

    // ✅ ADMIN ADD PRODUCT
    public EquipmentResponseDTO add(EquipmentRequestDTO dto) {

        Equipment e = new Equipment();
        e.setName(dto.getName());
        e.setPricePerDay(dto.getPricePerDay());
        e.setDescription(dto.getDescription());
        e.setLocation(dto.getLocation());
        e.setAvailable(true); // initially available

        Equipment saved = repo.save(e);

        return new EquipmentResponseDTO(
                saved.getId(),
                saved.getName(),
                saved.getPricePerDay(),
                saved.getLocation(),
                saved.getDescription(),
                saved.isAvailable() // ✅ FIXED
        );
    }

    // ✅ FARMER / PUBLIC: ALL PRODUCTS
    public List<EquipmentResponseDTO> all() {

        return repo.findAll()
                .stream()
                .map(e -> new EquipmentResponseDTO(
                        e.getId(),
                        e.getName(),
                        e.getPricePerDay(),
                        e.getLocation(),
                        e.getDescription(),
                        e.isAvailable() // ✅ ADDED
                ))
                .toList();
    }

    // ✅ FARMER / PUBLIC: SEARCH BY LOCATION
    public List<EquipmentResponseDTO> search(String location) {

        return repo.findByLocationContainingIgnoreCase(location)
                .stream()
                .map(e -> new EquipmentResponseDTO(
                        e.getId(),
                        e.getName(),
                        e.getPricePerDay(),
                        e.getLocation(),
                        e.getDescription(),
                        e.isAvailable() // ✅ ADDED
                ))
                .toList();
    }

    // ✅ ADMIN DELETE PRODUCT
    public void deleteEquipment(Long id) {
        repo.deleteById(id);
    }
}
