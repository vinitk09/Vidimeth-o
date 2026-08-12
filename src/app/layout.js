import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Vidi Meth Digital Services",
  description: "Vidi Meth Digital Services home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
