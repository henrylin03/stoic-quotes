import { Flex, Title, Text, Image, Card } from "@mantine/core";
import styles from "./QuoteBox.module.css";

export default function QuoteBox({ quote }) {
  return (
    <>
      <Card shadow="lg" p="8rem" w="50vw" h="45vh">
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImage}
        />
        <Flex direction="column" justify="center" h="100%">
          <Title order={1} px="xl" mb="xl">
            {quote.text}
          </Title>
          <Text ta="right" px="xl" pt="xl">
            - {quote.author}
          </Text>
        </Flex>
        <Image
          src="/quotation.png"
          alt="quotation mark"
          className={styles.quotationImageRotated}
        />
      </Card>
    </>
  );
}
