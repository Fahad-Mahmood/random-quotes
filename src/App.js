import React, { Component } from 'react';
import './App.css';
import quotes from './quotes';
var _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: quotes,
      index: this.randomIndex()
    };
     this.randomIndex = this.randomIndex.bind(this);
     this.clickhandler = this.clickhandler.bind(this);
  }
    
  randomIndex(){
     let index = _.random(0,16);
     console.log(index);
     return index;
  }
  clickhandler() {
     let val = this.randomIndex();
      this.setState({
        index:val
      })
    
  }
  
  render() {
    const quote = this.state.quotes[this.state.index];
    console.log(quote);
    const url = `https://twitter.com/intent/tweet?text=${quote.quoteText}-${quote.quoteAuthor}`;
    return (
       <div id="quote-box"> 
        <p id="text">{quote.quoteText}</p>
        <p id="author">{quote.quoteAuthor}</p>
        <button id="new-quote" onClick={this.clickhandler}> 
        New Quote
        </button>
        <button>
          <a id="tweet-quote" href={url} rel="noopener noreferrer" target="_blank">
            Tweet Quote</a>
        </button>
        </div> 
    );
  }
}

export default App;
