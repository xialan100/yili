import Link from "next/link";
import { Activity, ArrowRight, Layers, Sparkles, Target, Users } from "lucide-react";
import { solutions } from "./data";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

const icons = [Sparkles, Layers, Activity, Users, Target];

export default function SolutionsPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 pt-12 sm:px-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-[#1677ff]">Solutions</p>
        <h1 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">解决方案 · 场景化落地</h1>
        <p className="text-slate-700">
          按照治理、教师发展与学生成长三条主线沉淀场景与交付路径，可单独启用也可与局端平台打通。
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {solutions.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Link
              key={item.slug}
              href={`${assetPrefix}/solutions/${item.slug}/`}
              className="group relative overflow-hidden rounded-2xl border border-[#d9e2f5] bg-white/90 p-6 ring-1 ring-[#e8eefc] shadow-lg shadow-blue-100/60 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#8ab8ff] hover:ring-[#8ab8ff]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(122,216,255,0.1),transparent_50%)] opacity-80" />
              <div className="relative flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1677ff]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-[#0f172a]">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.tagline}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm text-slate-700">{item.summary}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {item.highlights.slice(0, 2).map((h) => (
                  <span key={h.title} className="rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-medium text-[#0f294d] ring-1 ring-[#d9e5ff]">
                    {h.title}
                  </span>
                ))}
              </div>
              <div className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1677ff]">
                查看详情 <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
