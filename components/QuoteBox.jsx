import { useState, useEffect } from "react";
import { Container, Title, Text, Paper } from "@mantine/core";

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
        <Title order={1} size="h2">
          {quote.text}
        </Title>
        <Text ta="right">- {quote.author}</Text>
      </Paper>
    </Container>
  );
}
