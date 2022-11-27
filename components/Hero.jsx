import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Mclaren from "../public/Mclaren.png";
import huracan from "../public/huracanTop.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.secondaryContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.mobileImage}
            alt="Top down photo of a Lamborghini Huracan"
            src={huracan}
          ></Image>
          <Image
            className={styles.desktopImage}
            alt="Photo of a McLaren 720s"
            src={Mclaren}
          ></Image>
        </div>
        <div className={styles.heroText}>
          <h1>Everlasting Exotics</h1>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="callToActionButton"
      >
        <Link href="/">Open Catalog</Link>
      </motion.button>
    </section>
  );
}
