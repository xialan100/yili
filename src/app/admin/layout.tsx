import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/admin", label: "总览" },
  { href: "/admin/articles", label: "文章管理" },
  { href: "/admin/cases", label: "案例管理" },
  { href: "/cases", label: "案例库" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.27),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.2),transparent_35%),linear-gradient(135deg,#0b1223,#0d172e)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:140px_140px]" />
      <div className="mx-auto flex max-w-6xl gap-6 px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <aside className="hidden w-60 flex-shrink-0 flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur sm:flex">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
                Y
              </div>
              <div>
                <p className="text-xs text-slate-300">Yili Digital</p>
                <p className="text-sm font-semibold text-white">管理后台</p>
              </div>
            </div>
          </div>
          <nav className="space-y-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10 hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.12em] text-blue-200">快速链接</p>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <span role="img" aria-label="support">
                📧
              </span>
              support@yiliedu.com
            </div>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
