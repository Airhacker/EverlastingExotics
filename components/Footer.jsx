import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles.Container}>
      <div className={styles.Left}>
        <h1>EVERLASTING EXOTICS</h1>
        <p>
          Do you have a question, an idea, or a project you need help with?
          Contact Us!
        </p>

        <div className={styles.bottomLinks}>
          <p>email@email.com</p>
          <p>777-777-7777</p>
        </div>
      </div>
      <div className={styles.Right}></div>
    </section>
  );
}
