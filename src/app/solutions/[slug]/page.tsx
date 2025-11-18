import Link from "next/link";
import { notFound } from "next/navigation";
import { Activity, ArrowLeft, CheckCircle2, Layers, ShieldCheck, Users } from "lucide-react";
import { solutions } from "../data";

const recommendedRoles = ["校长/管理层", "教务/德育/学工负责人", "教师发展/教研团队", "区级督导/项目负责人"];

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return notFound();

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-18 pt-12 sm:px-10">
      <div className="flex items-center gap-3 text-sm text-[#1677ff]">
        <Link className="inline-flex items-center gap-1 font-medium hover:text-[#0f5fd8]" href="/solutions">
          <ArrowLeft className="h-4 w-4" /> 返回解决方案
        </Link>
        <span>·</span>
        <span className="uppercase tracking-[0.18em]">Solutions</span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[#d9e2f5] bg-white/90 p-8 shadow-xl shadow-blue-100/70 ring-1 ring-[#e8eefc]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.08),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(122,216,255,0.12),transparent_55%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.18em] text-[#1677ff]">Solution</p>
            <h1 className="text-3xl font-semibold text-[#0f172a]">{solution.title}</h1>
            <p className="text-lg text-slate-700">{solution.tagline}</p>
            <p className="text-slate-700">{solution.summary}</p>
            <div className="flex flex-wrap gap-2">
              {solution.metrics.map((m) => (
                <span key={m} className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-medium text-[#0f294d] ring-1 ring-[#d9e5ff]">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-[#e0eaff] bg-[#f8fbff] p-4 shadow-inner shadow-blue-50/70">
            <p className="text-sm font-semibold text-[#0f172a]">我们解决什么</p>
            <div className="space-y-2">
              {solution.highlights.map((h) => (
                <div key={h.title} className="flex gap-3 rounded-xl bg-white p-3 ring-1 ring-[#e8eefc]">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#1677ff]" />
                  <div>
                    <p className="font-semibold text-[#0f172a]">{h.title}</p>
                    <p className="text-sm text-slate-700">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {solution.modules && (
        <div className="overflow-hidden rounded-3xl border border-[#d9e2f5] bg-white/95 shadow-2xl shadow-blue-100/80 ring-1 ring-[#e8eefc]">
          <div className="flex items-center justify-between px-6 py-4 text-sm text-slate-600">
            <span>功能模块地图 · 产品视角</span>
            <span className="text-xs text-slate-500">核心中枢 + 4 大能力域</span>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7faff] via-white to-[#eef3ff] p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(22,119,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(122,216,255,0.1),transparent_45%)]" />
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4 rounded-2xl border border-[#e0eaff] bg-white/95 p-4 shadow-sm shadow-blue-50/50">
                <p className="text-sm uppercase tracking-[0.16em] text-[#1677ff]">核心中枢</p>
                <p className="text-2xl font-semibold text-[#0f172a]">{solution.modules.center}</p>
                <p className="text-sm text-slate-600">围绕中枢搭建标准能力与场景化应用，支撑多角色、多校/局协同与持续迭代。</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {solution.modules.quadrants.map((q) => (
                    <div key={q.title} className="rounded-xl border border-[#e8eefa] bg-[#f8fbff] px-3 py-2 text-sm text-slate-700">
                      <p className="font-semibold text-[#0f172a]">{q.title}</p>
                      <p className="text-xs text-slate-600">关键要素展开见右侧</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {solution.modules.quadrants.map((q) => (
                  <div
                    key={q.title}
                    className="group relative overflow-hidden rounded-2xl border border-[#e0eaff] bg-white/92 p-4 text-slate-800 shadow-md shadow-blue-50/60 transition hover:-translate-y-1 hover:border-[#8ab8ff] hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-white opacity-0 transition group-hover:opacity-100" />
                    <div className="relative flex items-center gap-2 text-[#0f172a]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1677ff]">
                        <span className="text-sm">⇢</span>
                      </div>
                      <p className="text-base font-semibold">{q.title}</p>
                    </div>
                    <ul className="relative mt-3 space-y-1.5 text-sm text-slate-600">
                      {q.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#1677ff]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-[#e8eefc] shadow-md shadow-blue-50/70">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
            <Activity className="h-5 w-5 text-[#1677ff]" />
            落地路径
          </h2>
          <div className="mt-4 space-y-3">
            {solution.steps.map((step, idx) => (
              <div key={step.title} className="flex gap-3 rounded-xl bg-[#f7faff] p-3 ring-1 ring-[#e0eaff] shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8f1ff] text-xs font-semibold text-[#1677ff]">
                  {idx + 1}
                </div>
                <div>
                  <p className="font-semibold text-[#0f172a]">{step.title}</p>
                  <p className="text-sm text-slate-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-[#f7faff] p-6 ring-1 ring-[#e0eaff] shadow-md shadow-blue-50/70">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
            <Layers className="h-5 w-5 text-[#1677ff]" />
            可量化结果
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {solution.metrics.map((m) => (
              <span key={m} className="rounded-full border border-[#d9e5ff] bg-white px-3 py-1 text-sm font-medium text-[#0f294d]">
                {m}
              </span>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-white p-3 text-sm text-slate-700 ring-1 ring-[#e8eefc] shadow-sm">
            以数据指标为抓手，结合复盘节奏，确保方案交付与长期运营成效可度量、可迭代。
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-[#e8eefc] shadow-md shadow-blue-50/70">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-[#0f172a]">
          <Users className="h-5 w-5 text-[#1677ff]" />
          推荐给谁
        </h2>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
          {recommendedRoles.map((r) => (
            <span key={r} className="rounded-full border border-[#d9e5ff] bg-[#f7faff] px-3 py-1 ring-1 ring-[#e0eaff]">
              {r}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-[#1677ff] via-[#2aa1ff] to-[#69e0ff] p-6 text-white shadow-lg shadow-blue-200/70 ring-1 ring-white/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white">承诺</p>
            <h3 className="text-xl font-semibold text-white">共创 · 速交付 · 可持续</h3>
            <p className="mt-2 text-sm text-white/90">
              现场共创梳理 → 低代码快交付 → 数据贯通与预警 → 陪跑优化；每一步强调透明沟通与教育友好。
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm ring-1 ring-white/30">
            <ShieldCheck className="h-4 w-4" /> 可信交付 · 数据安全 · 教育友好
          </div>
        </div>
      </div>
    </section>
  );
}
