import { useState } from "react";
import { Stack } from "@mantine/core";
import QuoteBox from "./QuoteBox";
import NewQuoteButton from "./NewQuoteButton";
import quotes from "../../data/quotes.json";

export default function QuoteGenerator() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);
  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());

  const handleButtonClick = () => {
    let newQuoteIndex = getRandomQuoteIndex();
    while (newQuoteIndex === quoteIndex) {
      newQuoteIndex = getRandomQuoteIndex();
    }
    setQuoteIndex(newQuoteIndex);
  };

  const quote = quotes[quoteIndex];

  //TODO: FEATURE #1 - IMPLEMENT FEATURE THAT PREVENTS SAME QUOTE FROM BEING SHOWN IN THE LAST 5
  //TODO: FEATURE #2 - IMPLEMENT FADE EFFECT ON QUOTE AND AUTHOR WHEN QUOTE TRANSITIONS

  return (
    <Stack align="center" gap="xl">
      <QuoteBox quote={quote} />
      <NewQuoteButton handleButtonClick={handleButtonClick} />
    </Stack>
  );
}
