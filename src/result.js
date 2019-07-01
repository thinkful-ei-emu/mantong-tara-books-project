import React from 'react';

const Result = function(props) {
  return (<div>
    <h2>{props.title}</h2>
    <img src={props.image} alt={`${props.title} thumbnail`}/>
    <p>Authors: {props.authors}</p>
    <p>{props.desc}</p>
    <p>{props.price}</p>
  </div>);
}

export default Result;