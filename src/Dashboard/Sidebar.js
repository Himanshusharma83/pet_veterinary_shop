import React from 'react';
import './Sidebar.css'; // Import your CSS stylesheet

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="sidebar-item">
        <span className="sidebar-icon">📦</span>
        <a href="#" className="sidebar-link">
          Orders
        </a>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">💰</span>
        <a href="#" className="sidebar-link">
          Revenue
        </a>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">🛍️</span>
        <a href="#" className="sidebar-link">
          Products
        </a>
      </div>
      {/* Add more sidebar items */}
    </div>
  );
};

export default Sidebar;
