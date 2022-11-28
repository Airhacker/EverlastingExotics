import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const svgVariants = {
    hidden: {},
    visible: { transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

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
          <Link href="/">
            <motion.svg
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <g filter="url(#filter0_d_123_118)">
                <motion.path
                  d="M5 13.3786L27.1457 6.82524L32.2236 15.8058L80 1V13.3786L38.3994 26.7282L44.1635 36.9223L80 25.2718V38.8641L50.7511 48.5728L56.3779 58.5243L80 49.7864V62.165L62.874 68.9612L56.3779 58.5243L5 76V64.3495L50.7511 48.5728L44.1635 36.9223L5 49.7864V36.9223L38.3994 26.7282L32.2236 15.8058L5 25.2718V13.3786Z"
                  fill="white"
                  variants={pathVariants}
                />
                <motion.path
                  d="M56.3779 58.5243L5 76V64.3495L50.7511 48.5728M56.3779 58.5243L50.7511 48.5728M56.3779 58.5243L38.3994 26.7282M56.3779 58.5243L80 49.7864V62.165L62.874 68.9612L56.3779 58.5243ZM50.7511 48.5728L44.1635 36.9223M50.7511 48.5728L80 38.8641V25.2718L44.1635 36.9223M44.1635 36.9223L5 49.7864V36.9223L38.3994 26.7282M44.1635 36.9223L38.3994 26.7282M38.3994 26.7282L80 13.3786V1L32.2236 15.8058M38.3994 26.7282L32.2236 15.8058M32.2236 15.8058L27.1457 6.82524L5 13.3786V25.2718L32.2236 15.8058Z"
                  stroke="black"
                  variants={pathVariants}
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_123_118"
                  x="0.5"
                  y="0.321533"
                  width="84"
                  height="84.3767"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_123_118"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_123_118"
                    result="shape"
                  />
                </filter>
              </defs>
            </motion.svg>
          </Link>
        </div>
        <div className={styles.mobileNav}>
          <RiMenu3Fill
            className={styles.mobileMenuButton}
            onClick={() => setOpen(!open)}
          ></RiMenu3Fill>

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
          <motion.button
            className={styles.bookNowButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/">Book Now</Link>
          </motion.button>
        </div>
      </section>
    </>
  );
};
export default Navbar;
