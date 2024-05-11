"use client";

import styles from "./ModalProvider.module.scss";

interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps): JSX.Element => {
  return <div className={styles.block}></div>;
};
export default ModalProvider;
