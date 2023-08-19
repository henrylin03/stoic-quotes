import React from "react";
import QuoteBoxContainer from "./components/QuoteBoxContainer";
import GithubFooter from "./components/GithubFooter";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <QuoteBoxContainer />
      <GithubFooter className={styles.footer} />
    </div>
  );
}

export default App;
