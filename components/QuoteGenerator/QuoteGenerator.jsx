import { useState } from "react";
import { Stack } from "@mantine/core";
import QuoteBox from "./QuoteBox";
import NewQuoteButton from "./NewQuoteButton";

export default function QuoteGenerator() {
  const fetchRandomQuote = async () => {
    const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);
    const response = await fetch("/api/quotes");
    const quotes = await response.json();
    const randomQuote = quotes[getRandomQuoteIndex()];
    setQuote(randomQuote);
  };

  const [quote, setQuote] = useState(fetchRandomQuote);

  //TODO: FEATURE #1 - MUST ENSURE THAT NO TWO QUOTES ARE SHOWN BACK-TO-BACK (OR, IDEALLY, EVEN IN THE LAST 5)
  //TODO: FEATURE #2 - IMPLEMENT FADE EFFECT ON QUOTE AND AUTHOR WHEN QUOTE TRANSITIONS

  return (
    <Stack align="center" gap="xl">
      <QuoteBox quote={quote} />
      <NewQuoteButton fetchRandomQuote={fetchRandomQuote} />
    </Stack>
  );
}
