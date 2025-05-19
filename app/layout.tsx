import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Jayswal | Personal Portfolio",
  description: "I am a software developer with 1 year of experience in full-stack, AI/ML, and cloud computing.",
  keywords: [
    "Dev Jayswal",
    "software developer",
    "portfolio",
    "AI",
    "ML",
    "full-stack",
    "cloud computing",
  ],
   authors: [{ name: "Dev Jayswal", url: "https://devjayswal.com" }],
    openGraph: {
    title: "Dev Jayswal | Personal Portfolio",
    description:
      "Explore Dev’s work in full-stack, AI/ML, and cloud projects, plus ethical hacking demos.",
    url: "https://devjayswal.com",
    siteName: "Dev Jayswal Portfolio",
    images: [
      {
        url: "https://devjayswal.com/profile_photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dev Jayswal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Jayswal | Portfolio",
    description:
      "A showcase of Dev’s AI/ML, full-stack, and cloud computing projects.",
    images: ["https://devjayswal.com/profile_photo.jpeg"],
    creator: "@devjayswal",
  },
  // 🏷️ Favicon and touch-icon setup:
  icons: {
    icon: "/favicon.ico",                   // the standard 32×32 ICO
    shortcut: "/favicon.ico",         // PNG fallback for older browsers
    apple: "/favicon.ico",         // when users save to home screen
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
