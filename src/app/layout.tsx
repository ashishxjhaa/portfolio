import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SplashLayout } from "@/components/SplashLayout";
import { AnimatedLayout } from "@/components/AnimatedLayout";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme, getThemeScript } from "@teispace/next-themes/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  const initialTheme = await getTheme();
  const themeScript = getThemeScript({
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    initialTheme: initialTheme ?? undefined,
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          initialTheme={initialTheme ?? undefined}
          noScript
        >
          <SplashLayout>
            <AnimatedLayout>
              {children}
              <Toaster position="bottom-right" theme="dark" />
            </AnimatedLayout>
          </SplashLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
