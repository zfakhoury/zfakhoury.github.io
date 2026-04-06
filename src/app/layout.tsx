import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zouhair Fakhoury – Portfolio",
  description:
    "Technical Cofounder & iOS Developer – Engineering Student at INSA Rouen-Normandie",
  icons: {
    icon: "/memoji.png",
    apple: "/memoji.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
