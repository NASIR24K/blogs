import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaFax, FaPhone, FaLink, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css'; // You can create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-column">
            <div className="icon-heading">
              <FaMapMarkerAlt className="icon" />
              <h4 className="heading">Address</h4>
            </div>
            <p>123 Street, City</p>
            <div className="icon-heading">
              <FaFax className="icon" />
              <h4 className="heading">Fax:</h4>
            </div>
            <p>+8801725-874024</p>
            <div className="icon-heading">
              <FaPhone className="icon" />
              <h4 className="heading">Phone</h4>
            </div>
            <p>+8801537-222086</p>
          </Col>
          <Col md={4} className="footer-column">
            <div className="icon-heading">
              <FaLink className="icon" />
              <h4 className="heading">Useful Links</h4>
            </div>
            <ul>
              <li><a href="0#">Home</a></li>
              <li><a href="0#">About</a></li>
              <li><a href="0#">Services</a></li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col md={4} className="footer-column">
            <div className="icon-heading">
              <FaFacebook className="icon" />
              <h4 className="heading">Social Media</h4>
            </div>
            <ul className="social-icons">
              <li><a href="0#"><FaFacebook /></a></li>
              <li><a href="0#"><FaTwitter /></a></li>
              <li><a href="0#"><FaInstagram /></a></li>
              {/* Add more social media icons and links as needed */}
            </ul>
          </Col>
        </Row>
     
      </Container>
      <Row  style={{ backgroundColor: "#ccc" }}>
          <Col md={12} className="text-center" bg='light'>
            <h1 className="copyright">&#169; 2023 All Rights Reserved</h1>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
