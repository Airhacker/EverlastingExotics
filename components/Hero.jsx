import styles from "../styles/hero.module.css";
import Image from "next/image";
import Mclaren from "../public/Mclaren.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.root}>
      <div className={styles.Herotext}>Everlasting Exotics</div>
      <div className={styles.HeroCar}>
        <Image src={Mclaren} alt="Mclaren" width={1300} height={866} />
      </div>
      <div className={styles.HeroButton}>
        <a>Open Catalog</a>
      </div>
    </section>
  );
}
