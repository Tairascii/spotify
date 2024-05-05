import clsx from "clsx";
import Link from "next/link";
import styles from "./MusicList.module.scss";
import { MusicListItem } from "./parts/MusicListItem";

interface MusicListProps {
  className?: string;
}

const mockList = [
  {
    image: "",
    title: "First",
    subTitle: "Nice",
    href: "#",
  },
  {
    image: "",
    title: "Second",
    subTitle: "Nice",
    href: "#",
  },
  {
    image: "",
    title: "Third",
    subTitle: "Nice",
    href: "#",
  },
];

const MusicList = ({ className }: MusicListProps): JSX.Element => {
  return (
    <div className={clsx(styles.block, className)}>
      <div className={styles.header}>
        <Link href="#" className={styles.title}>
          Music list title
        </Link>
        <Link href="#" className={styles.showAll}>
          Show all
        </Link>
      </div>
      <div className={styles.list}>
        {mockList.map((list) => (
          <MusicListItem
            key={list.title}
            image={list.image}
            title={list.title}
            subTitle={list.subTitle}
            href={list.href}
            className={styles.listItem}
          />
        ))}
      </div>
    </div>
  );
};
export default MusicList;
