import { PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import styles from "./MusicListItem.module.scss";

interface MusicListItemProps {
  image: string;
  title: string;
  subTitle: string;
  href: string;
  className?: string;
}

const MusicListItem = ({
  image,
  title,
  subTitle,
  href,
  className,
}: MusicListItemProps): JSX.Element => {
  return (
    <Link className={clsx(styles.block, className)} href={href}>
      <div className={styles.imageWrapper}>
        <button className={styles.playButton}>
          <PlayIcon width={26} height={26} />
        </button>
      </div>
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </Link>
  );
};
export default MusicListItem;
