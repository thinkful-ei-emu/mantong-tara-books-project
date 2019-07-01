import React from 'react';
import './App.css';
import Header from './header';
import ResultsList from './results-list';
import Search from './search';
import Result from './result';

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state={
      hasSearched: false
    }
  }
  handleChange=(event)=>{
    const name=event.target.name;
    this.setState({[name]: event.target.value});

  }
  handleSearch=(books)=>{
    this.setState({books, hasSearched:true});
  }

  render(){
  return (
    <div>
      
      <Header />
      <Search handleSearch={this.handleSearch}/>
      {this.state.hasSearched && 
      <div>
        <ResultsList books={this.state.books}/>
        <Result />
      </div>
      }
    </div>
  );}
}


