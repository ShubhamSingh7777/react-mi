import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import '../styles/HotAccessoriesMenu.css';

const HotAccessoriesMenu = ({ music,smartDevice,home,lifestyle,mobileAccessories,musicCover,smartDeviceCover,homeCover,lifeStyleCover,mobileAccessoriesCover}) => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                    <div className='imgg'>
               <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
            </div>
                    </Col>
                    <Col md={9}>
                        <Row>{
                           music&& music.map((iterm, key) => (
                       
                                <Col md={4} key={key}>
                                    <div className="HotItemCard">
                                    <img variant="top" src={iterm.image} />
                                    <span>{iterm.name}</span>
                                    <p>
                                        {iterm.price}
                                    </p>
                                    </div>
                                </Col>

                            ))
} </Row>
<Row>
                           {
                          smartDevice&& smartDevice.map((iter,key) => (
                       
                                <Col md={4} key={key}>
                                    <div className="HotItemCard">
                                    <img variant="top" src={iter.image} />
                                    <span>{iter.name}</span>
                                    <p>
                                        {iter.price}
                                    </p>
                                    </div>
                                </Col>

                            ))
                        } 
                        </Row>

                        <Row>
                           {
                          home&& home.map((iter,key) => (
                       
                                <Col md={4} key={key}>
                                    <div className="HotItemCard">
                                    <img variant="top" src={iter.image} />
                                    <span>{iter.name}</span>
                                    <p>
                                        {iter.price}
                                    </p>
                                    </div>
                                </Col>

                            ))
                        } 
                        </Row>
                        <Row>
                           {
                          lifestyle&& lifestyle.map((iter,key) => (
                       
                                <Col md={4} key={key}>
                                    <div className="HotItemCard">
                                    <img variant="top" src={iter.image} />
                                    <span>{iter.name}</span>
                                    <p>
                                        {iter.price}
                                    </p>
                                    </div>
                                </Col>

                            ))
                        } 
                        </Row>
                        <Row>
                           {
                          mobileAccessories&& mobileAccessories.map((iter,key) => (
                       
                                <Col md={4} key={key}>
                                    <div className="HotItemCard">
                                    <img variant="top" src={iter.image} />
                                    <span>{iter.name}</span>
                                    <p>
                                        {iter.price}
                                    </p>
                                    </div>
                                </Col>

                            ))
                        } 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HotAccessoriesMenu