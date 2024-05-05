import { Header } from "../components/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.block}>
      <Header />
    </div>
  );
}
