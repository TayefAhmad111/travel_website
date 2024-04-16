import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopLocation from "../components/TopLoaction";
import "./globals.css";

export const metadata = {
  title: "Real Estate Website",
  description:
    "real estate website - Web & Mobile Responsive, Devolop by Tayef Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopLocation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
