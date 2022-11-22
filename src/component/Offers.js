import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/offer.css';

const Offers = ({offer}) => {
  return (
    <>
     <Row>
        {
          offer.map((item)=>(
            <Col className='offers' md={4}><a href={item.url}> <img src={item.image} /></a></Col>
          ))
        }
     </Row>
    </>
  )
}

export default Offers