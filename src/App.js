import React from 'react';
import './App.css';
import Header from './header';
import ResultsList from './results-list';
import Search from './search';
import Result from './result';

export default class App extends React.Component  {
  handleChange=(event)=>{
    const name=event.target.name;
    this.setState({[name]: event.target.value});

  }
  handleSubmits=(event)=>{
    event.preventDefault();
   
    
  }
  render(){
  return (
    <div>
      
      <Header />
      <Search />
      <ResultsList />
      <Result />
    </div>
  );}
}


