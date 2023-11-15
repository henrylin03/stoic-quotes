import "@mantine/core/styles.css";
import { MantineProvider, BackgroundImage, Stack } from "@mantine/core";
import { theme } from "./theme";
import QuoteGenerator from "./components/QuoteGenerator";
import GithubFooter from "./components/GithubFooter";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BackgroundImage src="./school-of-athens-bg.jpg">
        <Stack align="center" justify="center" h="100vh" gap="xl">
          <QuoteGenerator />
          <GithubFooter />
        </Stack>
      </BackgroundImage>
    </MantineProvider>
  );
}
