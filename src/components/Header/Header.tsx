"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <div className={styles.arrows}>
          <button className={styles.arrowLeftButton} onClick={router.back}>
            <ChevronLeftIcon width={20} height={20} />
          </button>
          <button className={styles.arrowRightButton} onClick={router.forward}>
            <ChevronRightIcon width={20} height={20} />
          </button>
        </div>
        <div className={styles.account}>
          {true && (
            <div className={styles.signInUp}>
              <button className={styles.signUp}>
                <span className={styles.signUpText}>Sign up</span>
              </button>
              <button className={styles.signIn}>
                <span className={styles.signInText}>Log in</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
