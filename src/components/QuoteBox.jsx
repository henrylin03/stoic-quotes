import React from "react";
import { Card, Stack, Button, Image } from "react-bootstrap";
import quotationImg from "../assets/quotation.png";

function QuoteBox(props) {
  return (
    <Stack
      gap={4}
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <Card className="p-2">
        <Card.Body>
          <Image
            src={quotationImg}
            alt="quotation"
            style={{ width: "50px", opacity: ".7" }}
          />
          {/* <Card.Title>{props.text}</Card.Title> */}
          <Card.Text>
            <h3>{props.text}</h3>
            <p>- {props.author}</p>
          </Card.Text>
          <Image
            src={quotationImg}
            alt="quotation-rotated"
            style={{
              width: "50px",
              transform: "rotate(180deg)",
              opacity: ".7",
            }}
          />
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={props.generateNewQuoteIndex}>
        New Quote
      </Button>
    </Stack>
  );
}

export default QuoteBox;
