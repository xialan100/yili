 "use client";

import { useMemo, useState } from "react";
import { ArrowRight, Phone, Building2, NotebookPen, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    org: "",
    need: "",
  });

  const mailto = useMemo(() => {
    const body = encodeURIComponent(
      `姓名：${form.name}\n手机：${form.phone}\n机构：${form.org}\n需求：${form.need}`,
    );
    return `mailto:bd@yiliedu.com?subject=预约演示信息登记&body=${body}`;
  }, [form]);

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f8ff] text-[#0f172a]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(82,181,255,0.16),transparent_40%),linear-gradient(135deg,#e8f1ff,#f7faff)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#1677ff]/12 via-white/70 to-transparent" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/branding/logo.png"
            alt="Yili Education"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <div>
            <p className="text-sm font-semibold text-[#1677ff]">Yili Education</p>
            <p className="text-base font-semibold text-[#1677ff]">屹力教育</p>
          </div>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#d9e2f5] bg-white px-3 py-2 text-sm font-semibold text-[#0f172a] hover:border-[#8ab8ff]"
        >
          返回首页 <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 sm:px-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4 rounded-2xl bg-white p-6 shadow-lg shadow-blue-100 ring-1 ring-[#e5edff]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#1677ff]">预约演示</p>
          <h1 className="text-3xl font-semibold text-[#0f172a]">登记信息，获取专属演示</h1>
          <p className="text-slate-700">
            留下您的联系方式与需求，我们会在 1 个工作日内回电确认，并提供定制化演示链接。
          </p>
          <div className="grid gap-3 rounded-xl bg-[#f7faff] p-4 ring-1 ring-[#e5edff]">
            <div className="flex items-center gap-3 text-sm text-slate-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#e5edff]">
                <Phone className="h-4 w-4 text-[#1677ff]" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">商务手机</p>
                <p className="font-semibold">186****0000</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-[#f0f6ff] px-4 py-3 text-sm text-[#0f294d] ring-1 ring-[#d9e2f5]">
            或直接发送「学校/机构名称 + 需求场景 + 可回电时间」至邮箱，我们将优先处理。
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-blue-100 ring-1 ring-[#dfe8ff]">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1677ff]">信息登记</p>
            <h2 className="text-2xl font-semibold text-[#0f172a]">提交需求，获取回电</h2>
            <p className="text-sm text-slate-600">我们重视隐私，信息仅用于回访与演示安排。</p>
          </div>
          <div className="mt-6 space-y-4">
            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <User className="h-4 w-4 text-[#1677ff]" /> 您的姓名
              </span>
              <input
                className="w-full rounded-xl border border-[#e5edff] bg-[#f8fbff] px-3 py-3 text-sm text-slate-900 outline-none ring-1 ring-transparent transition focus:border-[#8ab8ff] focus:ring-[#cfe2ff]"
                placeholder="请输入您的姓名"
                value={form.name}
                onChange={onChange("name")}
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Phone className="h-4 w-4 text-[#1677ff]" /> 手机
                </span>
                <input
                  className="w-full rounded-xl border border-[#e5edff] bg-[#f8fbff] px-3 py-3 text-sm text-slate-900 outline-none ring-1 ring-transparent transition focus:border-[#8ab8ff] focus:ring-[#cfe2ff]"
                  placeholder="便于回电"
                  value={form.phone}
                  onChange={onChange("phone")}
                />
              </label>
              <label className="block space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-slate-800">
                  <Building2 className="h-4 w-4 text-[#1677ff]" /> 学校/机构
                </span>
                <input
                  className="w-full rounded-xl border border-[#e5edff] bg-[#f8fbff] px-3 py-3 text-sm text-slate-900 outline-none ring-1 ring-transparent transition focus:border-[#8ab8ff] focus:ring-[#cfe2ff]"
                  placeholder="填写学校/机构名称"
                  value={form.org}
                  onChange={onChange("org")}
                />
              </label>
            </div>
            <label className="block space-y-2">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <NotebookPen className="h-4 w-4 text-[#1677ff]" /> 需求场景
              </span>
              <textarea
                className="h-28 w-full rounded-xl border border-[#e5edff] bg-[#f8fbff] px-3 py-3 text-sm text-slate-900 outline-none ring-1 ring-transparent transition focus:border-[#8ab8ff] focus:ring-[#cfe2ff]"
                placeholder="例如：教师发展、课后服务、行政流程、学生综合评价等"
                value={form.need}
                onChange={onChange("need")}
              />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="hover-glow inline-flex items-center gap-2 rounded-full bg-[#1677ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(22,119,255,0.35)] ring-1 ring-white/40 hover:bg-[#0f5fd8]"
              >
                发送登记邮件
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-slate-500">提交后将自动打开邮件客户端，可直接发送到 bd@yiliedu.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
