import { useState, useEffect } from "react";
import { Container, Text, Paper, Button } from "@mantine/core";

export default function QuoteBox() {
  const [quote, setQuote] = useState({});

  const fetchRandomQuote = async () => {
    const response = await fetch("/api/quotes");
    const quotes = await response.json();
    const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[getRandomQuoteIndex()];

    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Container>
      <Paper shadow="sm" p="xl" m="xl">
        <Text size="xl" fw={700}>
          {quote.text}
        </Text>
        <Text ta="right">- {quote.author}</Text>
      </Paper>
    </Container>
  );
}
