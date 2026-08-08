import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";

export const metadata = {
  title: "Vidi Meth Digital Services",
  description: "Vidi Meth Digital Services home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body>
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
