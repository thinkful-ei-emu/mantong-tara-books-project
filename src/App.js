import React from 'react';
import './App.css';
import Header from './header';
import ResultsList from './results-list';
import Search from './search';
import Result from './result';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <ResultsList />
      <Result />
    </div>
  );
}

export default App;
