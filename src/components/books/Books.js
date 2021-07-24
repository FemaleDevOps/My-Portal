import React from 'react';
import BookItem from './BookItem.js';
import Wrapper from '../helpers/Wrapper';

export default function Books({ articles }) {
  return (
    <Wrapper>
          <div container spacing={3}>
              {articles.map((article) => (
                  <div item xs={12} sm={4} key={article._id}>
                      <BookItem article={article} />
                  </div>
              ))}
          </div>
    </Wrapper>
  );
}
