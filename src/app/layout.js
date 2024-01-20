import Footer from "@/components/Footer";
import PrivacyBanner from "@/components/PrivacyBanner";
import "./globals.css";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "RUL GMBH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <GoogleAnalytics />

          {children}
        </main>
        <Footer />
        <PrivacyBanner />
      </body>
    </html>
  );
}
