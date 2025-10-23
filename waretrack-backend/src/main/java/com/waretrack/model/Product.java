package com.waretrack.model;

public class Product {
    private String productId;
    private String name;
    private int quantity;
 

    public Product(String productId, String name, int quantity, int reorderThreshold) {
        this.productId = productId;
        this.name = name;
        this.quantity = quantity;
    }

    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

}
