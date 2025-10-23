package com.waretrack.controller;

import com.waretrack.model.Product;
import com.waretrack.service.WarehouseService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final WarehouseService warehouseService;

    public ProductController(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @PostMapping("/add")
    public Product addProduct(Product product) {
        return warehouseService.addProduct(product);
    }

    @PostMapping("/receive/{productId}")
    public Product receiveShipment(String productId, int quantity) {
        return warehouseService.receiveShipment(productId, quantity);
    }

    @PostMapping("/fulfill/{productId}")
    public Product fulfillOrder(String productId,int quantity) {
        return warehouseService.fulfillOrder(productId, quantity);
    }

    @GetMapping("/all")
    public Collection<Product> getAllProducts() {
        return warehouseService.getInventory();
    }
}
