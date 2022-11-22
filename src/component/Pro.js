import React from 'react';
import '../styles/product.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Pro = ({pro}) => {
  return (
    <>
          <Row>
                <Col md={6}>
                <div className="ProductReviewCard">
                <img src={pro[0].image} alt=''/>
                <h5>{pro[0].review}</h5>
                <span>{pro[0].name}</span> 
                <b>{pro[0].price}</b> 
                </div>
                </Col>
                <Col md={6}>
                <div className="ProductReviewCard">
                <img src={pro[1].image} alt=''/>
                <h5>{pro[1].review}</h5>
                <span>{pro[1].name}</span> 
                <b>{pro[1].price}</b> 
                </div>
                </Col>
         
          </Row>
    </>
  )
}

export default Pro