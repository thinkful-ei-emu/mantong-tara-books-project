import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      search: null,
      filter:null,
      printType: null,
      error:null
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
    let fullParamString;
    let typeString;
    let filterString;
    if(!this.state.printType===null){
      typeString = `printType=${this.state.printType}`;
      
      if (!this.state.filter===null ){
      
      filterString = `filter=${this.state.filter}`;
      fullParamString = [apiKey, searchTermString,typeString,filterString].join('&');}
      
      else {fullParamString = [apiKey, searchTermString,typeString].join('&');}}
    else if(this.state.filter){
      filterString = `filter=${this.state.filter}`;
      fullParamString=[apiKey,searchTermString,filterString].join('&');}
 fullParamString = [apiKey, searchTermString].join('&');
    
    fetch('https://www.googleapis.com/books/v1/volumes?'+fullParamString)
      .then(res=>{
        console.log(res);
        if(!res.ok){
          throw new Error('Somthing went wrong, please try again later.');
        }
        return res;
      })
        
      .then(res=>res.json())
      .then(data => {
        console.log(data);
        
        const books = data.items.map(book => {
          console.log(book);
          const title = book.volumeInfo.title;
          const authors = book.volumeInfo.authors;
          const image = book.volumeInfo.imageLinks.thumbnail;
          let desc;
          if (book.volumeInfo.description){
            desc = book.volumeInfo.description.split('.')[0];
          }
          let price;
          console.log(desc[0]);
          if (book.saleInfo.saleability === "FREE") {
            price = "Free";
          }else if(book.saleInfo.saleability==="NOT_FOR_SALE"){
            price="Not for sale";
          }
          else {
            price = book.saleInfo.retailPrice.amount;
          }
          return {title, authors, image, desc, price};
        });
        this.setState({books,error:null});
        this.props.handleSearch(this.state.books);
        
      })
      .catch(err=>{
        console.log(err.message);
        this.setState({
          error:err.message
        });
      });
      
     
     
  }

  render() {
    //form will put search criteria into state
    //make sure search is required
    return (
    <form onSubmit={e=>this.handleSubmit(e)}>
      {this.state.error  && 
        <div>
        please enter again
        </div>}
      <label htmlFor="search">Search</label>
      <input onChange={e=>this.handleChange(e)} type="text" id="search" name="search"/>
      <button type="submit">Search</button>
      <label htmlFor="print-type" >Print Type</label>
      <select onChange={e=>this.handleChange(e)} id="print-type" name="printType">
        <option>All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="filter">Filter</label>
      <select onChange={e=>this.handleChange(e)} id="filter" name="filter" >
        <option>No Filter</option>
        <option value="ebooks">Ebooks</option>
        <option value="free-ebooks">Free Ebooks</option>
        <option value="full">Full</option>
        <option value="paid-ebooks">Paid Ebooks</option>
        <option value="partial">Partial</option>
      </select>
    </form>);
    
    
  }
}

export default Search;