import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Selection from "../components/Selection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <Navbar />
        <Hero />
      </div>
      <div className={styles.heroContainer}>
        <Selection />
        <Footer />
      </div>
    </div>
  );
}
