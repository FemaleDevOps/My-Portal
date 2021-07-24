import React, { useState } from 'react';
import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import classes from './QuoteList.module.css';

import Wrapper from '../helpers/Wrapper';

import { IconContext } from "react-icons";
import {  AiOutlineSortAscending, AiOutlineSortDescending, AiOutlinePlus } from "react-icons/ai";

import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from '../UI/Carousel';
import ControllItem from '../UI/CarouselItem';
import QuoteItem from './QuoteItem';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Wrapper>

          <ControlledCarousel className="slider">
        {sortedQuotes.map((quote) => (
            <Carousel.Item className={classes.homeSlider}>
               
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            align={quote.align}
            image={quote.image}
          />
          </Carousel.Item>
        ))}
       </ControlledCarousel>
    </Wrapper>
  );
};

export default QuoteList;
