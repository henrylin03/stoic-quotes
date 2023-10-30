import { Flex, Title, Text, Image, Card, Transition } from "@mantine/core";
import styles from "./QuoteBox.module.css";

export default function QuoteBox({ quote, textVisible }) {
  return (
    <>
      <Card shadow="lg" p="8rem" w="55vw" h="55vh" radius="xl">
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
            <div style={transitionStyles}>
              <Flex direction="column" justify="center" h="150%">
                <Title order={1} px="xl" mb="xl">
                  {quote.text}
                </Title>
                <Text ta="right" px="xl" pt="xl">
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
      </Card>
    </>
  );
}
