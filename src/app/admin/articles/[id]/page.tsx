"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArticleForm, type ArticlePayload } from "../_components/article-form";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export default function EditArticlePage() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : undefined;
  const [initial, setInitial] = useState<ArticlePayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/admin/articles/${id}`);
        if (!res.ok) throw new Error(`加载失败：${res.status}`);
        const json = await res.json();
        setInitial({
          title: json.title ?? "",
          slug: json.slug ?? "",
          summary: json.summary ?? "",
          content: json.content ?? "",
          tags: json.tags ?? [],
          status: json.status ?? "draft",
          publishedAt: json.publishedAt ?? null,
        });
      } catch (err: any) {
        setError(err.message || "加载失败");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Content</p>
          <h1 className="text-2xl font-semibold text-white">编辑文章</h1>
        </div>
        <Link
          href="/admin/articles"
          className="text-sm font-semibold text-blue-200 hover:text-blue-100"
        >
          返回列表
        </Link>
      </div>
      {loading && <div className="text-sm text-slate-300">加载中...</div>}
      {error && <div className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-100">{error}</div>}
      {!loading && !error && initial && <ArticleForm mode="edit" id={id} initial={initial} />}
    </div>
  );
}
