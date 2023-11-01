import "@mantine/core/styles.css";
import { MantineProvider, BackgroundImage, Stack, Center } from "@mantine/core";
import { theme } from "./theme";
import QuoteGenerator from "./components/QuoteGenerator";
import GithubFooter from "./components/GithubFooter";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {" "}
      <BackgroundImage src="./school-of-athens-bg.jpg">
        <Center h="100vh">
          <Stack align="center" gap="xl">
            <QuoteGenerator />
            <GithubFooter />
          </Stack>
        </Center>
      </BackgroundImage>
    </MantineProvider>
  );
}
