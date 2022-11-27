import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <section className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">Logo</Link>
        </div>
        <div className={styles.mobileNav}>
          <RiMenu3Fill onClick={() => setOpen(!open)}></RiMenu3Fill>
          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "150%" }}
                transition={{
                  type: "spring",
                  bounce: 0.01,
                }}
                className={styles.links}
              >
                <RiCloseFill
                  className={styles.closeButton}
                  onClick={() => setOpen(!open)}
                ></RiCloseFill>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Cars</Link>
                </li>
                <li>
                  <Link href="/">Showroom</Link>
                </li>
                <li>
                  <Link href="/">About Us</Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
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
    </>
  );
};
export default Navbar;
