import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SplashLayout } from "@/components/SplashLayout";
import { ThemeProvider } from "@teispace/next-themes";
import { getThemeScript } from "@teispace/next-themes/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Jha | Full-Stack AI Engineer",
  description:
    "Ashish Jha, Full-Stack AI Engineer building production web products and applied AI systems.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = getThemeScript({
    attribute: "class",
    defaultTheme: "light",
    enableSystem: false,
    initialTheme: "light",
    storageMode: "none",
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          initialTheme="light"
          storage="none"
          noScript
        >
          <SplashLayout>{children}</SplashLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
