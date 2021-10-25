
function DisplayQuote({ quote }) {
  return (
      <div className='DisplayEmployee'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>Quote: {quote.quote}</li>
          <li>
            Name: {quote.character} 
          </li>
          <li>
            character Direction: {quote.characterDirection}
          </li>
        </ul>
      </div>
  );
}

export default DisplayQuote;