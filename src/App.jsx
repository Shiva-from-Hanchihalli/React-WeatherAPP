import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import About from './components/About';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
