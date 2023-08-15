import React from "react";

function QuoteBox(props) {
  return (
    <>
      <h1 id="text">"{props.text}"</h1>
      <p id="author">- {props.author}</p>
      <button id="new-quote" onClick={props.generateNewQuoteIndex}>
        New Quote
      </button>
    </>
  );
}

export default QuoteBox;
