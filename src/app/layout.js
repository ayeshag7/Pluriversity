import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pluriversity",
  description: "The Critical Peace Studies Society (CPSS) aims to be a vibrant community of critical scholars /activists working in the areas of Social Justice, Peace Education, Peace Studies and International Relations broadly understood as a multidimensional field of study and practice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
