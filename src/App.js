import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Login from './components/login/login';
import HeaderNavbar from './components/header/headernavbar';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <HeaderNavbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
