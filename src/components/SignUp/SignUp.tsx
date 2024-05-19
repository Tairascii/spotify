"use client";

import { continueWithLinks } from "@/constants/continueWith";
import { UrlEnum } from "@/enums/UrlEnum";
import { Input } from "@/ui/Input";
import Image from 'next/image'
import Link from "next/link";
import styles from "./SignUp.module.scss";
import useLoginStore from "./useSignUp";

const SignUp = (): JSX.Element => {
  const { login, setLogin, password, setPassword, name, setName, onSubmit } =
    useLoginStore();
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Sign up and immerse yourself in music</h3>
      <div className={styles.form}>
        <Input
          type="text"
          label="Name and surname"
          id="name"
          placeholder="Your name and surname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <Input
          type="text"
          label="Email"
          id="email"
          placeholder="name@domain.com"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={styles.input}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button
          className={styles.continue}
          onClick={() => onSubmit(login, password, name)}
        >
          <span className={styles.continueText}>Sign up</span>
        </button>
      </div>
      <hr className={styles.divider} />
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
      <div className={styles.signIn}>
        <span className={styles.signinQuestion}>Already have an account?</span>
        &nbsp;
        <Link href={UrlEnum.login} className={styles.signInLink}>
          Sign in.
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
