import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/Weblogo.svg"
          height={75}
          width={75}
        ></Image>
      </div>
      <div className={styles.navLinksContainer}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Cars</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.bookNowButton} href="/">
          Book Now
        </Link>
      </div>
    </section>
  );
};
export default Navbar;
