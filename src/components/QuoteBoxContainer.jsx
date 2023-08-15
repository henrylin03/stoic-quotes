import React, { useState } from "react";
import quotes from "../../data/quotes.json";
import QuoteBox from "./QuoteBox";

function QuoteBoxContainer() {
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
    <QuoteBox
      text={selectedQuote.text}
      author={selectedQuote.author}
      generateNewQuoteIndex={generateNewQuoteIndex}
    />
  );
}

export default QuoteBoxContainer;
