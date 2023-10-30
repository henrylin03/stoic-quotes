import { useState } from "react";
import { Stack } from "@mantine/core";
import NewQuoteButton from "./NewQuoteButton";
import quotes from "../../data/quotes.json";
import dynamic from "next/dynamic";

const QuoteBoxNoSSR = dynamic(() => import("./QuoteBox"), { ssr: false });

export default function QuoteGenerator() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());
  const [textVisible, setTextVisible] = useState(true);

  const handleButtonClick = () => {
    const updateQuoteIndex = () => {
      let newQuoteIndex = getRandomQuoteIndex();
      while (newQuoteIndex === quoteIndex) {
        newQuoteIndex = getRandomQuoteIndex();
      }
      setQuoteIndex(newQuoteIndex);
    };

    setTextVisible(false);
    setTimeout(() => {
      updateQuoteIndex();
      // fades text back in
      setTextVisible(true);
    }, 550);
  };

  const quote = quotes[quoteIndex];

  //TODO: FEATURE #1 - IMPLEMENT FEATURE THAT PREVENTS SAME QUOTE FROM BEING SHOWN IN THE LAST 5

  return (
    <Stack align="center" gap="xl">
      <QuoteBoxNoSSR quote={quote} textVisible={textVisible} />
      <NewQuoteButton handleButtonClick={handleButtonClick} />
    </Stack>
  );
}
