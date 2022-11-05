import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <svg
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_123_118)">
            <path
              d="M5 13.3786L27.1457 6.82524L32.2236 15.8058L80 1V13.3786L38.3994 26.7282L44.1635 36.9223L80 25.2718V38.8641L50.7511 48.5728L56.3779 58.5243L80 49.7864V62.165L62.874 68.9612L56.3779 58.5243L5 76V64.3495L50.7511 48.5728L44.1635 36.9223L5 49.7864V36.9223L38.3994 26.7282L32.2236 15.8058L5 25.2718V13.3786Z"
              fill="white"
            />
            <path
              d="M56.3779 58.5243L5 76V64.3495L50.7511 48.5728M56.3779 58.5243L50.7511 48.5728M56.3779 58.5243L38.3994 26.7282M56.3779 58.5243L80 49.7864V62.165L62.874 68.9612L56.3779 58.5243ZM50.7511 48.5728L44.1635 36.9223M50.7511 48.5728L80 38.8641V25.2718L44.1635 36.9223M44.1635 36.9223L5 49.7864V36.9223L38.3994 26.7282M44.1635 36.9223L38.3994 26.7282M38.3994 26.7282L80 13.3786V1L32.2236 15.8058M38.3994 26.7282L32.2236 15.8058M32.2236 15.8058L27.1457 6.82524L5 13.3786V25.2718L32.2236 15.8058Z"
              stroke="#574E4E"
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
        </svg>
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
