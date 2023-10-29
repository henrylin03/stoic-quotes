import { BackgroundImage, Stack, Center } from "@mantine/core";
import QuoteGenerator from "../components/QuoteGenerator";
import GithubFooter from "../components/GithubFooter/GithubFooter";

export default function IndexPage() {
  return (
    <BackgroundImage src="./school-of-athens-bg.jpg">
      <Center h="100vh">
        <Stack align="center" gap="xl">
          <QuoteGenerator />
          <GithubFooter />
        </Stack>
      </Center>
    </BackgroundImage>
  );
}
