import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const misprint = localFont({
  src: "../../public/fonts/Misprint_Standard/TAYMisprint.woff2",
  variable: "--font-misprint",
  display: "swap",
});

const wingman = localFont({
  src: "../../public/fonts/Wingman_Freelancer/TAYWingman.woff2",
  variable: "--font-wingman",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Group Project Design Studio",
  description: "Creating beautiful, functional spaces that tell your story through innovative design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${misprint.variable} ${wingman.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
