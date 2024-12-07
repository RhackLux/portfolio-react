import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // Linkendin
import navIcon2 from "../assets/img/nav-icon2.svg"; // facebook 
import navIcon3 from "../assets/img/nav-icon3.svg";  //Instagram

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/rocky-gannaban-26629a336/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/rhackz.luxury"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_rhackz.l"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
          
        </Row>
        <p>react.js & Node.js</p>
      </Container>
    
    </footer>
  )
}
