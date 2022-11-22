import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/hotaccessories.css';
import {Link} from 'react-router-dom';
const HotAccessories = () => {
    return (
        <>
            <Container className='link_container'>
                <Row>
                    <Col md={2}></Col>
                    <Col className='list' md={8}>
                        <ul>
                            <li><Link className="HotAccessoriesa" to="/music">Music Store</Link></li>
                            <li><Link className="HotAccessoriesa" to="/smartDevice">Smart Devices</Link></li>
                            <li><Link className="HotAccessoriesa" to="/home">Home</Link></li>
                            <li><Link className="HotAccessoriesa" to="/lifestyle">Lifestyle</Link></li>
                            <li><Link className="HotAccessoriesa" to="/mobileAccessories">Mobile Accessories</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    )
}

export default HotAccessories