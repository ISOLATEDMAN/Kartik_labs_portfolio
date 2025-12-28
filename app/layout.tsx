import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartikdev.vercel.app"),
  title: "Kartikeya - Full Stack Indie Developer",
  description: "Portfolio of Kartikeya Samudrala, a 20-year-old Full Stack Developer and Product Engineer from India. Specializing in mobile apps, web applications, and AI-powered solutions.",
  keywords: ["Full Stack Developer", "Product Engineer", "React", "Next.js", "Flutter", "Firebase", "AI Development", "Portfolio"],
  authors: [{ name: "Kartikeya Samudrala" }],
  icons: {
    icon: "/images/profile.png",
    shortcut: "/images/profile.png",
    apple: "/images/profile.png",
  },
  openGraph: {
    title: "Kartikeya - Full Stack Indie Developer",
    description: "Portfolio showcasing my work in full-stack development, mobile apps, and AI-powered solutions.",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
        alt: "Kartikeya Samudrala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartikeya - Full Stack Indie Developer",
    description: "Portfolio of a Full Stack Developer specializing in modern web and mobile applications.",
    creator: "@KARTIKEYA_S_1",
    images: ["/images/profile.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

