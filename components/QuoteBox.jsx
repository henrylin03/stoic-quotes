import { useState, useEffect } from "react";
import { Container, Center, Flex, Title, Text, Paper } from "@mantine/core";

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
    <Center h="100vh">
      <Paper shadow="sm" p="xl" m="xl" w="50vw" h="40vh">
        <Container w="90%">
          <Title order={1} p="lg">
            {quote.text}
          </Title>
          <Text ta="right" p="lg">
            - {quote.author}
          </Text>
        </Container>
      </Paper>
    </Center>
  );
}
