import React from "react";
import QuoteBoxContainer from "./components/QuoteBoxContainer";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <QuoteBoxContainer className={styles.quoteBox} />
    </div>
  );
}

export default App;
