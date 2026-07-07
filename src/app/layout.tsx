import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dhruv Akbari — Senior Full Stack Developer & eCommerce Architect",
  description: "Dhruv Akbari — Senior Full Stack Developer with 5+ years of experience in Shopify Plus, WordPress, React.js, Next.js, and eCommerce architecture.",
  authors: [{ name: "Dhruv Akbari" }],
  keywords: [
    "Dhruv Akbari",
    "Full Stack Developer",
    "Shopify Plus",
    "Next.js Developer",
    "React Developer",
    "eCommerce Architect",
    "Surat",
    "Gujarat",
    "Software Engineer",
    "Shopify Developer"
  ],
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://dhruv-akbari-resume.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dhruv Akbari — Senior Full Stack Developer & eCommerce Architect",
    description: "Senior Full Stack Developer specializing in Shopify Plus, WordPress, React, Next.js, and high-performance eCommerce architecture.",
    url: "https://dhruv-akbari-resume.netlify.app",
    siteName: "Dhruv Akbari Resume",
    images: [
      {
        url: "https://github.com/MrAkbari91.png",
        width: 460,
        height: 460,
        alt: "Dhruv Akbari Profile Photo",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Dhruv",
    lastName: "Akbari",
    username: "MrAkbari91",
    gender: "male"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Akbari — Senior Full Stack Developer & eCommerce Architect",
    description: "Senior Full Stack Developer specializing in Shopify Plus, WordPress, React, Next.js, and high-performance eCommerce architecture.",
    images: ["https://github.com/MrAkbari91.png"],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dhruv Akbari",
  "jobTitle": "Senior Full Stack Developer",
  "email": "dhruvakbari303@gmail.com",
  "telephone": "+91-8460621361",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "url": "https://dhruv-akbari-resume.netlify.app",
  "sameAs": [
    "https://linkedin.com/in/dhruvakbari",
    "https://github.com/MrAkbari91"
  ],
  "knowsAbout": [
    "Shopify Plus",
    "WordPress",
    "React.js",
    "Next.js",
    "TypeScript",
    "eCommerce Architecture",
    "REST/GraphQL APIs",
    "CRO"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-14879NYVR1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-14879NYVR1');
            `,
          }}
        />
        {/* Font Awesome Stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Blocking Script to Prevent Dark Mode Flash (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafaf9] dark:bg-[#020617] transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
