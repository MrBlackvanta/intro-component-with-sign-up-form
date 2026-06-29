import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/layout/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(
//     "https://vanta-intro-component-with-sign-up-form.netlify.app",
//   ),
//   title: "",
//   description: "",
//   openGraph: {
//     title: "",
//     description: "",
//     url: "/",
//     siteName: "",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "",
//     description: "",
//   },
// };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "hsl(0, 0%, 100%)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
