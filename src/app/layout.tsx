import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Muhammad Hammad Irfan | Full Stack Developer",
    description: "Full-stack developer specializing in Next.js, React, Node.js, and AI integration. Building modern web applications and data-driven solutions.",
    keywords: ["Full Stack Developer", "Next.js", "React", "Node.js", "Supabase", "AI Integration", "Web Development"],
    authors: [{ name: "Muhammad Hammad Irfan" }],
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon.png', type: 'image/png' },
        ],
        apple: '/apple-icon.png',
    },
    openGraph: {
        title: "Muhammad Hammad Irfan | Full Stack Developer",
        description: "Full-stack developer specializing in Next.js, React, Node.js, and AI integration.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
                    }}
                />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
