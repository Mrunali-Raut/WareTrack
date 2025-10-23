package com.waretrack.service;

import com.waretrack.model.Product;

public interface AlertService {
    void checkAndAlert(Product product);
}
