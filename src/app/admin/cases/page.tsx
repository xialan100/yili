"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type CaseItem = {
  id: number;
  name: string;
  slug: string;
  segment: string;
  result: string;
  basics?: string[];
  background?: string;
  solutions?: string[];
  effects?: string[];
};

const segments = ["全部", "幼儿园", "小学/九年制", "初中", "高中", "职业高中"] as const;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export default function CaseListPage() {
  const [data, setData] = useState<CaseItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [segFilter, setSegFilter] = useState<(typeof segments)[number]>("全部");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/admin/cases`);
        const json = await res.json();
        setData(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Failed to load cases", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = useMemo(() => {
    const kw = query.trim().toLowerCase();
    return data.filter((item) => {
      const matchSeg = segFilter === "全部" || item.segment === segFilter;
      const matchKw =
        !kw ||
        item.name.toLowerCase().includes(kw) ||
        item.slug.toLowerCase().includes(kw) ||
        item.result.toLowerCase().includes(kw);
      return matchSeg && matchKw;
    });
  }, [data, query, segFilter]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Content</p>
          <h1 className="text-2xl font-semibold text-white">案例管理</h1>
          <p className="text-sm text-slate-300">按学段分组的案例库，支持搜索与编辑。</p>
        </div>
        <Link
          href="/admin/cases/new"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:-translate-y-0.5"
        >
          新建案例
        </Link>
      </header>

      <div className="flex flex-wrap gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索名称/slug/摘要"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-blue-400/50 focus:ring-blue-400/30 sm:w-72"
        />
        <select
          value={segFilter}
          onChange={(e) => setSegFilter(e.target.value as typeof segments[number])}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-blue-400/50 focus:ring-blue-400/30"
        >
          {segments.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10">
        <div className="grid grid-cols-12 gap-3 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-slate-300">
          <span className="col-span-4">名称</span>
          <span className="col-span-2">学段</span>
          <span className="col-span-4">摘要</span>
          <span className="col-span-2 text-right">操作</span>
        </div>
        {loading ? (
          <div className="p-4 text-sm text-slate-300">加载中...</div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-sm text-slate-300">暂无数据</div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-3 border-t border-white/5 px-4 py-3 text-sm text-slate-100">
              <div className="col-span-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">Slug: {item.slug}</p>
              </div>
              <div className="col-span-2 text-slate-200">{item.segment}</div>
              <div className="col-span-4 text-slate-200 line-clamp-2">{item.result}</div>
              <div className="col-span-2 flex items-center justify-end gap-2 text-xs">
                <Link href={`/admin/cases/${item.id}`} className="font-semibold text-blue-300 hover:text-blue-200">
                  编辑
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
