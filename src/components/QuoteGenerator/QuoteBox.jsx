import {
  Flex,
  Title,
  Text,
  Image,
  Card,
  Transition,
  ActionIcon,
  Group,
  Tooltip,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import styles from "./QuoteBox.module.css";

//TODO: add functionality so that when user clicks open the share button, modal pops up to different social media platforms (facebook, x (twitter), linkedin, messenger, wechat, whatsapp)
//TODO: design what the modal will look like
//TODO: design what is shared (should add link to bottom to the site itself)

export default function QuoteBox({ quote, textVisible }) {
  return (
    <Card shadow="lg" w="55vw" h="55vh" radius="xl">
      <Flex direction="column" className={styles.cardContentContainer}>
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImage}
        />
        <Transition
          mounted={textVisible}
          transition="fade"
          duration={550}
          timingFunction="ease"
        >
          {(transitionStyles) => (
            <Flex
              direction="column"
              justify="center"
              w="75%"
              style={{
                ...transitionStyles,
              }}
            >
              <Title order={1} px="xl" mb="sm" className={styles.text}>
                {quote.text}
              </Title>
              <Text
                ta="right"
                px="xl"
                pt="sm"
                className={styles.text}
                mt="2rem"
              >
                - {quote.author}
              </Text>
            </Flex>
          )}
        </Transition>
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImageRotated}
        />
      </Flex>
      <Group mb="xl" ml="5rem" mt={-50} w="40%">
        <Tooltip label="Share">
          <ActionIcon
            variant="light"
            color="#c6934b" //darker alternative: #703529
            size="md"
            radius="md"
            aria-label="Share to LinkedIn"
          >
            <IconShare style={{ width: "70%", height: "auto" }} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Card>
  );
}
