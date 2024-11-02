import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <div
      className="about-container"
      style={{
        padding: '40px',
        backgroundImage: 'linear-gradient(to bottom, #FFF0D1, #795757)',
      }}
    >
      
      {/* Our Mission Section */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={6} className="order-md-1 order-2">
          <h2>Our Mission</h2>
          <p>
            Our mission is to drive meaningful change through innovative solutions that empower communities, foster growth, and create opportunities. We believe in the power of teamwork, integrity, and dedication to bring about a positive impact in everything we do.
          </p>
        </Col>
        <Col xs={12} md={6} className="order-md-2 order-1 d-flex justify-content-center">
          <Image
            src="https://www.andacademy.com/resources/wp-content/uploads/2023/12/feature-20.webp"
            alt="Our Mission"
            fluid
            rounded
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
      
      {/* Our Team Section */}
      <Row className="align-items-center">
        <Col xs={12} md={6} className="order-md-1 order-2 d-flex justify-content-center">
          <Image
            src="https://t4.ftcdn.net/jpg/06/63/93/25/360_F_663932563_i8b6HFeIGcHXk94DDxv9GxJlKeYEWX6z.jpg"
            alt="Our Team"
            fluid
            rounded
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6} className="order-md-2 order-1">
          <h2>Our Team</h2>
          <p>
            Our team is composed of dedicated professionals from diverse backgrounds who share a passion for excellence. Together, we bring a wealth of experience, creativity, and innovation to achieve our mission and support our community.
          </p>
        </Col>
      </Row>
      
    </div>
  );
}

export default About;
