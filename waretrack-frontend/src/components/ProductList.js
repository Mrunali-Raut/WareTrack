import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState();

  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/products/all')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Inventory</h2>
      <ul>
        {products.map(p => (
          <li key={p.productId}>
            <strong>{p.name}</strong> - Quantity: {p.quantity} (Threshold: {p.reorderThreshold})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
