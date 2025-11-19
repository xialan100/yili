"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type ArticleStatus = "draft" | "published";

type Article = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  status: ArticleStatus;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export default function ArticleListPage() {
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | ArticleStatus>("all");

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/admin/articles`);
        const json = await res.json();
        setData(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Failed to load articles", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchStatus = status === "all" || item.status === status;
      const keywords = query.trim().toLowerCase();
      const matchText =
        !keywords ||
        item.title.toLowerCase().includes(keywords) ||
        item.slug.toLowerCase().includes(keywords) ||
        item.tags?.some((t) => t.toLowerCase().includes(keywords));
      return matchStatus && matchText;
    });
  }, [data, query, status]);

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Content</p>
          <h1 className="text-2xl font-semibold text-white">文章管理</h1>
          <p className="text-sm text-slate-300">支持搜索、筛选，点击可进入编辑。</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 hover:-translate-y-0.5"
        >
          新建文章
        </Link>
      </header>

      <div className="flex flex-wrap gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索标题/slug/标签"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-blue-400/50 focus:ring-blue-400/30 sm:w-72"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-blue-400/50 focus:ring-blue-400/30"
        >
          <option value="all">全部状态</option>
          <option value="draft">草稿</option>
          <option value="published">已发布</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 ring-1 ring-white/10">
        <div className="grid grid-cols-12 gap-3 border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.14em] text-slate-300">
          <span className="col-span-4">标题</span>
          <span className="col-span-2">Slug</span>
          <span className="col-span-2">状态</span>
          <span className="col-span-3">标签</span>
          <span className="col-span-1 text-right">操作</span>
        </div>
        {loading ? (
          <div className="p-4 text-sm text-slate-300">加载中...</div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-sm text-slate-300">暂无数据</div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-3 border-t border-white/5 px-4 py-3 text-sm text-slate-100">
              <div className="col-span-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400 line-clamp-1">{item.summary}</p>
              </div>
              <div className="col-span-2 text-slate-300">{item.slug}</div>
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${item.status === "published" ? "bg-green-500/20 text-green-200" : "bg-slate-500/20 text-slate-200"}`}
                >
                  {item.status === "published" ? "已发布" : "草稿"}
                </span>
              </div>
              <div className="col-span-3 flex flex-wrap gap-1 text-xs text-slate-300">
                {item.tags?.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <Link
                  href={`/admin/articles/${item.id}`}
                  className="text-xs font-semibold text-blue-300 hover:text-blue-200"
                >
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
