import { ExternalLink, Factory } from "lucide-react";
import { allCases, CaseSummary } from "./case-list";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

const segments: CaseSummary["segment"][] = ["幼儿园", "小学/九年制", "初中", "高中", "职业高中"];

export default function CasesIndex() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f8ff] text-[#0f172a]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(122,216,255,0.14),transparent_40%),linear-gradient(135deg,#e8f1ff,#f7faff)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-[#1677ff]/10 via-white/70 to-transparent" />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-14 pt-12 sm:px-10 sm:gap-10">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-[#1677ff]">Case Library</p>
          <h1 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">用户案例 · 全部</h1>
          <p className="text-slate-700">按学段分组查看，点击可进入详细案例页面。</p>
        </header>

        <div className="grid gap-8">
          {segments.map((segment) => {
            const grouped = allCases.filter((c) => c.segment === segment);
            if (grouped.length === 0) return null;
            return (
              <div key={segment} className="space-y-4 rounded-3xl border border-[#d9e2f5] bg-white/90 p-5 shadow-lg shadow-blue-50/60 ring-1 ring-[#e8eefc]">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold text-[#0f172a]">{segment}案例</h2>
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-[#1677ff]/40 via-[#8ab8ff]/20 to-transparent sm:block" />
                </div>
                <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
                  {grouped.map((project) => (
                    <a
                      key={project.slug}
                      href={`${assetPrefix}/cases/${project.slug}/`}
                      className="group block rounded-2xl border border-[#e0eaff] bg-[#f7faff] p-4 ring-1 ring-[#e8eefc] transition hover:-translate-y-1 hover:border-[#8ab8ff] hover:ring-[#8ab8ff] hover:shadow-lg hover:shadow-blue-100/60"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1677ff] ring-1 ring-[#d9e2f5]">
                          <Factory className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0f172a]">{project.name}</h3>
                          <p className="text-xs text-slate-600">{segment}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-700">{project.result}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1677ff] group-hover:text-[#0f5fd8]">
                        查看详情 <ExternalLink className="h-4 w-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
