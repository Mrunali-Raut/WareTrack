package com.waretrack.service;

import com.waretrack.model.Product;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class WarehouseService {

    private final Map<String, Product> inventory = new HashMap<>();


    public Product addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        return product;
    }

    public Product receiveShipment(String productId, int quantity) {
        Product product = inventory.get(productId);
        if (product != null) {
            product.setQuantity(product.getQuantity() + quantity);
            return product;
        } else {
            throw new RuntimeException("Product not found");
        }
    }

    public Product fulfillOrder(String productId, int quantity) {
        Product product = inventory.get(productId);
        if (product != null) {
                product.setQuantity(product.getQuantity() - quantity);
                return product;
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
