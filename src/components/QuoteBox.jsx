import React from "react";

function QuoteBox(props) {
  return (
    <>
      <div>
        <h1>"{props.text}"</h1>
        <p>- {props.author}</p>
      </div>
      <button id="new-quote" onClick={props.generateNewQuoteIndex}>
        New Quote
      </button>
    </>
  );
}

export default QuoteBox;
