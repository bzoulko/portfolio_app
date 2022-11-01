// /**
//  * Pulled logic from: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
//  * 
//  * Comments: This routine was created based on the above locations sample code.
//  */
// import React from "react";
// import {
//   Box,
//   Container,
//   Row,
//   Column,
//   FooterLink,
//   Heading,
// } from "./FooterStyles";
  
// const Footer = () => {
//   return (
//     <Box>
//       <h1 style={{ 
//         color: "green", 
//         textAlign: "center", 
//         marginTop: "-50px" }}>        
//       </h1>
//       <Container>
//         <Row>
//           <Column>
//             {/* <Heading href="#">About</Heading>*/}
//             <FooterLink href="#">About</FooterLink>
//             {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink> */}
//           </Column>
//           <Column>
//             <Heading>Work</Heading>
//             {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink> */}
//           </Column>
//           <Column>
//             <Heading>Resume</Heading>
//             {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
//             <FooterLink href="#">Ahemdabad</FooterLink>
//             <FooterLink href="#">Indore</FooterLink>
//             <FooterLink href="#">Mumbai</FooterLink> */}
//           </Column>
//           <Column>
//             <Heading>Contact</Heading>
//             {/* <FooterLink href="#">
//               <i className="fab fa-facebook-f">
//                 <span style={{ marginLeft: "10px" }}>
//                   Facebook
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-instagram">
//                 <span style={{ marginLeft: "10px" }}>
//                   Instagram
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-twitter">
//                 <span style={{ marginLeft: "10px" }}>
//                   Twitter
//                 </span>
//               </i>
//             </FooterLink>
//             <FooterLink href="#">
//               <i className="fab fa-youtube">
//                 <span style={{ marginLeft: "10px" }}>
//                   Youtube
//                 </span>
//               </i>
//             </FooterLink> */}
//           </Column>
//         </Row>
//       </Container>
//     </Box>
//   );
// };
// export default Footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
      {/* <MDBContainer fluid className="text-center text-md-left"> */}
        {/* <MDBRow> */}
          {/* <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol> */}
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        {/* </MDBRow> */}
      {/* </MDBContainer> */}
      <div className="footer-copyright text-center py-3">
        <div style={{phantom, style}}>
          {/*&copy;*/} {new Date().getFullYear()} Created By: <a style={{ color: "green", textAlign: "center", marginTop: "-50px" }}> Brian Zoulko </a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;