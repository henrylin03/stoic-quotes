import { BackgroundImage } from "@mantine/core";
import QuoteGenerator from "../components/QuoteGenerator";

export default function IndexPage() {
  return (
    <BackgroundImage src="./school-of-athens-bg.jpg">
      <QuoteGenerator />
    </BackgroundImage>
  );
}
