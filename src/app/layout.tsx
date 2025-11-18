import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "屹力 | 教育科技伙伴",
  description:
    "屹力专注教育科技，提供数字化教学与运营解决方案，助力学校与机构提升学习体验与管理效率。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
