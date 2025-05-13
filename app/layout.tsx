import type { Metadata } from "next";
import { Roboto } from "next/font/google"; 
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto', 
  display: 'swap',
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
  title: "Streamlined HR Management System",
  description: "This HR Management System built with React, designed to simplify employee management, attendance tracking, payroll processing, and performance reviews. Boost your HR efficiency with a fast, user-friendly, and secure solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}> 
        {children}
      </body>
    </html>
  );
}