import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/material.css'

const Material = ({starProduct}) => {
  return (
    <>
        <Row>
            <Col md="6"><a href={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></a></Col>
            <Col md="6">
                <Row>
                    <Col className='' md="6"><a href={starProduct[1].url}> <img src={starProduct[1].image} alt="1st Product" /></a></Col>
                    <Col className='' md="6"><a href={starProduct[2].url}> <img src={starProduct[2].image} alt="1st Product" /></a></Col>
                </Row>
                <Row>
                    <Col className='' md="12"><a href={starProduct[3].url}> <img src={starProduct[3].image} alt="1st Product" /></a></Col>
                </Row>
            </Col>
        </Row>
    </>
  )
}

export default Material