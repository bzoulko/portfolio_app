import React from 'react';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js';

// Array of navigation bar items.
const navBarItems = ["About_Me", "Work", "Contact_Me", "Resume"];

export default function Nav() {
  const darkTheme = {
    color: "white",
  };

  const authorStyle = {
    color: "white",
    fontFamily: 'helvetica',
    fontSize: "47px",
    paddingLeft: "30px",
    paddingRight: "30px",
    backgroundColor: "black"
  };

  const linkStyle = {
    color: "white",
    paddingRight: "30px"
  };

  return (
    <nav className="navbar navbar-expand-lg nav-header navbar-dark bg-dark" style={darkTheme}>
      <div className="container-fluid">
        <a className='navbar-brand nav-text mx-2 card' style={authorStyle}>Brian Zoulko</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

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
