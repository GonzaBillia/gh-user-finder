import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub User Finder",
  description: "Practice Project - GitHub User Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={montserrat.className}>
        <div className="min-h-screen mx-auto flex flex-col justify-center items-center bg-slate-100 dark:bg-[#151C2F]">
          <div className="w-[400px] md:w-[500px] xl:w-[900px] space-y-4">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
