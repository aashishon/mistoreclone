import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/banner.css";

const Banner = ({banner}) => {
  return (
    <Carousel>
        {banner.map((item)=>{
            return(

            
            <CarouselItem key={item.image} interval={10000} keyboard = {true} id="banner">
                <img 
                src={item.image} 
                alt={item.name}
                 />
                <Carousel.Caption className='carousel'>
                    <h3 id='item'>{item.name}</h3>
                    <h4 id='line'>___________</h4>
                    <p>{item.description}</p>
                    <p>Source : {item.source}</p>
                    <u>Read more</u>
                </Carousel.Caption>
            </CarouselItem>
            )
        })}
    </Carousel>
    )
}

export default Banner