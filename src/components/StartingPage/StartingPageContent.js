/*
import classes from './StartingPageContent.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from '../UI/Carousel';
import ControllItem from '../UI/CarouselItem';


const banners = [
  {
    id: 1,
    title: 'First slide label',
    caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: process.env.PUBLIC_URL + '/banners/one.png',
    align: 'Captionleft'
  },
  {
    id: 2,
    title: 'First slide label',
    caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: process.env.PUBLIC_URL + '/banners/three.png',
    align: 'Captionleft'
  },
  
];

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
             <ControlledCarousel className="slider">
            {banners.map((banner) =>  (
                 <Carousel.Item className={classes.homeSlider}>
              <ControllItem key={banner.id} title={banner.title} caption={banner.caption} image={banner.image} align={banner.align} />
              </Carousel.Item>
              ))}
            </ControlledCarousel>
    </section>
  );
};

export default StartingPageContent;

*/
import { useEffect } from 'react';

import QuoteList from '../../components/StartingPage/QuoteList';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import NoQuotesFound from '../../components/quotes/NoQuotesFound';
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api-banner';

import { Container } from 'react-bootstrap';

import classes from './StartingPageContent.module.css';


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
    <section className={classes.starting}>
       <QuoteList quotes={loadedQuotes} />

</section>
  );
};

export default AllQuotes;
