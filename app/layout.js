import "./globals.css";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from "@/components/custom/Header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "AI Content Platform",
  description: "Content creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
  afterSignOutUrl="/"
      appearance={{
        baseTheme: shadesOfPurple
      }}
    >

      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ConvexClientProvider>
              {/* Header */}
              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                {children}
              </main>
              <Toaster richColors />
            </ConvexClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
