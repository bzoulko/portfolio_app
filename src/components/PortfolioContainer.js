import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Photo from '../components/Photo';
import ClipPhoto from '../components/ClipPhoto';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      const hm =
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <Home />
            </MDBRow>
          </MDBContainer >
        </div>;
      return hm;
    }
    if (currentPage === 'About') {
      const pg = 
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6"><About /></MDBCol>
              <MDBCol md="6"><Photo /></MDBCol>
            </MDBRow>
          </MDBContainer >
        </div>;
      return pg;
    }
    if (currentPage === 'Work') {
      const wk = 
        <div className="square bg-primary rounded-bottom">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6"><Work /></MDBCol>
              <MDBCol md="6"><ClipPhoto /></MDBCol>
            </MDBRow>
          </MDBContainer >
        </div>;
      return wk;
    }

    const ct =
      <div className="square bg-primary rounded-bottom">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <Contact />
          </MDBRow>
        </MDBContainer >
      </div>;
    return ct;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
