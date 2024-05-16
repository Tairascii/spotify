"use client";

import { continueWithLinks } from "@/constants/continueWith";
import { UrlEnum } from "@/enums/UrlEnum";
import { Input } from "@/ui/Input";
import { Switcher } from "@/ui/Switcher";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./Login.module.scss";
import useLoginStore from "./useLogin";

const Login = (): JSX.Element => {
  const { login, setLogin, password, setPassword, onSubmit } = useLoginStore();
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Log in to Spotify</h3>
      <div className={styles.loginWithThird}>
        {continueWithLinks.map((item) => (
          <button className={styles.continueWithButton}>
            <span
              className={styles.continueWithLogo}
              style={{
                background: `url(${item.background}) center center no-repeat;`,
              }}
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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
          onClick={() => onSubmit(login, password)}
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
