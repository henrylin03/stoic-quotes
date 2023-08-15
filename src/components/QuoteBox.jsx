import React, { useState } from "react";
import quotes from "../../data/quotes.json";

function Quote() {
  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomIndex());

  const generateNewQuoteIndex = () => {
    let newIndex = getRandomIndex();
    while (newIndex === quoteIndex) {
      newIndex = getRandomIndex();
    }
    setQuoteIndex(newIndex);
  };

  const selectedQuote = quotes[quoteIndex];

  return (
    <>
      <h1 id="text">"{selectedQuote.text}"</h1>
      <p id="author">- {selectedQuote.author}</p>
      <button id="new-quote" onClick={generateNewQuoteIndex}>
        New Quote
      </button>
      <button id="tweet-quote">Tweet Quote</button>
    </>
  );
}

export default Quote;
