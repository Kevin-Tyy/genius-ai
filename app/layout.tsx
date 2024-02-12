import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Progressbar from "@/providers/Progressbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius Ai",
  description: "The Genius Ai Web App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
