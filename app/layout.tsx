import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Library",
  description: "个人阅读记录与读书笔记",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">My Library</Link>
          <nav className="top-nav" aria-label="主要导航">
            <Link href="/">书架</Link>
            <Link href="/books/new">添加书籍</Link>
            <Link href="/unlock">访问设置</Link>
          </nav>
        </header>
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
