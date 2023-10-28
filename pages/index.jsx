import { Button, Group } from "@mantine/core";
import QuoteBox from "../components/QuoteBox";

export default function IndexPage() {
  return (
    <>
      <Group mt={50} justify="center">
        <Button size="xl">Hello World</Button>
      </Group>
      <QuoteBox />
    </>
  );
}
