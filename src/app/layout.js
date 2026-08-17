import { Poppins } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";
import FloatingActions from "./components/FloatingActions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Vidi Meth Digital Services",
  description: "Vidi Meth Digital Services home page",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo_vidi.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/logo_vidi.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/logo_vidi.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo_vidi.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <AosInitializer />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
