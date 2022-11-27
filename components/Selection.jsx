import styles from "../styles/Selection.module.css";
import AmgC63 from "./cars/AmgC63";
import Raptor from "./cars/Raptor";

const Selection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <hr />
        <h1>The Selection</h1>
        <hr />
      </div>
      <div className={styles.carContainer}>
        <Raptor />
        <AmgC63 />
      </div>
    </section>
  );
};
export default Selection;
