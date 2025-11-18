import { ExternalLink, Factory } from "lucide-react";
import { allCases, CaseSummary } from "./case-list";

const segments: CaseSummary["segment"][] = ["幼儿园", "小学/九年制", "初中", "高中", "职业高中"];

export default function CasesIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.27),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.2),transparent_35%),linear-gradient(135deg,#0b1223,#0d172e)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:140px_140px]" />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-16 sm:px-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Case Library</p>
          <h1 className="text-3xl font-semibold text-white">用户案例 · 全部</h1>
          <p className="text-slate-300">按学段分组查看，点击可进入详细案例页面。</p>
        </header>

        <div className="grid gap-8">
          {segments.map((segment) => {
            const grouped = allCases.filter((c) => c.segment === segment);
            if (grouped.length === 0) return null;
            return (
              <div key={segment} className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white">{segment}案例</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/10 to-transparent ml-4" />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {grouped.map((project) => (
                    <a
                      key={project.slug}
                      href={`/cases/${project.slug}`}
                      className="group block rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                          <Factory className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                          <p className="text-xs text-slate-200">{segment}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-100">{project.result}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-100 group-hover:text-white">
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
