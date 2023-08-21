import React, { useState } from "react";
import quotes from "../../data/quotes.json";
import QuoteBox from "./QuoteBox";

function QuoteBoxContainer() {
  const getRandomIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomIndex());
  const [textIsVisible, setTextIsVisible] = useState(true);

  const handleNewQuoteButtonClick = () => {
    const updateQuoteIndex = () => {
      let newIndex = getRandomIndex();
      while (newIndex === quoteIndex) {
        newIndex = getRandomIndex();
      }
      setQuoteIndex(newIndex);
    };

    setTextIsVisible(false);

    setTimeout(() => {
      updateQuoteIndex();
      setTextIsVisible(true);
    }, 550);
  };

  const selectedQuote = quotes[quoteIndex];

  return (
    <QuoteBox
      text={selectedQuote.text}
      author={selectedQuote.author}
      handleNewQuoteButtonClick={handleNewQuoteButtonClick}
      textIsVisible={textIsVisible}
    />
  );
}

export default QuoteBoxContainer;
