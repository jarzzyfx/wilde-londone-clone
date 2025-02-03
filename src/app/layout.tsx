import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import ChatProvider from "@/components/shared/Chat";
import Footer from "@/components/shared/Footer";

const mediaanRegular = localFont({
  src: "./fonts/Mediaan-Regular.woff",
});

const mediaanItalic = localFont({
  src: "./fonts/Mediaan-Italic.woff",
  variable: "--mediaan-it",
});

export const metadata: Metadata = {
  title: "Beautiful London Serviced Apartments | Wilde Aparthotels",
  description: "For people that want to rent a livable space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mediaanRegular.className} ${mediaanItalic.variable} antialiased`}
      >
        <ChatProvider>
          <Header />
          {children}
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
