package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DemoApplicationController {

    public final List<Reservation> allReservations = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Reservation inReservation) {
        allReservations.add(inReservation);
    }

    @GetMapping("/getAll")
    public List<Reservation> getAll() {
        return allReservations;
    }
    @GetMapping("/deleteAll")
    public void deleteAll() {
        allReservations.clear();
    }

}
