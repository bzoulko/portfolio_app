import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import Footer from './components/Footer';
import Navigation from "./components/Navigation";

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
    if (bLoading && theme !== 'light') {
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
    // <div className='image-background'>
    <div>

      <div className={`App ${theme}`}>

        {/* Title Bar */}
        <TitleBar />

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
          <Navigation />
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default App;
