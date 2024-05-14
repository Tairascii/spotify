import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

interface ButtonProps
  extends Partial<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  className?: string;
  text: string;
}

const Button = ({ className, text, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={clsx(styles.block, className)} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
