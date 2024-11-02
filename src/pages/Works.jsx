import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Works() {
  return (
    <div
      style={{
        padding: '40px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, #FFF0D1, #795757)',
        minHeight: '100vh',
      }}
    >
      <h2 style={{ color: '#795757' }}>Our Gallery</h2>
      
      <Row className="mt-4">
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk10.jpg')} alt="Gallery Image 1" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk9.jpg')} alt="Gallery Image 2" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk8.jpg')} alt="Gallery Image 3" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk1.jpg')} alt="Gallery Image 4" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk2.jpg')} alt="Gallery Image 5" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk3.jpg')} alt="Gallery Image 6" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk4.jpg')} alt="Gallery Image 7" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk7.jpg')} alt="Gallery Image 8" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk6.jpg')} alt="Gallery Image 9" fluid className="gallery-image" />
        </Col>
        <Col xs={12} sm={6} md={4} className="mb-4">
          <Image src={require('../images/wk5.jpg')} alt="Gallery Image 10" fluid className="gallery-image" />
        </Col>
      </Row>

      {/* CSS for image styling */}
      <style>
        {`
          .gallery-image {
            border-radius: 8px;
            transition: transform 0.3s ease;
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
          .gallery-image:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default Works;
