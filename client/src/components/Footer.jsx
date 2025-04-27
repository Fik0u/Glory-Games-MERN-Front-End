import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../images/Logo.png';
import '../components/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg py-2">
      <Container className="text-center text-white">
        <Row>
          <Col>

            <Image src={logo} alt="Glory Games Logo" className="footer-logo mb-2" />
          </Col>
        </Row>
        <Row>
          <Col>

            <div className="social-icons mb-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>

            <p>© 2025 Glory Games. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
