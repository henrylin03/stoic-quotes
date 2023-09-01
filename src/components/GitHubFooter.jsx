import { Github } from "react-bootstrap-icons";
import styles from "../styles/GitHubFooter.module.css";

export default function GitHubFooter() {
  return (
    <div>
      <a href="https://github.com/henrylin03/" target="_blank" rel="noreferrer">
        <Github size={35} />
      </a>
    </div>
  );
}
