import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import GitHubFooter from "./components/GitHubFooter";
import BackgroundImage from "./components/BackgroundImage";
import quotes from "../data/quotes.json";
import styles from "./styles/App.module.css";

export default function App() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());
  const [textVisible, setTextVisible] = useState(true);

  const handleNewQuoteButtonClick = () => {
    const updateQuoteIndex = () => {
      let newQuoteIndex = getRandomQuoteIndex();
      while (newQuoteIndex === quoteIndex) {
        newQuoteIndex = getRandomQuoteIndex();
      }
      setQuoteIndex(newQuoteIndex);
    };

    // fades text (quote and author) out
    setTextVisible(false);
    setTimeout(() => {
      updateQuoteIndex();
      // fades text back in
      setTextVisible(true);
    }, 550);
  };

  const selectedQuote = quotes[quoteIndex];

  return (
    <div>
      <BackgroundImage />
      <QuoteBox
        textVisible={textVisible}
        selectedQuote={selectedQuote}
        handleNewQuoteButtonClick={handleNewQuoteButtonClick}
      />
      <GitHubFooter />
    </div>
  );
}
