import Carousel from 'react-bootstrap/Carousel';
import * as SliderStyles from "./carouselItem.module.css";

const ControllItem = (props) => {
  const CaptionAlign =  props.align;
    return (
       <div>
        <img className="d-block w-100" src={props.image} />
        {props.caption &&
           
          <Carousel.Caption className={SliderStyles.carouselCaption, CaptionAlign}>
          <h3>{props.title}</h3>
          <p>{props.caption}</p>
          </Carousel.Caption>

        }
  
       </div>
    );
  }
  
  export default ControllItem;