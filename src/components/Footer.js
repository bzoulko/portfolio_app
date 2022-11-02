import React from "react";
import { MDBFooter } from "mdbreact";

const Footer = () => {
  var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  }

  var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }

  return (
    <MDBFooter className="font-small pt-2 mt-2"><hr></hr>
      <div className="footer-copyright text-center py-3">
        <div style={{phantom, style}}>
          {new Date().getFullYear()} Created By: <a style={{ color: "green", textAlign: "center", marginTop: "-50px" }}> Brian Zoulko </a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;