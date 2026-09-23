import type { Metadata } from "next";
import { magnetik, spaceGrotesk } from "@/lib/fonts";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shift Agency",
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
      <body>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
