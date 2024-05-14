import useUploadModal from "@/hooks/useUploadModal";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
import dynamic from "next/dynamic";
import styles from "./UploadModal.module.scss";

const Modal = dynamic(() => import("../../ui/Modal/Modal"), { ssr: false });

interface UploadModalProps {}

const UploadModal = ({}: UploadModalProps): JSX.Element => {
  const { isOpen, onClose } = useUploadModal();
  return (
    <Modal
      isOpen={isOpen}
      onChange={onClose}
      title={"Share your talent with everyone!"}
      description={"Upload and mp3 file"}
    >
      <form className={styles.block}>
        <Input placeholder={"Title"} className={styles.input} id={"title"} />
        <Input
          label="Select a song file"
          type="file"
          accept=".mp3"
          className={styles.input}
          id={"song"}
        />
        <Input
          label="Select a thumbnail"
          type="file"
          accept="image/*"
          className={styles.input}
          id={"thumbnail"}
        />
        <Button text="Create" className={styles.submit} />
      </form>
    </Modal>
  );
};
export default UploadModal;
