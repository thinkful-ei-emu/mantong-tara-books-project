import React from 'react';
import './result.css';
const Result = function(props) {
  return (<div>
    <h2>{props.title}</h2>
    <div className="content">
      <img src={props.image} alt={`${props.title} thumbnail`}/>
      <div className="con">
        <p>Authors: {props.authors}</p>
        <p>{props.desc}</p>
        <p>{props.price}</p>
      </div>
    </div>
  </div>);
}

export default Result;