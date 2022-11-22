import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/navbar.css';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Navbar = ({logo}) => {
    return (
        <div className='navbar'>
            <Container>
                <Col md={1} className='logo'>
                        <img id="logoImage" src={logo} alt="Not" />
                </Col>
                <Col className='main' md={8}>
                    <ul>
                        <li><a className="navlinks" href="/#miphones">Mi Phones</a></li>
                        <li><a className="navlinks" href="/#redmiphones">Redmi Phones</a></li>
                        <li><a className="navlinks" href="/#tv">TV</a></li>
                        <li><a className="navlinks" href="/#laptops">Laptops</a></li>
                        <li><a className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a></li>
                        <li><a className="navlinks" href="/#home">Home</a></li>
                        <li><a className="navlinks" href="/#audio">Radio</a></li>
                        <li><a className="navlinks" href="/#accessories">Accessories</a></li>
                    </ul>
                </Col>
                <Col md={3} className='searchbox'>
                    <input type="text" name="search" placeholder="Search Products" />
                    {searchIcon}

                </Col>
            </Container>
        </div>
    )
}

export default Navbar