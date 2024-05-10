import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.scss";
import { Sidebar } from "@/components/Sidebar";
import { Modal } from "@/components/Modal";
import { ModalProvider } from "@/providers/ModalProvider";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Let's connect! - https://www.linkedin.com/in/tair-sairanbekov/",
  creator: "Tair Sairanbekov",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar children={children} />
        <ModalProvider />
      </body>
    </html>
  );
}
