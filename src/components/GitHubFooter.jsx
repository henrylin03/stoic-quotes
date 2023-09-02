import { Github } from "react-bootstrap-icons";
import styles from "../styles/GitHubFooter.module.css";

export default function GitHubFooter() {
  return (
    <div className={styles.footerContainer}>
      <a
        href="https://github.com/henrylin03/"
        target="_blank"
        rel="noreferrer"
        className={styles.gitHubLogo}
      >
        <Github size={40} />
      </a>
    </div>
  );
}
