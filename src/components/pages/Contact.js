import React from 'react';
import '../../App.css';

export default function Contact() {

  const linkStyle = {
    display: "flex",
    color: "white",
    fontFamily: 'helvetica',
    alignText: "text-justify",
    width: "100%"
  };

  const hrefStyle = {
    display: "flex",
    color: "violet",
    fontFamily: 'helvetica',
    alignText: "text-justify",
    width: "100%"
  };

  return (
    <div className='pt-2 mt-2'>
      <h1>Contact Page</h1><hr></hr>
      <ul>
        <li className='text' style={linkStyle}>
          <a style={linkStyle}>Phone: </a>
          <a style={hrefStyle} href="Tel: 1-909-835-8703">1 (909) 835-8703</a>
        </li>
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <a style={linkStyle}>Email: </a>
          <a style={hrefStyle} href="mailto:bzoulko@gmail.com">bzoulko@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <a style={linkStyle}>LinkedIn: </a>
          <a style={hrefStyle} href="https://www.linkedin.com/in/brian-zoulko-753810240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc3GDST0qT3G4bQVo5QVuzw%3D%3D" target="_blank">LinkedIn</a>
        </li>        
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <a style={linkStyle}>Indeed: </a>
          <a style={hrefStyle} href="https://indeed.com" target="_blank">Indeed</a>
        </li>        
      </ul>
      
    </div>
  );
}
