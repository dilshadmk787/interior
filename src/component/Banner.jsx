import React from 'react'
import bg from '../images/bg.jpeg'
import Button from 'react-bootstrap/Button';

function Banner() {
  return (
    
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh',color:'linear-gradient(to bottom, #FFF0D1, #000000)',textAlign:'center',alignContent:'center' }}>
    <h1>INT-ARCH</h1>
    <h1>Transforming Spaces, Elevating Experiences</h1>
    <Button variant="outline-dark">Reach Us</Button>  </div>  )
}

export default Banner