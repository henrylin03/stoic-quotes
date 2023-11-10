import { useState, useEffect } from "react";
import { Stack } from "@mantine/core";
import QuoteBox from "./QuoteBox";
import NewQuoteButton from "./NewQuoteButton";
import quotes from "../../../data/quotes.json";

export default function QuoteGenerator() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());
  const [quoteIndexHistory, setQuoteIndexHistory] = useState([]);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    setQuoteIndexHistory([quoteIndex]);
  }, []);

  const handleButtonClick = () => {
    const updateQuoteIndex = () => {
      let newQuoteIndex = getRandomQuoteIndex();
      while (quoteIndexHistory.includes(newQuoteIndex)) {
        newQuoteIndex = getRandomQuoteIndex();
      }
      setQuoteIndex(newQuoteIndex);
      setQuoteIndexHistory([newQuoteIndex, ...quoteIndexHistory.slice(0, 4)]);
    };

    //implement fade effect
    setTextVisible(false);
    setTimeout(() => {
      updateQuoteIndex();
      setTextVisible(true);
    }, 550);
  };

  const quote = quotes[quoteIndex];

  return (
    <Stack align="center" gap="xl">
      <QuoteBox quote={quote} textVisible={textVisible} />
      <NewQuoteButton handleButtonClick={handleButtonClick} />
    </Stack>
  );
}
