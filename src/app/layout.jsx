import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
   title: "SHT Lab",
   description: "Google clone built with Next.js and tailwind CSS.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <body className="relative min-h-screen">
            {children}
            <Footer />
         </body>
      </html>
   );
}
