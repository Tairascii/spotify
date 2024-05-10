"use client";

import dynamic from "next/dynamic";
import styles from "./ModalProvider.module.scss";

const Modal = dynamic(() => import("../../components/Modal/Modal"), {
  ssr: false,
});
interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps): JSX.Element => {
  return (
    <div className={styles.block}>
      <Modal
        isOpen={true}
        onChange={() => {}}
        title={"yoyoyo"}
        description={"yoyoyoyoyoyoyo"}
        children={<></>}
      />
    </div>
  );
};
export default ModalProvider;
