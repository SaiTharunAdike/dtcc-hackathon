import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Credit Scoring Calculator",
  description: "Upload your finacial statments to calculate your credit score",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-100"}>{children}</body>
    </html>
  );
}
