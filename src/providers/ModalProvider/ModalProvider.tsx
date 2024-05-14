"use client";

import { UploadModal } from "@/components/UploadModal";
import styles from "./ModalProvider.module.scss";

interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps): JSX.Element => {
  return (
    <>
      <UploadModal />
    </>
  );
};
export default ModalProvider;
