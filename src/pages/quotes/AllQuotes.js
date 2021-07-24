import { useEffect } from 'react';

import QuoteList from '../../components/quotes/QuoteList';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import NoQuotesFound from '../../components/quotes/NoQuotesFound';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';

import { Container } from 'react-bootstrap';

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <Container>
        <p className='centered focused'>{error}</p>
      </Container>
    );
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Container>
    <QuoteList quotes={loadedQuotes} />
    </Container>
  );
};

export default AllQuotes;
