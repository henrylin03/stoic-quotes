import { useState } from "react";
import { Card, Stack, Button, Image, Fade } from "react-bootstrap";
import styles from "../styles/QuoteBox.module.css";
import quotes from "../../data/quotes.json";
import quotationImg from "../assets/quotation.png";
import githubLogo from "../assets/github-logo.png";

export default function QuoteBox() {
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  const [quoteIndex, setQuoteIndex] = useState(getRandomQuoteIndex());
  const [textVisible, setTextVisible] = useState(true);

  const handleNewQuoteButtonClick = () => {
    const updateQuoteIndex = () => {
      let newQuoteIndex = getRandomQuoteIndex();
      while (newQuoteIndex === quoteIndex) {
        newQuoteIndex = getRandomQuoteIndex();
      }
      setQuoteIndex(newQuoteIndex);
    };

    // fades text (quote and author) out
    setTextVisible(false);
    setTimeout(() => {
      updateQuoteIndex();

      // fades text back in
      setTextVisible(true);
    }, 550);
  };

  const selectedQuote = quotes[quoteIndex];

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
            <Fade in={textVisible}>
              <Card.Text className={styles.cardText}>
                <p>{selectedQuote.text}</p>
                <p className={styles.author}>- {selectedQuote.author}</p>
              </Card.Text>
            </Fade>
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
        onClick={handleNewQuoteButtonClick}
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

// }
