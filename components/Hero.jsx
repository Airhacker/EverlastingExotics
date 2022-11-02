import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.Herotext}>Everlasting Exotics</div>
      <div className={styles.HeroCar}></div>
      <div className={styles.HeroButton}></div>
    </section>
  );
}
