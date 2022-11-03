import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Mclaren from "../public/Mclaren.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.heroText}>
        <h1>Everlasting Exotics</h1>
        <Image alt="Photo of a McLaren 720s" src={Mclaren}></Image>
      </div>
      <div className={styles.HeroButton}>
        <Link href="/">Open Catalog</Link>
      </div>
    </section>
  );
}
