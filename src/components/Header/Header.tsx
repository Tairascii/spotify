"use client";
import { UrlEnum } from "@/enums/UrlEnum";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/ui/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const router = useRouter();
  const { isSignedIn, onLogout, setIsSignedIn } = useUser();
  const handleLogout = () => {
    router.push(UrlEnum.home);
    setIsSignedIn(false);
  };

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
          {isSignedIn && (
            <Button
              text={"Logout"}
              className={styles.logout}
              onClick={() => {
                onLogout(handleLogout);
              }}
            />
          )}
          {!isSignedIn && (
            <div className={styles.signInUp}>
              <Link href={UrlEnum.signup} className={styles.signUp}>
                <span className={styles.signUpText}>Sign up</span>
              </Link>
              <Link href={UrlEnum.login} className={styles.signIn}>
                <span className={styles.signInText}>Log in</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
