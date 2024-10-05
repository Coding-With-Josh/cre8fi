import type { Metadata } from "next";
import { Nunito_Sans, Roboto } from "next/font/google";

import "./globals.css";
import { Loader } from "@/components/reusable/loader";
import WalletContextProvider from "@/providers/WalletContextProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "The Ultimate Create-To-Earn Platform",
  description: "Cre8Fi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <WalletContextProvider>
          <Loader />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
