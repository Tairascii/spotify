import clsx from "clsx";
import styles from "./Switcher.module.scss";

interface SwitcherProps extends Partial<HTMLInputElement> {
  wrapperSize: "S" | "M" | "L";
  wrapperClassName?: string;
  label: string;
}

const Switcher = ({
  label,
  wrapperClassName,
  wrapperSize,
  id,
}: SwitcherProps): JSX.Element => {
  return (
    <div
      className={clsx(styles.block, wrapperClassName, {
        [styles.small]: wrapperSize === "S",
      })}
    >
      <label className={styles.switcher}>
        <input type="checkbox" id={id} />
        <span className={styles.slider}></span>
      </label>
      <label htmlFor={id} className={styles.label}>
        <span className={styles.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Switcher;
