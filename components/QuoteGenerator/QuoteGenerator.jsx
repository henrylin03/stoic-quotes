import { useState } from "react";
import { Center, Stack } from "@mantine/core";
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

  return (
    <Center h="100vh">
      <Stack align="center" gap="xl">
        <QuoteBox quote={quote} />
        <NewQuoteButton fetchRandomQuote={fetchRandomQuote} />
      </Stack>
    </Center>
  );
}
