import clsx from "clsx";
import Link from "next/link";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  className?: string;
  href: string;
  isActive: boolean;
  icon: JSX.Element;
  label: string;
}

const SidebarItem = ({
  className,
  href,
  isActive,
  icon,
  label,
}: SidebarItemProps): JSX.Element => {
  return (
    <Link
      className={clsx(className, styles.route, {
        [styles.activeRoute]: isActive,
      })}
      href={href}
    >
      <>
        {icon}
        <span className={styles.routeText}>{label}</span>
      </>
    </Link>
  );
};

export default SidebarItem;
