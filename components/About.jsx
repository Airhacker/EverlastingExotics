import styles from "../styles/about.module.css";
import Image from "next/image";
import Mclaren from "../public/Mclaren.png";
import Link from "next/link";

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
