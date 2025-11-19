"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const segments = ["幼儿园", "小学/九年制", "初中", "高中", "职业高中"] as const;

export type CasePayload = {
  name: string;
  slug: string;
  segment: (typeof segments)[number];
  result: string;
  basics: string[];
  background: string;
  solutions: string[];
  effects: string[];
};

type Props = {
  mode: "create" | "edit";
  id?: number;
  initial?: CasePayload;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

const empty: CasePayload = {
  name: "",
  slug: "",
  segment: "幼儿园",
  result: "",
  basics: [],
  background: "",
  solutions: [],
  effects: [],
};

export function CaseForm({ mode, id, initial }: Props) {
  const [form, setForm] = useState<CasePayload>(initial ?? empty);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  const onChange = (key: keyof CasePayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onListChange = (key: "basics" | "solutions" | "effects") => (value: string) => {
    const list = value
      .split("\n")
      .map((v) => v.trim())
      .filter(Boolean);
    setForm((prev) => ({ ...prev, [key]: list }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = mode === "create" ? `${API_BASE}/admin/cases` : `${API_BASE}/admin/cases/${id}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`保存失败：${res.status}`);
      router.push("/admin/cases");
    } catch (err: any) {
      setError(err.message || "保存失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      {error && <div className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-100">{error}</div>}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">案例名称 *</span>
          <input
            value={form.name}
            onChange={onChange("name")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="例如 上海市张江经典幼儿园"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">Slug *</span>
          <input
            value={form.slug}
            onChange={onChange("slug")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="zhangjiang-kindergarten"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">学段 *</span>
          <select
            value={form.segment}
            onChange={onChange("segment")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
          >
            {segments.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">摘要 *</span>
          <input
            value={form.result}
            onChange={onChange("result")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="列表/首页展示的成果摘要"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        <span className="text-slate-100">背景 *</span>
        <textarea
          value={form.background}
          onChange={onChange("background")}
          className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
          placeholder="痛点/背景描述"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="space-y-2 text-sm text-slate-200 sm:col-span-1">
          <span className="text-slate-100">基本信息（逐行）</span>
          <textarea
            value={form.basics.join("\n")}
            onChange={(e) => onListChange("basics")(e.target.value)}
            className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="学校类型：幼儿园\n合作时间：2024年11月5日"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200 sm:col-span-1">
          <span className="text-slate-100">方案要点（逐行）</span>
          <textarea
            value={form.solutions.join("\n")}
            onChange={(e) => onListChange("solutions")(e.target.value)}
            className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="方案要点一\n方案要点二"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200 sm:col-span-1">
          <span className="text-slate-100">成效（逐行）</span>
          <textarea
            value={form.effects.join("\n")}
            onChange={(e) => onListChange("effects")(e.target.value)}
            className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="成效一\n成效二"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "保存中..." : mode === "create" ? "创建案例" : "保存修改"}
        </button>
      </div>
    </div>
  );
}
