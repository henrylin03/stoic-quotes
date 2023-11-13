import {
  Flex,
  Title,
  Text,
  Image,
  Card,
  Transition,
  ActionIcon,
  Group,
} from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import styles from "./QuoteBox.module.css";

export default function QuoteBox({ quote, textVisible }) {
  return (
    <>
      <Card shadow="lg" w="55vw" h="55vh" radius="xl">
        <div className={styles.cardContentContainer}>
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
              <div
                style={{
                  width: "75%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  ...transitionStyles,
                }}
              >
                <Flex direction="column" justify="center" h="150%">
                  <Title order={1} px="xl" mb="sm" className={styles.text}>
                    {quote.text}
                  </Title>
                  <Text
                    ta="right"
                    px="xl"
                    pt="sm"
                    className={styles.text}
                    mt="3rem"
                  >
                    - {quote.author}
                  </Text>
                </Flex>
              </div>
            )}
          </Transition>
          <Image
            src="/quotation.png"
            alt="quotation mark"
            className={styles.quotationImageRotated}
          />
        </div>
        <Group>
          <ActionIcon
            variant="light"
            color="violet"
            aria-label="Share to LinkedIn"
          >
            <IconShare style={{ width: "70%", height: "autp" }} />
          </ActionIcon>
        </Group>
      </Card>
    </>
  );
}
