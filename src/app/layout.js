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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/vidimethlogo1.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/vidimethlogo1.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/vidimethlogo1.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/vidimethlogo1.png" />
      </head>
      <body>
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
