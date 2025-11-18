"use client";

import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Factory,
  LayoutDashboard,
  LogOut,
  Mail,
  Phone,
  Settings,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "正在交付", value: "28", hint: "本周 +3", icon: <ClipboardCheck className="h-4 w-4" /> },
  { label: "已上线学校", value: "512", hint: "含 48 所区级项目", icon: <Factory className="h-4 w-4" /> },
  { label: "本周线索", value: "36", hint: "待跟进 7 条", icon: <BarChart3 className="h-4 w-4" /> },
];

const leads = [
  { name: "宝山美兰湖中学", contact: "info@meilanhucn.edu", status: "待跟进" },
  { name: "田园外国语中学", contact: "it@tywgy.cn", status: "需求澄清" },
  { name: "福山唐城外国语小学", contact: "contact@fstc.edu", status: "演示已预约" },
  { name: "建平中学", contact: "office@jpzx.cn", status: "招标对接" },
];

const tickets = [
  { title: "嘉定德富幼儿园 · 满意度表单配置", priority: "高", owner: "交付组 A" },
  { title: "七宝实验小学 · 成绩分析导出模板", priority: "中", owner: "产品运营" },
  { title: "前滩学校 · 积分商城新增奖品", priority: "低", owner: "客户成功" },
];

const contents = [
  { title: "案例：张江经典幼儿园", href: "/cases/zhangjiang-kindergarten" },
  { title: "案例：奉贤附属初中", href: "/cases/fengxian-junior" },
  { title: "案例库总览", href: "/cases" },
];

export default function Admin() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.27),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.2),transparent_35%),linear-gradient(135deg,#0b1223,#0d172e)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:140px_140px]" />

      <div className="mx-auto flex max-w-6xl gap-6 px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <aside className="hidden w-60 flex-shrink-0 flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur sm:flex">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">Y</div>
              <div>
                <p className="text-xs text-slate-300">Yili Digital</p>
                <p className="text-sm font-semibold text-white">管理后台</p>
              </div>
            </div>
            <button className="rounded-full bg-white/10 p-2 text-slate-200 ring-1 ring-white/20 hover:bg-white/15">
              <Settings className="h-4 w-4" />
            </button>
          </div>
          <nav className="space-y-1 text-sm">
            <Link className="flex items-center gap-2 rounded-xl px-3 py-2 text-white ring-1 ring-white/15 bg-white/10" href="/admin">
              <LayoutDashboard className="h-4 w-4" /> 总览
            </Link>
            <Link className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" href="/cases">
              <Factory className="h-4 w-4" /> 案例库
            </Link>
            <a className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" href="#leads">
              <Sparkles className="h-4 w-4" /> 商机/线索
            </a>
            <a className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" href="#tickets">
              <ClipboardCheck className="h-4 w-4" /> 交付工单
            </a>
          </nav>
          <div className="mt-auto space-y-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.12em] text-blue-200">快速联系</p>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Mail className="h-4 w-4" /> 内部支持：support@yiliedu.com
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <Phone className="h-4 w-4" /> 交付热线：021-12345678
            </div>
            <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-md shadow-blue-900/30 hover:-translate-y-0.5 hover:bg-blue-700">
              退出登录 <LogOut className="h-4 w-4" />
            </button>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Dashboard</p>
              <h1 className="text-3xl font-semibold text-white">运营总览</h1>
              <p className="text-slate-300">汇总商机、案例和交付进展，便于快速决策。</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:-translate-y-0.5 hover:border-white/50"
              >
                案例库
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 hover:bg-blue-700"
                href="#leads"
              >
                新建线索
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-blue-900/30 backdrop-blur">
                <div className="flex items-center justify-between text-slate-200">
                  <p className="text-sm">{item.label}</p>
                  <div className="rounded-full bg-white/10 p-2">{item.icon}</div>
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-xs text-blue-200">{item.hint}</p>
              </div>
            ))}
          </div>

          <section id="leads" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">线索与商机</h2>
                <p className="text-slate-300 text-sm">优先跟进需演示/投标的学校。</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-blue-700">
                新建跟进 <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {leads.map((lead) => (
                <div key={lead.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                    <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-blue-100 ring-1 ring-white/15">{lead.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200">{lead.contact}</p>
                  <p className="mt-1 text-xs text-slate-400">最近更新：待填</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tickets" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">交付工单</h2>
                <p className="text-slate-300 text-sm">查看当前进行中的配置与变更需求。</p>
              </div>
              <a className="text-sm font-medium text-blue-200 hover:text-white" href="#tickets">
                查看全部
              </a>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {tickets.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-xs text-blue-100">优先级：{item.priority}</p>
                  <p className="text-xs text-slate-300">Owner：{item.owner}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">落地案例 & 物料</h2>
                <p className="text-slate-300 text-sm">直达已有案例详情或下载物料。</p>
              </div>
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/40"
              >
                全部案例
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {contents.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 ring-1 ring-white/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-300">点击查看详情</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-100 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 p-6 text-white shadow-2xl ring-1 ring-white/10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-50">SLA</p>
                <h2 className="text-xl font-semibold">内部支持 & 快速响应</h2>
                <p className="text-sm text-blue-50/90">提交需求后 2 小时响应，配置类 1-2 天交付，定制需求按排期处理。</p>
              </div>
              <div className="flex gap-2">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 hover:-translate-y-0.5"
                  href="mailto:support@yiliedu.com"
                >
                  提交支持单
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-white/30 hover:-translate-y-0.5"
                >
                  返回官网
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
