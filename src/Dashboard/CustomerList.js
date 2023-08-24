// CustomerList.js
import React from 'react';
import './CustomerList.css';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 3,
    name: 'Himanshu',
    image: 'https://images.unsplash.com/photo-1612287668012-49f536b3a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 4,
    name: 'Onny',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 5,
    name: 'Neno',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 6,
    name: 'anny',
    image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 7,
    name: 'Pinu',
    image: 'https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  // Add more dummy customers
];

const CustomerList = () => {
  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div className="customer-item" key={customer.id}>
          <div className="customer-image">
            <img src={customer.image} alt={customer.name} />
          </div>
          <div className="customer-details">
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
