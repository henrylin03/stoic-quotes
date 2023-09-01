import QuoteBox from "./components/QuoteBox";
import BackgroundImage from "./components/BackgroundImage";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <QuoteBox className={styles.quoteBox} />
    </div>
  );
}

export default App;
