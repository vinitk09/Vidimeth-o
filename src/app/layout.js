import "./globals.css";
import "aos/dist/aos.css";
import AosInitializer from "./components/AosInitializer";
import FloatingActions from "./components/FloatingActions";

export const metadata = {
  title: "Vidi Meth Digital Services",
  description: "Vidi Meth Digital Services home page",
  icons: {
    icon: [
      { url: "/vidilogo.png", type: "image/png" },
    ],
    shortcut: ["/vidilogo.png"],
    apple: [{ url: "/vidilogo.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans antialiased" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/vidilogo.png" />
        <link rel="shortcut icon" href="/vidilogo.png" />
        <link rel="apple-touch-icon" href="/vidilogo.png" />
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
