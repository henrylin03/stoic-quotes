import React from "react";
import { Card, Stack, Button, Image } from "react-bootstrap";
import quotationImg from "../assets/quotation.png";
import styles from "../styles/QuoteBox.module.css";

function QuoteBox(props) {
  return (
    <Stack gap={4} className={styles.stack}>
      <Card className={`p-2 ${styles.card}`}>
        <Card.Body className={styles.cardBody}>
          <Image
            src={quotationImg}
            alt="quotation"
            className={styles.quotationImage}
          />
          <div className={styles.textContainer}>
            <Card.Text className={styles.cardText}>
              <h3>{props.text}</h3>
              <p className={styles.author}>- {props.author}</p>
            </Card.Text>
          </div>
          <Image
            src={quotationImg}
            alt="quotation-rotated"
            className={styles.quotationImageRotated}
          />
        </Card.Body>
      </Card>
      <Button
        variant="primary"
        onClick={props.generateNewQuoteIndex}
        className={styles.button}
      >
        New Quote
      </Button>
    </Stack>
  );
}

export default QuoteBox;
