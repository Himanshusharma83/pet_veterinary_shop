
import React, { useEffect } from 'react';


import MainContent from './MainContent';
import DashboardItem from './DashboardItem';
// import Graph from './Graph'; // Create a Graph component

import './Dashboard.css';
import CustomerList from './CustomerList';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const dashboardItems = [
    { title: 'Total Orders', icon: '📦', value: '325' },
    { title: 'Revenue', icon: '💰', value: '$12,500' },
    { title: 'Products Sold', icon: '🛍️', value: '754' },
    { title: 'Patients Fit', icon: '', value: '754' },
    { title: 'Accident Cat', icon: '', value: '754' },
    
  ];


  const navigate = useNavigate();

  // const handleLogout = () => {
  //   // onLogout();
  //   localStorage.removeItem('isLoggedIn'); // Remove login state
  //   navigate('/loginform');
  // };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/loginform');
    }
  }, []);

  

  return (
    <div className="dashboard">
      {/* <Sidebar /> */}
      <MainContent>
    
        <div className="dashboard-content">
          <div className="dashboard-items">
            {dashboardItems.map((item, index) => (
              <DashboardItem
                key={index}
                title={item.title}
                icon={item.icon}
                value={item.value}
              />
            ))}
          </div>
          <div className="dashboard-graph">
            {/* <Graph />  */}
            {/* Render the Graph component */}
          </div>
          <div className="dashboard-customers">
            <CustomerList /> {/* Render the CustomerList component */}
          </div>
        </div>
      </MainContent>
    </div>
  );
};

export default App;
