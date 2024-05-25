"use client";

import { UploadModal } from "@/components/UploadModal";

interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps): JSX.Element => {
  return (
    <>
      <UploadModal />
    </>
  );
};
export default ModalProvider;
