"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string
  isOpen: boolean;
  onChange: (val: boolean) => void;
  title: string;
  description: string;
  children: JSX.Element;
}

const Modal = ({
  isOpen,
  onChange,
  title,
  description,
  children,
  className,
}: ModalProps): JSX.Element => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={clsx(className, styles.content)}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className={styles.closeButton}>
              <XMarkIcon width={20} height={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
