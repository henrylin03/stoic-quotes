import React from "react";
import githubLogo from "../../public/github-logo.png";
import styles from "../styles/GithubFooter.module.css";

export default function GithubFooter() {
  return (
    <div className={styles.container}>
      <a href="http://www.google.com" target="_blank">
        <img src={githubLogo} className={styles.icon} />
      </a>
    </div>
  );
}
