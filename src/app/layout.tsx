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
  openGraph: {
    title: "Zouhair Fakhoury",
    description:
      "Technical Cofounder & iOS Developer – Engineering Student at INSA Rouen-Normandie",
    url: "https://zfakhoury.github.io",
    siteName: "Zouhair Fakhoury",
    images: [
      {
        url: "https://zfakhoury.github.io/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zouhair Fakhoury",
    description:
      "Technical Cofounder & iOS Developer – Engineering Student at INSA Rouen-Normandie",
    images: ["https://zfakhoury.github.io/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
