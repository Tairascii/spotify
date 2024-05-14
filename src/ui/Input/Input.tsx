import clsx from "clsx";
import styles from "./Input.module.scss";

interface InputProps extends Partial<HTMLInputElement> {
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
      />
    </div>
  );
};

export default Input;
