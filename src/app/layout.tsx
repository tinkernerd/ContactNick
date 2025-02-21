import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Nick",
  description: "Contact Nick for whatever you need to contact Nick about.",
  icons: {
    // You can also do an array of objects if you want multiple icon types
    icon: [
      {
        url: "https://media.tinkernerd.dev/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
