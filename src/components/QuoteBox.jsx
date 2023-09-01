/* eslint-disable react/prop-types */
import { Card, Button, Image, Fade } from "react-bootstrap";
import styles from "../styles/QuoteBox.module.css";
import quotationImg from "../assets/quotation.png";
import githubLogo from "../assets/github-logo.png";

export default function QuoteBox(props) {
  return (
    <div className={styles.quoteBox}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <Image
            src={quotationImg}
            alt="quotation"
            className={styles.quotationImage}
          />
          <div className={styles.textContainer}>
            <Fade in={props.textVisible}>
              <Card.Text className={styles.cardText}>
                <p>{props.selectedQuote.text}</p>
                <p className={styles.author}>- {props.selectedQuote.author}</p>
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
        onClick={props.handleNewQuoteButtonClick}
        className={styles.button}
      >
        New Quote
      </Button>

      <a
        href="https://github.com/henrylin03"
        target="_blank"
        rel="noreferrer"
        className={styles.githubLink}
      >
        <img src={githubLogo} className={styles.github} alt="Github Logo" />
      </a>
    </div>
  );
}
