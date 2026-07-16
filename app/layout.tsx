import "./globals.css";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/BonusFeatures";

export const metadata: Metadata = {
  title: "Stellar Payment Dashboard",
  description: "Build a beautiful payment dashboard on Stellar blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
