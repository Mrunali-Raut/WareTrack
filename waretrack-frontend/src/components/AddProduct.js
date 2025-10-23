import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({ productId: '', name: '', quantity: 0, reorderThreshold: 0 });

  const handleChange = e => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/products/add', product)
      .then(res => alert("✅ Product Added!"))
      .catch(err => alert(err.message));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Add Product</h2>
      <input placeholder="Product ID" name="productId" onChange={handleChange} />
      <input placeholder="Name" name="name" onChange={handleChange} />
      <input placeholder="Quantity" type="number" name="quantity" onChange={handleChange} />
      <input placeholder="Threshold" type="number" name="reorderThreshold" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
}

export default AddProduct;
