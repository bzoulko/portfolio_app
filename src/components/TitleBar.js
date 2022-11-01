import React from 'react';
import ClipPhoto from './ClipPhoto';
import '../App.css';

export default function Navbar() {

  const authorStyle = {
    color: "rgba(249, 248, 207, 0.8)",
    fontFamily: 'helvetica',
    fontSize: "47px",
    paddingLeft: "30px",
    paddingRight: "30px",
    border: "1px solid rgba(161, 160, 132, 0.8)",
    borderRadius: ".3rem",
    boxShadow: "0 0rem 0rem rgba(161, 160, 132, 0.8), 5px 0.15rem 0.15rem rgba(161, 160, 132, 0.8)",
    backgroundColor: "black",
  };

  const developerStyle = {
    display: "flex",
    color: "white",
    fontSize: "18px",
    justifyContent: "center"
  };

  return (
    <nav className="navbar navbar-expand-lg nav-header navbar-dark bg-dark" style={{color: "white"}}>
      
      {/* // Add AUTHOR to left side of navigation bar. */}
      <div className="container-fluid">
        <div className='navbar-brand nav-text mx-2 card' style={authorStyle}>
          <a>Brian Zoulko</a>
          <a style={developerStyle}>Web / Software Developer</a>
        </div>
      </div>
      
    </nav>

  );
}
