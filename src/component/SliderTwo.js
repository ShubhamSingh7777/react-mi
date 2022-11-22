import React from 'react';
import { Carousel } from 'react-bootstrap';

const SliderTwo = ({banner}) => {
  return (
    <>
        <Carousel fade>
        {
         banner.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>    
         ))
        }
   </Carousel>
    </>
  )
}

export default SliderTwo