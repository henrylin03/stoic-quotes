import React from "react";
import githubLogo from "../../public/github-logo.png";
import styles from "../styles/GithubFooter.module.css";

export default function GithubFooter() {
  return (
    <div className={styles.container}>
      <img src={githubLogo} />
    </div>
  );
}
