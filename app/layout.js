import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tekskillup | Tech & Digital Skills at your convenience",
  description:
    "Learn the Tech & Digital Skills that gives you unfair advantage in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
