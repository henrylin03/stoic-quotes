import React from "react";
import Quote from "./Quote";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.quoteBox}>
      <div id="quote-box">
        <Quote />
      </div>
    </div>
  );
}

export default App;
