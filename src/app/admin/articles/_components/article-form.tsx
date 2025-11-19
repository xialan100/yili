"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ArticleStatus = "draft" | "published";

export type ArticlePayload = {
  title: string;
  slug: string;
  summary: string;
  content: string;
  tags: string[];
  status: ArticleStatus;
  publishedAt?: string | null;
};

type ArticleFormProps = {
  mode: "create" | "edit";
  initial?: ArticlePayload;
  id?: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

const empty: ArticlePayload = {
  title: "",
  slug: "",
  summary: "",
  content: "",
  tags: [],
  status: "draft",
  publishedAt: null,
};

export function ArticleForm({ mode, initial, id }: ArticleFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<ArticlePayload>(initial ?? empty);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initial) setForm(initial);
  }, [initial]);

  const onChange = (key: keyof ArticlePayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onTagsChange = (value: string) => {
    const tags = value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    setForm((prev) => ({ ...prev, tags }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...form, publishedAt: form.publishedAt || null };
      const url = mode === "create" ? `${API_BASE}/admin/articles` : `${API_BASE}/admin/articles/${id}`;
      const method = mode === "create" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`保存失败：${res.status}`);
      router.push("/admin/articles");
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
          <span className="text-slate-100">标题 *</span>
          <input
            value={form.title}
            onChange={onChange("title")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="文章标题"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">Slug *</span>
          <input
            value={form.slug}
            onChange={onChange("slug")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="slug，例如 edu-digital-trends"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-200">
        <span className="text-slate-100">摘要 *</span>
        <textarea
          value={form.summary}
          onChange={onChange("summary")}
          className="min-h-[80px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
          placeholder="列表摘要"
        />
      </label>
      <label className="space-y-2 text-sm text-slate-200">
        <span className="text-slate-100">正文 *</span>
        <textarea
          value={form.content}
          onChange={onChange("content")}
          className="min-h-[200px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
          placeholder="支持纯文本/Markdown"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">标签（逗号分隔）</span>
          <input
            value={form.tags.join(", ")}
            onChange={(e) => onTagsChange(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
            placeholder="教育数字化, 趋势"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span className="text-slate-100">发布时间（可选）</span>
          <input
            type="datetime-local"
            value={form.publishedAt ? form.publishedAt.replace("Z", "") : ""}
            onChange={onChange("publishedAt")}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-transparent focus:border-blue-400/50 focus:ring-blue-400/30"
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={form.status}
          onChange={onChange("status")}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-blue-400/50 focus:ring-blue-400/30"
        >
          <option value="draft">草稿</option>
          <option value="published">已发布</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "保存中..." : mode === "create" ? "创建文章" : "保存修改"}
        </button>
      </div>
    </div>
  );
}
