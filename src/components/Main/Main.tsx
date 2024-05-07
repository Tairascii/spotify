import clsx from "clsx";
import { MusicList } from "../MusicList";
import styles from "./Main.module.scss";

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps): JSX.Element => {
  return (
    <div className={clsx(styles.block, className)}>
      <span className={styles.welcomeBack}>Welcome back</span>
      <div className={styles.musicBlock}>
        <MusicList className={styles.list} />
      </div>
    </div>
  );
};
export default Main;
