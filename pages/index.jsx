import { BackgroundImage } from "@mantine/core";
import QuoteGenerator from "../components/QuoteGenerator";
import GithubFooter from "../components/GithubFooter/GithubFooter";

export default function IndexPage() {
  return (
    <BackgroundImage src="./school-of-athens-bg.jpg">
      <QuoteGenerator />
      <GithubFooter />
    </BackgroundImage>
  );
}
