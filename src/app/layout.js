import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";

export const metadata = {
  title: "Vidi Meth Digital Services",
  description: "Vidi Meth Digital Services home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
