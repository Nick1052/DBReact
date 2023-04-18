// Utility
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// CSS for pages
import './App.css';
import './css/LandingPage.css'
import './css/MainPage.css'
import './css/Popup.css'

// Pages
import LandingPage  from './pages/LandingPage';
import MainPage from './pages/MainPage'


// Components
import Popup from "./components/CustomPopUp";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/pages/LandingPage.js" />} />
          <Route path= "pages/LandingPage.js" element = {<LandingPage/>}/>
          <Route path = "pages/MainPage.js" element = {<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
