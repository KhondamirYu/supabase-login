'use client'
import localFont from "next/font/local";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import { getUser } from "../utils/service";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const UserContext = createContext()


export default function RootLayout({ children }) {
  const [user, setUser] = useState()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      </body>
    </html>
  );
}
