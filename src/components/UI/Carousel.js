import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {props.children}
      </Carousel>
    );
  }
  
  export default ControlledCarousel;