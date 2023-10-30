import { Button } from "@mantine/core";

export default function NewQuoteButton({ handleButtonClick }) {
  return (
    <Button
      variant="filled"
      color="violet"
      size="lg"
      radius="md"
      onClick={handleButtonClick}
    >
      New Quote
    </Button>
  );
}
