import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MainNavBar from "@/components/ui/NavBar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Sphere",
  description: "Save All Your Contacts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark min-h-screen">
      <body className={inter.className}>
        <Providers>
          <MainNavBar />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
