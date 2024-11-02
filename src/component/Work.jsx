import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Work() {
    const navigate = useNavigate();
  return (
    <div
      className="work-container"
      style={{
        padding: '40px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, white, #FFF0D1)',
      }}
    >
      <h2>Our Works</h2>
      
      <Row className="my-4">
        <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Image
            src={require('../images/wk1.jpg')}
            alt="Work 1"
            fluid
            className="work-image"
          />
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Image
            src={require('../images/wk2.jpg')}
            alt="Work 2"
            fluid
            className="work-image"
          />
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
          <Image
            src={require('../images/wk3.jpg')}
            alt="Work 3"
            fluid
            className="work-image"
          />
        </Col>
      </Row>

      <Button
        variant=""
        style={{ marginTop: '20px', color: 'white', backgroundColor: '#795757' }}
        onClick={() => navigate('/works')}
      >
        See More
      </Button>      
      {/* CSS for image portrait and transition effect */}
      <style>
        {`
          .work-image {
            transition: transform 0.3s ease;
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 8px;
          }
          .work-image:hover {
            transform: scale(1.05);
          }
          /* Add margin between columns on small screens */
          @media (max-width: 768px) {
            .mb-3 {
              margin-bottom: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Work;
