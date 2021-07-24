import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch, useHistory  } from 'react-router-dom';

import HighlightedQuote from '../../components/quotes/HighlightedQuote';
import Comments from '../../components/comments/Comments';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { Container } from 'react-bootstrap';

import { IconContext } from "react-icons";
import {  AiOutlineComment, AiOutlineBackward } from "react-icons/ai";

const QuoteDetail = () => {
  let history = useHistory();
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Container>
       <div className="singleHeaderBar">
       <button onClick={() => history.goBack()}>
       <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
                  <AiOutlineBackward />
                </IconContext.Provider>
       </button>
       </div>

      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <>
        <div className='centered loadMoreComm'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
          <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
                Load  <AiOutlineComment />
                </IconContext.Provider>
          </Link>
        </div>
        </>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Container>
  );
};

export default QuoteDetail;


