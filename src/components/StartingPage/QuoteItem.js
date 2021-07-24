import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import * as SliderStyles from "../UI/carouselItem.module.css";
import classes from './QuoteItem.module.css';

import { IconContext } from "react-icons";
import { AiOutlineCaretRight } from "react-icons/ai";

const QuoteItem = (props) => {
  const CaptionAlign =  props.align;
  const image = process.env.PUBLIC_URL + '/banners/' + props.image ;
  return (
 
      <div>
        <img className="d-block w-100" src={image} />
        {props.author &&
           
          <Carousel.Caption className={SliderStyles.carouselCaption, CaptionAlign}>
          <h3>{props.author}</h3>
          <p>{props.text}</p>
          </Carousel.Caption>

        }
  
       </div>
   
  );
};

export default QuoteItem;
