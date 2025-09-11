import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"
import { SplashLayout } from "@/components/SplashLayout";
import { AnimatedLayout } from "@/components/AnimatedLayout";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Jha",
  description: "This is my portfolio website",
  icons: {
    icon: "/logo.jpg"

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashLayout>
          <AnimatedLayout>
            <ThemeProvider attribute="class" defaultTheme="system">
              {children}
              <Toaster position="bottom-right" theme="dark" />
            </ThemeProvider>
          </AnimatedLayout>
        </SplashLayout>
      </body>
    </html>
  );
}
