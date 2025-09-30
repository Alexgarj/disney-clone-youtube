import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For Educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
