import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import PreuzmiAplikaciju from "@/components/preuzmiAplikaciju/PreuzmiAplikaciju";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <PreuzmiAplikaciju />
        <Footer />
      </body>
    </html>
  );
}
