import { Button } from "@mantine/core";

export default function NewQuoteButton({ fetchRandomQuote }) {
  return (
    <Button
      variant="filled"
      color="violet"
      size="lg"
      radius="md"
      onClick={fetchRandomQuote}
    >
      New Quote
    </Button>
  );
}
