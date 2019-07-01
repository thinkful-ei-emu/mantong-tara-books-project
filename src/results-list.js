import React from 'react';
import Result from './result';

const ResultsList = function(props) {
  const results = props.books.map((book, index) => {
    return(
    <Result 
      key={index}
      title={book.title} 
      authors={book.authors} 
      desc={book.desc} 
      price={book.price}
      image={book.image}
    />
    )
  })
  return<div>
    {results}
  </div>
}

export default ResultsList