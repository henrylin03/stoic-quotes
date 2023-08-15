import React, { useState } from "react";
import quotes from "../../data/quotes.json";
import QuoteBox from "./QuoteBox";

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

  return <QuoteBox />;
}

export default Quote;
