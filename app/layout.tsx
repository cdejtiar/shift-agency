import type { Metadata } from "next";
import { magnetik, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shift Agency — Comunicá y verte mejor",
  description:
    "En Shift Agency ayudamos a tu marca a comunicar y verse mejor, sin perder lo que la hace única.",
  openGraph: {
    title: "Shift Agency",
    description:
      "En Shift Agency ayudamos a tu marca a comunicar y verse mejor, sin perder lo que la hace única.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${magnetik.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
