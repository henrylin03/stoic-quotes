import { useState, useEffect } from "react";
import { Flex, Center, Title, Text, Paper } from "@mantine/core";

export default function QuoteBox() {
  const [quote, setQuote] = useState({});

  const fetchRandomQuote = async () => {
    const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

    const response = await fetch("/api/quotes");
    const quotes = await response.json();
    const randomQuote = quotes[getRandomQuoteIndex()];
    setQuote(randomQuote);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <Center h="100vh">
      <Paper shadow="sm" p="xl" m="xl" w="50vw" h="40vh">
        <Flex direction="column" justify="center" h="100%">
          <Title order={1} px="xl" mb="xl">
            {quote.text}
          </Title>
          <Text ta="right" px="xl" pt="4rem">
            - {quote.author}
          </Text>
        </Flex>
      </Paper>
    </Center>
  );
}
