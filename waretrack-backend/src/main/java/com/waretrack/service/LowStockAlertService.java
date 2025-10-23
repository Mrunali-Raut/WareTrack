package com.waretrack.service;

import com.waretrack.model.Product;
import org.springframework.stereotype.Service;

@Service
public class LowStockAlertService implements AlertService {
    @Override
    public void checkAndAlert(Product product) {
        if (product.getQuantity() < product.Threshold()) {
            System.out.println("Low stock for " + product.getName() + " – only " + product.getQuantity() + " left!");
        }
    }
}
