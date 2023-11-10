import { useState } from "react";
import { Stack } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import QuoteBox from "./QuoteBox";
import NewQuoteButton from "./NewQuoteButton";
import quotes from "../../../data/quotes.json";

export default function QuoteGenerator() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());
  const [quoteHistory, setQuoteHistory] = useLocalStorage({
    key: "quoteHistory",
    defaultValue: [],
  });
  const [textVisible, setTextVisible] = useState(true);

  const handleButtonClick = () => {
    const updateQuoteIndex = () => {
      let newQuoteIndex = getRandomQuoteIndex();
      while (quoteHistory.includes(quotes[newQuoteIndex].text)) {
        newQuoteIndex = getRandomQuoteIndex();
      }
      setQuoteIndex(newQuoteIndex);
      setQuoteHistory([
        quotes[newQuoteIndex].text,
        ...quoteHistory.slice(0, 4),
      ]);
    };

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
