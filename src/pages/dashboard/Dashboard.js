
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import BannerForm from '../../components/banner/BannerForm';

import useHttp from '../../hooks/use-http';
import { addQuote } from '../../lib/api-banner';

const Dashboard = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/dashboard');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <>
    <h2>Dashboard</h2>
  <BannerForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
  </>
  );

};

export default Dashboard;
