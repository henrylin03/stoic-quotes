import React from "react";
import Stack from "react-bootstrap/Stack";
import QuoteBoxContainer from "./components/QuoteBoxContainer";
import GithubFooter from "./components/GithubFooter";
import styles from "./styles/App.module.css";

function App() {
  return (
    <Stack className={styles.background} gap={1}>
      <div className="p-2">
        <QuoteBoxContainer className="p-2" />
      </div>
      <div className="p-2">
        <GithubFooter className="p-2" />
      </div>
    </Stack>
  );
}

export default App;
