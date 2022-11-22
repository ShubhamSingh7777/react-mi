import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/products.css';
const Products = ({products}) => {
  return (
    <>
  
        <Row className="roww">
            <Col className='bar' md={4}></Col>
            <Col className='center_bar' md={4}>{products}</Col>
            <Col className='bar' md={4}></Col>
        </Row>
    </>
  )
}

export default Products