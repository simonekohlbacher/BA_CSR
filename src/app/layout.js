import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
                <img src="/logo_inverted.png" alt="Logo" className="h-12" />
                <div className="mr-12">
                  <a href="/" className="mr-4">Home</a>
                  <a href="/dashboard">Info</a>
                </div>
              </nav>
            {children}
          </body>
      </html>
  );
}
