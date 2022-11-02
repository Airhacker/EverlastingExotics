import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import logo from "../public/logo.png";
import Headroom from "react-headroom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMedia } from "react-use";
import { useRouter } from "next/router";

export default function Navbar() {
  const isDesktop = useMedia("(min-width: 50rem)", false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

      <Headroom className={styles.root}>
        <nav className={styles.container}>
          <button
            className={`${styles.menuButton} ${
              router.asPath == "/menu" && styles.notHome
            }`}
            onClick={() => setOpen(!open)}
          >
            <IoMenu />
          </button>

          <Link href="/"></Link>
          <div className={styles.menu}>
            <AnimatePresence>
              {(isDesktop || open) && (
                <motion.ul
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "spring",
                    bounce: 0.01,
                  }}
                  className={`${styles.links} ${
                    router.asPath == "/menu" && styles.notHome
                  }`}
                >
                  <button
                    className={styles.closeButton}
                    onClick={() => setOpen(false)}
                  >
                    <IoClose />
                  </button>

                  <li>
                    <Link href="menu"></Link>
                  </li>
                  <span className={styles.dot}></span>
                  <li>
                    <Link href="/#about-us"></Link>
                  </li>
                  <span className={styles.dot}></span>
                  <li>
                    <Link href="/#contact-us"></Link>
                  </li>
                  <li className={styles.orderCon}>
                    <a
                      href="https://www.toasttab.com/ninfas-sugar-land-5730-highway-6/v3"
                      className={styles.order}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Order Now
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </Headroom>
    </>
  );
}
