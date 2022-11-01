import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Photo from './Photo';
import ClipPhoto from './ClipPhoto';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    // ****************************************************
    // PORTFOLIO Page: Shows all the assignments thus far.
    // ****************************************************
    if (currentPage === 'Portfolio') {
      let htmlStr =
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol><Portfolio /></MDBCol>
              <MDBCol><ClipPhoto /></MDBCol>
            </MDBRow>
          </MDBContainer >
        </div>;
      return htmlStr;
    }


    // ****************************************************
    // CONTACT Page: Display my contact informaton.
    // ****************************************************
    if (currentPage === 'Contact') {
      let htmlStr =
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <Contact />
            </MDBRow>
          </MDBContainer >
        </div>;
      return htmlStr;
    };


    // ****************************************************
    // Resume Page: My current resume for employer's to see.
    // ****************************************************
    if (currentPage === 'Resume') {
      let htmlStr =
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <Resume />
            </MDBRow>
          </MDBContainer >
        </div>;
      return htmlStr;
    };


    // ************ D E F A U L T - P A G E ***************
    // ABOUT Page: This page describes me and my abilities.
    // ****************************************************
    let htmlStr =
      <div className="square bg-primary rounded-bottom">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol><About /></MDBCol>
            <MDBCol><Photo /></MDBCol>
          </MDBRow>
        </MDBContainer >
      </div>;
    return htmlStr;

  }

  // Set the selected page on the screen for the user to see.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}