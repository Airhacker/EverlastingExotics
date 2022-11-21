import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Title}>
          <h1>EVERLASTING EXOTICS</h1>
        </div>
        <div className={styles.Mid}>
          Do you have a question, an idea, or a project you need help with?
          Contact Us!
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Box}>
            <h1>EExotics@gmail.com</h1>
          </div>
          <div className={styles.Box}>
            <h1>777-777-7777</h1>
          </div>
        </div>
      </div>
      <div className={styles.Right}></div>
    </div>
  );
}
