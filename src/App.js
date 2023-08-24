import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import PetList from "./pages/PetList/PetList";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import React, { useState } from 'react';
import LoginForm from './Dashboard/LoginForm';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petlist" element={<PetList />} />
          <Route path="/loginform" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/loginform" />}
          />
          {/* Add a route for '/login' */}
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;