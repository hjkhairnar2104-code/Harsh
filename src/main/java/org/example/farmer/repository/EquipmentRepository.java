package org.example.farmer.repository;



import org.example.farmer.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {

    List<Equipment> findByLocationContainingIgnoreCase(String location);

}

