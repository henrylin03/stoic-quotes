import { useState, useEffect } from "react";
import { Flex, Center, Title, Text, Image, Card } from "@mantine/core";
import styles from "./QuoteBox.module.css";

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
      <Card shadow="lg" p="8rem" w="50vw" h="45vh">
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImage}
        />
        <Flex direction="column" justify="center" h="100%">
          <Title order={1} px="xl" mb="xl">
            {quote.text}
          </Title>
          <Text ta="right" px="xl" pt="xl">
            - {quote.author}
          </Text>
        </Flex>
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImageRotated}
        />
      </Card>
    </Center>
  );
}
