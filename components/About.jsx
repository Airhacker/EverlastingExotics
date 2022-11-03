import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.About}>
      <div className={styles.aboutTop}>Renting cars has never been easier</div>
      <div className={styles.aboutBottom}>
        At everlasting exotics we take pride in making exotic rentals easy and
        affordable
      </div>
    </section>
  );
}
