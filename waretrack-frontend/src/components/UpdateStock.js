import React, { useState } from 'react';
import axios from 'axios';

function UpdateStock() {
  const [productId, setProductId] = useState();
  const [quantity, setQuantity] = useState(0);

  const handleReceive = () => {
    axios.post(`http://localhost:8080/api/products/receive/${productId}?quantity=${quantity}`)
      .then(res => alert("✅ Stock Updated!"))
      .catch(err => alert(err.message));
  };

  const handleFulfill = () => {
    axios.post(`http://localhost:8080/api/products/fulfill/${productId}?quantity=${quantity}`)
      .then(res => alert("✅ Order Fulfilled!"))
      .catch(err => alert(err.message));
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Update Stock</h2>
      <input placeholder="Product ID" onChange={e => setProductId(e.target.value)} />
      <input placeholder="Quantity" type="number" onChange={e => setQuantity(e.target.value)} />
      <button onClick={handleReceive}>Receive Shipment</button>
      <button onClick={handleFulfill}>Fulfill Order</button>
    </div>
  );
}

export default UpdateStock;
