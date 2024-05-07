import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "SHT Labs",
   description: "Google clone built with Next.js and tailwind CSS.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="fr">
         <body className={inter.className}>
            {children}
            <Footer />
         </body>
      </html>
   );
}
