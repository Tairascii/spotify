"use client";
import { UploadModal } from "@/components/UploadModal";
import useUploadModal from "@/hooks/useUploadModal";
import { PlayPauseIcon, PlusIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import styles from "./Library.module.scss";

interface LibraryProps {
  className?: string;
}

const Library = ({ className }: LibraryProps): JSX.Element => {
  const { onOpen } = useUploadModal();
  return (
    <div className={clsx(styles.block, className)}>
      <div className={styles.actions}>
        <div className={styles.yourPlaylist}>
          <PlayPauseIcon width={24} height={24} />
          <span className={styles.yourPlaylistText}>Your Library</span>
        </div>
        <div className={styles.add}>
          <button className={styles.addButton} onClick={onOpen}>
            <PlusIcon width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Library;
