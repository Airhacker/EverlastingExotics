import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
