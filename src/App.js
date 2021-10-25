import { useState } from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState();

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      {quote ? (
        <DisplayQuote quote={quote} />
      ) : (
        <p>Veuillez cliquer sur le bouton</p>
      )}
      
      <button type="button" onClick={getQuote}>Get Quote Simpsons</button>
    </div>
  );
}

export default App;
