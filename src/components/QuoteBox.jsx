import React from "react";
import { Card, Stack, Button, Image } from "react-bootstrap";
import styles from "../styles/QuoteBox.module.css";
import quotationImg from "../assets/quotation.png";
import githubLogo from "../assets/github-logo.png";

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
              <p>{props.text}</p>
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
        onClick={props.handleNewQuoteButtonClick}
        className={styles.button}
      >
        New Quote
      </Button>
      <a href="https://github.com/henrylin03/" target="_blank">
        <img src={githubLogo} className={styles.github} />
      </a>
    </Stack>
  );
}

export default QuoteBox;
