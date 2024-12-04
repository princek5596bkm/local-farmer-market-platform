package com.farmersmarket.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Farmer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer farmerId;
    private String name;
    private String farmName;
    private String description;
    private String email;
    private String phone;
    private String address;
    private Boolean verificationStatus;

    @OneToMany(mappedBy = "farmer")
    private List<Product> products;

    // Getters and Setters
}
