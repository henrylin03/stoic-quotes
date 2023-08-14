import React, { useState } from "react";
import styles from "./Quote.module.css";

function Quote() {
  const quotes = [
    {
      text: "We suffer more often in imagination than in reality.",
      author: "Seneca",
    },
    {
      text: "The best revenge is not to be like your enemy.",
      author: "Marcus Aurelius",
    },
    {
      text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
    },
    {
      text: "We have two ears and one mouth so that we can listen twice as much as we speak.",
      author: "Epictetus",
    },
  ];

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

  const handleTweet = () => {
    const tweetText = encodeURIComponent(selectedQuote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <>
      <h1 id="text">"{selectedQuote.text}"</h1>
      <p id="author">- {selectedQuote.author}</p>
      <button id="new-quote" onClick={generateNewQuoteIndex}>
        New Quote
      </button>
      <button id="tweet-quote" onClick={handleTweet} className={styles.button}>
        Tweet Quote
      </button>
    </>
  );
}

export default Quote;
