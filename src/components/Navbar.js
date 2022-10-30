import React from 'react';

// Array of navigation bar items.
const navBarItems = ["About", "Work", "Resume", "Contact"];

export default function Nav() {
  const darkTheme = {
    color: "white",
  };

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

  const linkStyle = {
    color: "white",
    paddingRight: "30px",
    fontSize: "18px",
  };

  const developerStyle = {
    display: "flex",
    color: "white",
    fontSize: "18px",
    justifyContent: "center"
  };

  return (
    <nav className="navbar navbar-expand-lg nav-header navbar-dark bg-dark" style={darkTheme}>
      
      {
        // Add AUTHOR to left side of navigation bar.
        <div className="container-fluid">
          <div className='navbar-brand nav-text mx-2 card' style={authorStyle}>
            <a>Brian Zoulko</a>
            <a style={developerStyle}>Web / Software Developer</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      }

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {
          // Add navigation bar items to html.
          navBarItems.map((barItem) => {
            const text = barItem;
            const ref = "#" + text;
            return (
              <ul className='nav navbar-nav'>
                <li className='nav-item ms-4'>
                  <a className="nav-link nav-text" aria-current="page" style={linkStyle} href={ref}>{text}</a>
                </li>
              </ul>
            );
          })          
        }
      </div>
    </nav>
    
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    //     Navbar
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavDropdown"
    //     aria-controls="navbarNavDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="#">
    //           Home <span className="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Features
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">
    //           Pricing
    //         </a>
    //       </li>
    //       <li className="nav-item dropdown">
    //         <a
    //           className="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdownMenuLink"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           Dropdown link
    //         </a>
    //         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //           <a className="dropdown-item" href="#">
    //             Action
    //           </a>
    //           <a className="dropdown-item" href="#">
    //             Another action
    //           </a>
    //           <a className="dropdown-item" href="#">
    //             Something else here
    //           </a>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
