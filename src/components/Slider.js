import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = ({start}) => {
  return (
    <Carousel fade>
          {start.map((item)=>(
            <CarouselItem>
              <img 
                src={item} 
                alt="First Slide" 
                className="d-block w-100" 
              />
            </CarouselItem>
          ))}
              
    </Carousel>

  )
}

export default Slider