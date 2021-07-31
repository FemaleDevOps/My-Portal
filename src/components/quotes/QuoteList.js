import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

import Wrapper from '../helpers/Wrapper';

import { IconContext } from "react-icons";
import {  AiOutlineSortAscending, AiOutlineSortDescending, AiOutlinePlus } from "react-icons/ai";

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

  return (
    <Wrapper>
      <div className={classes.sorting}>
        <h1>API QUOTES</h1>
        <button onClick={changeSortingHandler}>
         {isSortingAscending ? <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
            <AiOutlineSortDescending />
        </IconContext.Provider> :  <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
            <AiOutlineSortAscending />
        </IconContext.Provider>}
        </button>
        <Link to="/new-quote">
        <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
            <AiOutlinePlus />
        </IconContext.Provider>
        </Link>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default QuoteList;
