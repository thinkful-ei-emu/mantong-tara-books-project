import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      search: null,
      filter:null,
      printType: null
    }
  }
  handleChange=(event)=>{
    const name=event.target.name;
    this.setState({[name]: event.target.value});

  }
  handleSubmit=(event)=>{
    event.preventDefault();
    //check if filter or printType are null, and if so, not include them in the fetch
    //fetch using the variables in state, update state in APP
    
    const apiKey = 'key=AIzaSyDSDPd1GETQe0aCFSd4Bga7Opn1AAEd5KU';
    const searchTermString = `q=${this.state.search}`;
    const typeString = `printType=${this.state.printType}`;
    const filterString = `filter=${this.state.filter}`;
    const fullParamString = [apiKey, searchTermString,typeString,filterString].join('&');
    fetch('https://www.googleapis.com/books/v1/volumes?'+fullParamString)
      .then(res=>res.json())
      .then(data => {console.log(data)});
  }

  render() {
    //form will put search criteria into state
    //make sure search is required
    return <form onSubmit={e=>this.handleSubmit(e)}>
      
      <label htmlFor="search">Search</label>
      <input onChange={e=>this.handleChange(e)} type="text" id="search" name="search"/>
      <button type="submit">Search</button>
      <label htmlFor="print-type" >Print Type</label>
      <select onChange={e=>this.handleChange(e)} id="print-type" name="printType">
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="filter">Filter</label>
      <select onChange={e=>this.handleChange(e)} id="filter" name="filter" >
        <option value="ebooks">Ebooks</option>
        <option value="free-ebooks">Free Ebooks</option>
        <option value="full">Full</option>
        <option value="paid-ebooks">Paid Ebooks</option>
        <option value="partial">Partial</option>
      </select>
    </form>;
    
  }
}

export default Search;