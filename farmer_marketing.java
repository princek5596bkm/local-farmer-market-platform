// MainApplication.java
package com.farmersmarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class MainApplication {
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }
}

// MarketController.java
@RestController
@RequestMapping("/market")
class MarketController {
    @GetMapping("/products")
    public List<String> getProducts() {
        return Arrays.asList("Apple", "Tomato", "Carrot");
    }
}
