import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chuyên gia Bảo - Tư vấn Terraco Chuyên sâu",
  description: "Chuyên gia Bảo với nhiều năm kinh nghiệm trong lĩnh vực vật liệu xây dựng, đặc biệt am hiểu sâu về các sản phẩm Terraco và ứng dụng thực tế tại Việt Nam.",
  keywords: ["Chuyên gia Bảo", "Terraco", "Tư vấn xây dựng", "Vật liệu hoàn thiện", "Sơn cao cấp", "Kiến trúc", "Xây dựng", "Chuyên gia Terraco"],
  authors: [{ name: "Chuyên gia Bảo" }],
  openGraph: {
    title: "Chuyên gia Bảo - Tư vấn Terraco Chuyên sâu",
    description: "Chuyên gia hàng đầu về các sản phẩm Terraco tại Việt Nam",
    url: "https://chuyengiabao.vn",
    siteName: "Chuyên gia Bảo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chuyên gia Bảo - Tư vấn Terraco Chuyên sâu",
    description: "Chuyên gia hàng đầu về các sản phẩm Terraco tại Việt Nam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
