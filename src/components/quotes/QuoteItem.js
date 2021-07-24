import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

import { IconContext } from "react-icons";
import { AiOutlineCaretRight } from "react-icons/ai";

const QuoteItem = (props) => {
  return (
    <Link to={`/api-firebase/${props.id}`}>
      <li className={classes.item}>
        <figure>
          <figcaption>{props.author}</figcaption>
        </figure>
          <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
            <AiOutlineCaretRight />
          </IconContext.Provider>
      </li>
    </Link>
  );
};

export default QuoteItem;
