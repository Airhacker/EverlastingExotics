import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.About}>
      <div className={styles.aboutText}>
        <h2>Renting Cars has Never Been Easier</h2>
        <p>
          At everlasting exotics we take pride in making exotic rentals easy and
          affordable.
        </p>
      </div>
    </section>
  );
}
