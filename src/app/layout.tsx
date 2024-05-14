import { Figtree } from "next/font/google";
import "@/styles/globals.scss";
import dynamic from "next/dynamic";

const ModalProvider = dynamic(
  () => import("../providers/ModalProvider/ModalProvider"),
  { ssr: false }
);

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        {children}
        <ModalProvider />
      </body>
    </html>
  );
}
