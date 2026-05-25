import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "家庭文明工程 Family Civilization Project",
  description: "Family Civilization Project / 家庭文明工程",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
