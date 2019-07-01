import React from 'react';
import { Z_FILTERED } from 'zlib';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchTerm: null,
      filter:null,
      printType: null
    }
  }
  componentDidMount() {
    //check if filter or printType are null, and if so, not include them in the fetch
    //fetch using the variables in state, update state in APP
    
    const apiKey = 'key=AIzaSyDSDPd1GETQe0aCFSd4Bga7Opn1AAEd5KU';
    const searchTermString = `q="austen"`;
//    const typeString = `printType=${type}`;
//    const filterString = `filter=${filter}`;
    const fullParamString = [apiKey, searchTermString].join('&');
    fetch('https://www.googleapis.com/books/v1/volumes?'+fullParamString)
      .then(res=>res.json())
      .then(data => {console.log(data)});
  }

  render() {
    //form will put search criteria into state
    //make sure search is required
    return <form>
      {/* <label for="search">Search</label>
      <input type="text" id="search" />
      <button type="submit">Search</button>
      <label for="print-type">Print Type</label>
      <select id="print-type"></select>
      <label for="filter">Filter</label>
      <select id="filter"></select> */}
    </form>;
  }
}

export default Search;