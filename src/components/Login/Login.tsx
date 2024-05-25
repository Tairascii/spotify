"use client";

import { continueWithLinks } from "@/constants/continueWith";
import { UrlEnum } from "@/enums/UrlEnum";
import { useUser } from "@/hooks/useUser";
import { Input } from "@/ui/Input";
import { Switcher } from "@/ui/Switcher";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";
import useLoginStore from "./useLogin";

const Login = (): JSX.Element => {
  const { email, setEmail, password, setPassword, onSubmit } = useLoginStore();
  const { setIsSignedIn } = useUser();
  const router = useRouter();
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Log in to Spotify</h3>
      <div className={styles.loginWithThird}>
        {continueWithLinks.map((item) => (
          <button className={styles.continueWithButton}>
            <Image
              alt={item.title}
              src={item.background}
              width={24}
              height={24}
            />
            <span className={styles.continueWithTitle}>{item.title}</span>
          </button>
        ))}
      </div>
      <hr className={styles.divider} />
      <div className={styles.form}>
        <Input
          type="text"
          label="Email or username"
          id="email"
          placeholder="Email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Switcher
          label="Remember me"
          wrapperSize="S"
          id="remember"
          wrapperClassName={styles.switcher}
        />
        <button
          className={styles.login}
          onClick={() =>
            onSubmit(email, password, () => {
              router.push(UrlEnum.home)
              setIsSignedIn(true)
            })
          }
        >
          <span className={styles.loginText}>Log In</span>
        </button>
      </div>
      <Link href="#" className={styles.forgotLink}>
        <span className={styles.forgot}>Forgot your password?</span>
      </Link>
      <hr className={styles.divider} />
      <div className={styles.signUp}>
        <span className={styles.signUpText}>Don't have an account?</span>
        <Link href={UrlEnum.signup} className={styles.forgotLink}>
          <span className={styles.forgot}>Sign up for Spotify</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
