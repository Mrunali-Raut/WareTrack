import React from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import UpdateStock from './components/UpdateStock';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>WareTrack - Warehouse Inventory Tracker</h1>
      <AddProduct />
      <UpdateStock />
      <ProductList />
    </div>
  );
}

export default App;
