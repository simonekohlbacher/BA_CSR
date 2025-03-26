import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bachelor's Project @Simone",
  description: "made with next app",
};


export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body>
              <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <img src="/logo_inverted.png" alt="Logo" className="h-12" href="/"/>
                <div className="mr-12">
                  <Link href="/" className="mr-4">Home</Link>
                  <Link href="/">Info</Link>
                </div>
              </nav>
            {children}
          </body>
      </html>
  );
}
