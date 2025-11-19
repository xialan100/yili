import Link from "next/link";
import { ArticleForm } from "../_components/article-form";

export default function NewArticlePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Content</p>
          <h1 className="text-2xl font-semibold text-white">新建文章</h1>
        </div>
        <Link
          href="/admin/articles"
          className="text-sm font-semibold text-blue-200 hover:text-blue-100"
        >
          返回列表
        </Link>
      </div>
      <ArticleForm mode="create" />
    </div>
  );
}
