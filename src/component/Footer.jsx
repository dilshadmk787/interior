import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = React.forwardRef((props, ref) => (
  <Container ref={ref} fluid style={{ backgroundColor: '#795757' }} className="px-0">
    <Row className="mx-0 py-4">
      {/* Google Map Embed */}
      <Col xs={12} md={6} lg={5} className="d-flex justify-content-center mb-4 mb-md-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.9689738236025!2d76.27205687046782!3d11.060603111427735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62d7d45dd126d%3A0xc6e84abecff9c104!2sMelattur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1730049050113!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </Col>
      
      {/* Contact Information */}
      <Col xs={12} md={6} lg={7} style={{ color: '#FFF0D1' }}>
        <Row className="text-center mb-3">
          <Col>
            <h2>CONTACT US</h2>
          </Col>
        </Row>
        <Row className="text-center text-md-start">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h4>Address</h4>
            <p>Melattur, Kerala</p>
            <p>Phone: 1234567890</p>
            <p>Email: <a href="mailto:info@melattur.com" style={{ color: '#FFF0D1' }}>info@melattur.com</a></p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center gap-3" style={{ fontSize: '2rem' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2' }}>
              <FaFacebook />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
              <FaWhatsapp />
            </a>
            <a href="mailto:your-email@example.com" style={{ color: '#D44638' }}>
              <FaEnvelope />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
));

export default Footer;
