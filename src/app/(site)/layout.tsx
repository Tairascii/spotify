import { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Let's connect! - https://www.linkedin.com/in/tair-sairanbekov/",
  creator: "Tair Sairanbekov",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      {children}
    </div>
  );
}
