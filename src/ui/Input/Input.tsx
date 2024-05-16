import clsx from "clsx";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface InputProps
  extends Partial<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  > {
  wrapperClassName?: string;
  label?: string;
}

const Input = ({
  wrapperClassName,
  className,
  label,
  placeholder,
  type,
  name,
  id,
  accept,
  onChange,
  value,
}: InputProps): JSX.Element => {
  return (
    <div className={clsx(styles.block, wrapperClassName)}>
      {label && (
        <label htmlFor={id}>
          <span className={styles.label}>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={clsx(styles.input, className)}
        accept={accept}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
