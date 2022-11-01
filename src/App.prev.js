import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Photo from './components/Photo';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PortfolioContainer from "./components/PortfolioContainer";

import './App.css';
var bLoading = true;

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      console.log("changing to dark theme");
    } else {
      setTheme('light');
      console.log("changing to light theme")
    }
    bLoading = false;
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    if (bLoading && theme != 'light') {
      const toggleBtn = document.getElementById("toggle-btn");
      toggleBtn.setAttribute('checked', 'true');
    }
  }, [theme]);

  const developerStyle = {
    display: "flex",
    color: "white",
    fontSize: "18px",
    justifyContent: "center",
  };

  return (
    <div>
      <div className={`App ${theme}`}>

        {/* Navigation Bar */}
        <Navbar />

        {/* Dark Mode Switch */}        
        <div className='mt-2' style={{ display: "flex", alignContent: "flex-start", paddingLeft: "120px" }}>Light
          <div className="form-check form-switch">
            <label className="dark-switch" style={{ paddingLeft: "10px" }}>
              <input className="form-check-input dark-mode-toggle" type="checkbox" role="switch" id="toggle-btn" onClick={toggleTheme} />
              <span className="form-check-label" for="flexSwitchCheckChecked"></span>
              <p className="nav-text">Dark</p>
            </label>
          </div>
        </div>

        {/* Developer Details */}
        <div style={developerStyle}>
          <PortfolioContainer />
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default App;
