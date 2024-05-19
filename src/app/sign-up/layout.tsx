import { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { UrlEnum } from "@/enums/UrlEnum";

export const metadata: Metadata = {
  title: "Sign up - Spotify",
  description: "Let's connect! - https://www.linkedin.com/in/tair-sairanbekov/",
  creator: "Tair Sairanbekov",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className={styles.header}>
        <Link href={UrlEnum.home}>
          <Image
            src="/static/images/spotify-with-text.svg"
            alt={"spotify-with-icon-link"}
            width={120}
            height={40}
          />
        </Link>
      </header>
      <div className={styles.wrapper}>{children}</div>
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          This site is not protected by reCAPTCHA and the Google&nbsp;
          <Link href={"https://policies.google.com/privacy"} className={styles.googleLink}>
            Privacy Policy
          </Link>
          &nbsp; and&nbsp;
          <Link href={"https://policies.google.com/terms"} className={styles.googleLink}>
            Terms of Service
          </Link>
          &nbsp; does not apply.
        </span>
      </footer>
    </div>
  );
}
