import img from "../assets/school-of-athens-bg.jpg";
import styles from "../styles/BackgroundImage.module.css";

export default function BackgroundImage() {
  return (
    <img src={img} alt="background-image" className={styles.backgroundImage} />
  );
}
