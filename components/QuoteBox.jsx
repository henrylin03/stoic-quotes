import { useState } from "react";
import { Container, Text, Paper, Button } from "@mantine/core";
import quotes from "../data/quotes.json";

export default function QuoteBox() {
  return (
    <Container>
      <Paper shadow="sm" p="xl" m="xl">
        <Text size="xl" fw={700}>
          This is some quote
        </Text>
        <Text ta="right">- Henry Lin</Text>
      </Paper>
    </Container>
  );
}
