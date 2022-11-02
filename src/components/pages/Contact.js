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
          <p style={linkStyle}>Phone: </p>
          <a style={hrefStyle} href="Tel: 1-909-835-8703">1 (909) 835-8703</a>
        </li>
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <p style={linkStyle}>Email: </p>
          <a style={hrefStyle} href="mailto:bzoulko@gmail.com">bzoulko@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <p style={linkStyle}>LinkedIn: </p>
          <a style={hrefStyle} rel="noreferrer" href="https://www.linkedin.com/in/brian-zoulko-753810240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bc3GDST0qT3G4bQVo5QVuzw%3D%3D" target="_blank">LinkedIn</a>
        </li>        
      </ul>
      <ul>
        <li className='text' style={linkStyle}>
          <p style={linkStyle}>Indeed: </p>
          <a style={hrefStyle} rel="noreferrer" href="https://indeed.com" target="_blank">Indeed</a>
        </li>        
      </ul>
      
    </div>
  );
}
