import QuoteBoxContainer from "./components/QuoteBoxContainer";
import BackgroundImage from "./components/BackgroundImage";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <QuoteBoxContainer className={styles.quoteBox} />
    </div>
  );
}

export default App;
