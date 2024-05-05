import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.block}>
      <Header />
      <Main className={styles.main} />
    </div>
  );
}
