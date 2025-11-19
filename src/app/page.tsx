import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Activity,
  BarChart3,
  ClipboardCheck,
  Factory,
  GraduationCap,
  Globe,
  Layers,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import fs from "fs";
import path from "path";
import { allCases } from "./cases/case-list";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

const ctas = [
  { label: "了解解决方案", href: "#solutions" },
  { label: "查看客户案例", href: "#cases" },
  { label: "获取产品演示", href: "#jobs" },
];

const values = [
  "以用户为中心：产品源于场景，服务深入一线",
  "长期主义：构建可持续发展的合作生态",
  "真实透明：坦诚沟通，信任为本",
  "敬畏教育：尊重每一位教育从业者的价值",
];

const logosDir = path.join(process.cwd(), "public/logos/学校logo_图片");
const uniqueLogoFiles = Array.from(
  new Set(
    fs
      .readdirSync(logosDir)
      .filter((f) => f.endsWith(".png") || f.endsWith(".svg")),
  ),
).sort();

const qualifications = [
  "国家高新技术企业",
  "钉钉全国十佳服务商",
  "阿里云教育行业核心合作伙伴",
  "辰知教务系统核心生态伙伴",
  "上海第二工业大学研究生校外实践基地",
];

const teamHighlights = [
  "“教育人 + 技术人”的复合型队伍，兼具行业理解力与产品创新力",
  "超50%成员硕士及以上，涵盖教育学、信息工程、公共管理、心理学等",
  "管理团队平均5年以上教育数字化经验，已交付1500+教育应用模块",
  "成员普遍具备服务意识、学习能力和跨界协作力，懂教育、能落地、敢创新",
];

const solutionDimensions = [
  {
    slug: "governance",
    title: "组织治理数字化",
    detail: "解决学校/教育局行政效率、事务流程与数据分析能力问题。",
  },
  {
    slug: "teacher-growth",
    title: "教师发展数字化",
    detail: "聚焦成长路径、教学成果记录与专业发展支持。",
  },
  {
    slug: "student-support",
    title: "学生成长数字化",
    detail: "以学生为中心的全息画像、过程评价与综合素质发展支持。",
  },
];

const scenarioSolutions = [
  {
    slug: "admin-digital",
    title: "行政数字化",
    detail: "校务办公、用章管理、请假用餐、任务流转，构建事务流转+数据归集的协同平台。",
  },
  {
    slug: "teacher-portfolio",
    title: "教师画像与评价",
    detail: "成长计划-过程记录-成果归档-年度评价闭环，支持职称申报与激励认定。",
  },
  {
    slug: "student-support-eval",
    title: "学生支持与综合评价",
    detail: "学生事务子系统、争章平台、成长档案、心理支持，支撑德育与行为治理。",
  },
  {
    slug: "home-school",
    title: "家校协同与信息服务",
    detail: "教学事务通知、家长答复、满意度调研、任务交互，提升沟通效率与数据完整度。",
  },
  {
    slug: "campus-culture",
    title: "校园文化与活动建设",
    detail: "德育积分、值日安排、社团申报、评优评先等模块化活动管理。",
  },
  {
    slug: "data-analytics",
    title: "数据可视化与分析",
    detail: "校长驾驶舱、学情预警、指标趋势，服务校内决策与区级督导。",
  },
];

const productMatrix = [
  {
    name: "教育治理中台",
    detail: "统一身份/权限、流程编排、数据汇聚、指标看板，支撑学校与教育局协同治理。",
  },
  {
    name: "教师发展平台",
    detail: "研修、成长档案、成果沉淀、职称映射，完整的发展闭环与量化评价。",
  },
  {
    name: "学生成长与支持平台",
    detail: "全息画像、争章与素养评价、行为记录与预警、心理支持，助力全过程育人。",
  },
  {
    name: "家校协同与服务",
    detail: "通知、互动、反馈、调研一体化，沉淀过程数据，提升沟通体验与决策依据。",
  },
];

const delivery = [
  {
    title: "共创梳理",
    desc: "沉浸式访谈和流程盘点，明确优先级与可落地路径。",
    icon: <ClipboardCheck className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "低代码快速实现",
    desc: "标准模块+灵活编排，兼顾上线速度与长期可维护性。",
    icon: <Workflow className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "数据贯通与可视化",
    desc: "数据模型统一，决策驾驶舱与预警看板即开即用。",
    icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
  },
  {
    title: "运营陪伴与优化",
    desc: "上线陪跑、季度复盘与增量迭代，确保业务持续生长。",
    icon: <Rocket className="h-5 w-5 text-blue-600" />,
  },
];

const segments = ["幼儿园", "小学/九年制", "初中", "高中", "职业高中"] as const;

const featuredCases = segments
  .map((segment) => ({
    segment,
    items: allCases.filter((c) => c.segment === segment).slice(0, 2),
  }))
  .filter((g) => g.items.length > 0)
  .slice(0, 3);

const testimonials = [
  {
    title: "张江经典幼儿园",
    quote: "公示、排班、考勤线上化，跨园区协同效率明显提升，调班留痕可追溯。",
    role: "园长反馈",
  },
  {
    title: "嘉定德富幼儿园",
    quote: "巡查与家长满意度收集标准化，资料沉淀易查可用，数据驱动改进更安心。",
    role: "行政管理",
  },
];

const jobs = [
  "产品经理（教育场景）",
  "前端/后端工程师（Vue/Java）",
  "项目交付顾问（学校方向）",
  "教研/内容运营专员",
];

export default function Home() {
  const logoRows = Array.from({ length: 3 }).map((_, row) => {
    // 通过步进重排，避免同屏重复露出
    const size = uniqueLogoFiles.length;
    const step = 7 + row * 3;
    const arranged = Array.from({ length: size }, (_, i) => uniqueLogoFiles[(i * step) % size]);
    const track = [...arranged, ...arranged].map((file) => `${assetPrefix}/logos/学校logo_图片/${file}`);
    const base = 260;
    return { track, speed: row === 1 ? base + 60 : base };
  });

  return (
    <div className="relative overflow-hidden bg-[#f5f8ff] text-[#0f172a]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(82,181,255,0.16),transparent_40%),linear-gradient(135deg,#e8f1ff,#f7faff)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-[#1677ff]/12 via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(22,119,255,0.06)_1px,transparent_1px),linear-gradient(60deg,rgba(22,119,255,0.06)_1px,transparent_1px)] bg-[length:140px_140px]" />
      <div className="pointer-events-none absolute -left-28 top-10 -z-10 h-72 w-72 rounded-full bg-[#8cdfff] opacity-40 blur-3xl ani-blob-slow" />
      <div className="pointer-events-none absolute -right-24 top-32 -z-10 h-64 w-64 rounded-full bg-[#1677ff] opacity-35 blur-3xl ani-blob-slower" />
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-12 lg:px-16">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={`${assetPrefix}/branding/logo.png`}
            alt="Yili Education"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <div className="w-[180px] leading-tight">
            <p className="text-base font-semibold text-[#1677ff]">Yili Education</p>
            <p className="text-base font-semibold text-[#1677ff]">屹力教育</p>
          </div>
        </div>
        <nav className="hidden items-center gap-3 text-sm text-slate-700 sm:flex">
          <Link className="rounded-full px-3 py-1.5 hover:bg-blue-50/80 hover:text-[#0f172a]" href={`${assetPrefix}/solutions/`}>
            解决方案
          </Link>
          <a className="rounded-full px-3 py-1.5 hover:bg-blue-50/80 hover:text-[#0f172a]" href="#cases">案例</a>
          <a className="rounded-full px-3 py-1.5 hover:bg-blue-50/80 hover:text-[#0f172a]" href="#team">团队</a>
          <a className="rounded-full px-3 py-1.5 hover:bg-blue-50/80 hover:text-[#0f172a]" href="#jobs">加入我们</a>
        </nav>
      </header>
      <main className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-6 sm:px-12 lg:px-16 lg:gap-28 xl:gap-32">
        <section className="flex flex-col gap-8 sm:gap-10">
          <div className="space-y-6 sm:space-y-8">
              <span className="badge-pulse inline-flex items-center gap-2 rounded-full bg-[#e8f1ff] px-4 py-2 text-xs sm:text-sm font-medium text-[#0f294d] ring-1 ring-[#c7d8ff] shadow-sm">
                <Sparkles className="float-soft h-4 w-4 text-[#1677ff]" />
                教育数字化，不止于系统，而是场景
              </span>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#1677ff] sm:text-sm">AI + Low-code + Data</p>
              <h1 className="text-[28px] font-semibold leading-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
                面向基础教育的场景化数字化伙伴
              </h1>
              <p className="max-w-2xl text-[14px] leading-6 text-slate-700 sm:text-[15px] sm:leading-7">
                服务全国500+学校，深度参与强校工程、课后服务、教师发展等核心场景。以低代码、AI 与数据驱动，打造高效、协同、有温度的教育治理生态。
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {ctas.map((cta, index) => {
                const primary = index === 0;
                return (
                  <Link
                    key={cta.label}
                    className={`hover-glow inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition sm:w-auto ${primary ? "bg-[#1677ff] text-white tracking-wide shadow-lg shadow-[rgba(22,119,255,0.35)] hover:bg-[#0f5fd8]" : "border border-[#d9e2f5] bg-white text-[#0f172a] hover:border-[#8ab8ff] hover:bg-blue-50"}`}
                    href={cta.href}
                  >
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                );
              })}
              <Link
                href="/cases"
                className="hover-glow inline-flex items-center gap-2 rounded-full border border-[#d9e2f5] bg-white px-5 py-3 text-sm font-medium text-[#0f172a] backdrop-blur transition hover:border-[#8ab8ff] hover:bg-blue-50"
              >
                查看案例集
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{ label: "已服务学校", value: "500+" }, { label: "教育应用模块", value: "1500+" }, { label: "上线周期", value: "最快3周" }].map((item) => (
                  <div
                    key={item.label}
                    className="card-float rounded-2xl border border-[#d9e2f5] bg-white/90 p-5 ring-1 ring-[#eef3ff] shadow-lg shadow-blue-100/60 backdrop-blur-sm"
                  >
                    <p className="text-sm text-slate-600">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-[#0f172a]">{item.value}</p>
                  </div>
                ))}
              </div>
          </div>
          <div className="grid gap-6 rounded-[30px] bg-white/90 p-6 shadow-2xl shadow-blue-100/60 ring-1 ring-[#d9e2f5] lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="relative overflow-visible rounded-3xl bg-white px-6 py-8 text-[#0f172a]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f1ff] px-3 py-1 text-xs font-semibold text-[#0f294d] ring-1 ring-[#c7d8ff]">
                    <Sparkles className="h-4 w-4" /> 定位
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f0f6ff] px-3 py-1 text-xs font-medium text-[#0f294d] ring-1 ring-[#d9e5ff]">
                    基础教育 · 场景驱动 · 数据智能
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">教育数字化场景专家</p>
                  <h3 className="text-2xl font-semibold text-[#0f172a]">让系统贴场景，让数据有温度</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {solutionDimensions.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-[#f7faff] p-4 ring-1 ring-[#e0eaff] shadow-sm shadow-blue-50/60">
                      <div className="flex items-center gap-3">
                        <span className="float-soft flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f1ff]">
                          <Layers className="h-5 w-5 text-[#1677ff]" />
                        </span>
                        <div>
                          <p className="font-medium text-[#0f172a]">{item.title}</p>
                          <p className="text-sm text-slate-600">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-[#1677ff] via-[#2aa1ff] to-[#69e0ff] p-8 text-white shadow-2xl shadow-blue-200 ring-1 ring-white/50">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(60deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[length:180px_180px] opacity-35" />
              <div className="relative flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-50">交付主张</p>
                    <h3 className="text-2xl font-semibold text-white">从规划到运营的端到端交付</h3>
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30">
                    数据透明 · 可视化 · 可追溯
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {delivery.map((step) => (
                    <div key={step.title} className="hover-glow rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/20">
                      <div className="flex items-center gap-3">
                        <span className="float-soft flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                          {step.icon}
                        </span>
                        <div>
                          <p className="font-semibold text-white">{step.title}</p>
                          <p className="text-xs text-blue-50/90">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-shell grid gap-5 bg-white p-5 text-[#0f172a] md:grid-cols-3 md:items-center sm:gap-6 sm:p-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-[#1677ff]">Why Yili</p>
            <h2 className="text-2xl font-semibold text-[#0f172a]">不止做系统，更做教育治理的可靠伙伴</h2>
            <p className="text-slate-700">
              从场景共创到数据运营，提供“快上线、可迭代、能落地”的全链路能力，确保交付速度与长期价值并存。
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { label: "场景深度", value: "强校工程/课后服务/教师发展等高频场景沉淀" },
              { label: "技术底座", value: "低代码 + AI + 数据中台，标准化与定制化兼容" },
              { label: "交付稳健", value: "最快3周上线，持续陪伴与季度复盘机制" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-2xl bg-[#f7faff] p-4 ring-1 ring-[#e0eaff]">
                <Activity className="mt-1 h-5 w-5 text-[#1677ff]" />
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">{item.label}</p>
                  <p className="text-sm text-slate-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ani-shimmer rounded-2xl bg-gradient-to-br from-[#1677ff] via-[#2aa1ff] to-[#69e0ff] p-6 text-white shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-50">承诺</p>
            <h3 className="mt-2 text-xl font-semibold text-white">共创、速交付、可持续</h3>
            <p className="mt-3 text-sm text-blue-50/90">
              现场共创梳理 → 低代码快交付 → 数据贯通与预警 → 陪跑优化；每一步都强调透明沟通与教育温度。
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> 可信交付 · 数据安全 · 教育友好
            </div>
          </div>
        </section>

        <section id="team" className="section-shell grid gap-6 bg-white/90 p-5 md:grid-cols-[1.1fr_0.9fr] sm:gap-8 sm:p-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">关于屹力教育</h2>
            <p className="text-lg text-slate-700">
              上海屹力教育科技有限公司（Yili Digital），成立于2017年，专注基础教育数字化转型。我们聚焦教育管理场景，通过流程重塑与数据智能，打造可持续、可迭代的教育数字化解决方案。
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">使命 · 愿景 · 价值观</p>
              <p className="text-slate-700">使命：用科技推动教育治理进步，做最有温度的教育科技公司。</p>
              <p className="text-slate-700">愿景：成为中国基础教育领域最值得信赖、最具创新力的数字化合作伙伴。</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {values.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-blue-600" />
                    <p className="text-sm text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl bg-white p-6 text-[#0f172a] shadow-lg ring-1 ring-[#d9e2f5]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">资质与合作</p>
                <h3 className="text-2xl font-semibold text-[#0f172a]">行业认可</h3>
              </div>
              <div className="rounded-full bg-[#e8f1ff] px-3 py-1 text-xs font-medium text-[#0f294d] ring-1 ring-[#c7d8ff]">
                真实落地·持续服务
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-700">
              {qualifications.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#1677ff]" />
                  <p>{item}</p>
                </div>
              ))}
              <p className="text-slate-700">
                以行业认可与真实经验为基础，推进产教融合与生态协同，为客户提供持续服务与信任保障。
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell space-y-6 bg-white p-5 text-[#0f172a] sm:space-y-8 sm:p-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#0f172a]">我们的团队</h2>
            <p className="text-slate-700">“教育人 + 技术人”的复合型队伍，兼具行业理解力与产品创新力。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {teamHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-[#f7faff] p-4 ring-1 ring-[#e0eaff]">
                <Users className="mt-1 h-5 w-5 text-[#1677ff]" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell space-y-6 bg-white px-5 py-6 text-[#0f172a] sm:space-y-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-[#1677ff]">Product Matrix</p>
              <h2 className="text-3xl font-semibold text-[#0f172a]">产品矩阵 · 兼顾标准化与定制化</h2>
              <p className="text-slate-700">所有模块可单校落地，也可并入区域平台，保持统一架构与差异化需求并存。</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f1ff] px-4 py-2 text-xs font-medium text-[#0f294d] ring-1 ring-[#c7d8ff] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#1677ff]" /> 低代码 + AI + 数据中台
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {productMatrix.map((item) => (
              <div key={item.name} className="rounded-2xl bg-[#f7faff] p-5 ring-1 ring-[#e0eaff]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1677ff]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f172a]">{item.name}</h3>
                    <p className="text-sm text-slate-700">可按需选配 · 快速上线</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="space-y-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-slate-900">解决方案</h2>
              <p className="text-slate-700">
                以“人本视角+场景驱动+数据联通”为核心框架，兼顾标准化与定制化。
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-full bg-[#f0f6ff] px-3 py-2 text-blue-700 ring-1 ring-[#d9e5ff]">
                <CheckCircle2 className="h-4 w-4" /> 可独立部署或区域级集成
              </div>
              <Link
                href="/solutions"
                className="hover-glow inline-flex items-center gap-2 rounded-full border border-[#d9e2f5] bg-white px-3 py-2 font-medium text-[#0f172a] hover:border-[#8ab8ff]"
              >
                查看全部方案 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {solutionDimensions.map((item) => (
              <Link
                key={item.title}
                href={`/solutions/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-[#8ab8ff]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">架构维度</p>
                  </div>
                </div>
                <p className="relative mt-4 text-slate-700">{item.detail}</p>
              </Link>
            ))}
          </div>
            <div className="grid gap-6 md:grid-cols-3">
              {scenarioSolutions.map((item) => (
                <Link
                  key={item.title}
                  href={`/solutions/${item.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-[#8ab8ff]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <Layers className="float-soft mt-1 h-10 w-10 text-blue-500" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </section>

        <section className="section-shell space-y-6 bg-white p-5 text-[#0f172a] backdrop-blur sm:space-y-8 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-[#0f172a]">交付方法论</h2>
              <p className="text-slate-700">从需求洞察到运营陪跑，确保每一步可验证、可追踪、能复盘。</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f1ff] px-4 py-2 text-xs font-semibold text-[#0f294d] ring-1 ring-[#c7d8ff]">
              <Globe className="h-4 w-4 text-[#1677ff]" /> 局校协同 · 多校复制
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {delivery.map((item) => (
              <div key={item.title} className="hover-glow flex flex-col gap-3 rounded-2xl bg-[#f7faff] p-4 ring-1 ring-[#e0eaff] shadow-lg shadow-blue-100">
                <div className="float-soft flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1677ff]">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-[#0f172a]">{item.title}</p>
                  <p className="text-sm text-slate-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="section-shell space-y-6 bg-white p-5 text-[#0f172a] sm:space-y-8 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-[#0f172a]">用户案例与证言</h2>
              <p className="text-slate-700">精选案例按学段展示，可点击查看细节，更多案例见“全部案例”。</p>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9e2f5] bg-white px-4 py-2 text-sm font-semibold text-[#0f172a] ring-1 ring-[#eef3ff] hover:-translate-y-0.5 hover:border-[#8ab8ff]"
            >
              全部案例库
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 md:gap-4 md:grid-cols-3">
            {featuredCases
              .flatMap((group) => group.items.map((item) => ({ ...item, segment: group.segment })))
              .slice(0, 6)
              .map((project) => (
                <a
                  key={project.name}
                  href={`${assetPrefix}/cases/${project.slug}/`}
                  className="group block h-full rounded-2xl border border-[#d9e2f5] bg-white p-4 sm:p-6 shadow-sm shadow-blue-100 ring-1 ring-[#eef3ff] transition hover:-translate-y-1 hover:border-[#8ab8ff] hover:ring-[#8ab8ff]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1677ff]">
                      <Factory className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0f172a]">{project.name}</h3>
                      <p className="text-xs text-slate-600">{project.segment}</p>
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm text-slate-700">{project.result}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#1677ff] group-hover:text-[#0f5fd8]">
                    查看详情 <ExternalLink className="h-4 w-4" />
                  </div>
                </a>
              ))}
          </div>
          <div className="grid gap-4 rounded-2xl border border-[#d9e2f5] bg-[#f7faff] p-6 ring-1 ring-[#e0eaff]">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1677ff]">客户声音</p>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] text-[#0f172a] ring-1 ring-[#d9e2f5]">节选</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.title} className="flex h-full flex-col gap-2 rounded-xl bg-white p-4 ring-1 ring-[#d9e2f5]">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#0f172a]">{item.title}</p>
                    <span className="rounded-full bg-[#f0f6ff] px-2 py-1 text-[11px] text-[#0f294d] ring-1 ring-[#c7d8ff]">{item.role}</span>
                  </div>
                  <p className="text-sm text-slate-700">“{item.quote}”</p>
                </div>
              ))}
            </div>
          </div>
            <div className="space-y-3 rounded-2xl bg-white p-4 ring-1 ring-[#e8eefc] shadow-sm shadow-blue-50/60">
            <p className="text-sm font-semibold text-[#0f172a]">部分合作客户</p>
            <div className="space-y-2">
              {logoRows.map(({ track, speed }, row) => (
                <div key={row} className="group/logo-row relative h-24 overflow-hidden rounded-2xl bg-gradient-to-r from-white/90 via-[#f7faff] to-white/90 ring-1 ring-[#e8eefc] backdrop-blur sm:h-28">
                  <div
                    className="flex w-max gap-1 animate-[logoRow_var(--d)_linear_infinite] group-hover/logo-row:[animation-play-state:paused]"
                    style={{ "--d": `${speed}s` } as CSSProperties}
                  >
                    {track.map((logo, idx) => (
                      <div
                        key={`${logo}-${idx}`}
                        className="group flex h-20 w-20 items-center justify-center rounded-2xl border border-white/50 bg-white/85 px-2 shadow-lg shadow-blue-50/60 backdrop-blur-sm transition hover:-translate-y-1.5 hover:border-[#8ab8ff] hover:shadow-blue-100 sm:h-24 sm:w-24"
                      >
                        <Image
                          src={logo}
                          alt={logo}
                          width={140}
                          height={140}
                          className="h-full w-full object-contain transition group-hover:scale-[1.05]"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="jobs" className="section-shell grid gap-6 bg-white/90 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">加入我们</h2>
            <p className="text-lg text-slate-700">
              成为教育变革的推动者。我们相信科技能提升效率，也能赋予教育以温度。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "有挑战、有价值的工作任务",
                "教育行业专家陪伴成长",
                "扁平化管理，快速决策与反馈",
                "技术+场景双驱动的项目经验",
                "内部成长计划、岗位轮岗与学习机会",
              ].map((perk) => (
                <div key={perk} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                  <Sparkles className="mt-1 h-4 w-4 text-blue-600" />
                  <p className="text-sm text-slate-800">{perk}</p>
                </div>
              ))}
            </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">招聘岗位（部分）</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {jobs.map((job) => (
                <div key={job} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-slate-100">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                    <p className="text-slate-800">{job}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/40 bg-gradient-to-br from-[#1677ff] via-[#2aa1ff] to-[#69e0ff] p-6 text-white shadow-xl shadow-blue-200/70 ring-1 ring-white/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/80">投递与办公室</p>
                <h3 className="text-2xl font-semibold text-white">加入屹力</h3>
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/25">
                上海 · 宝山区
              </div>
            </div>
            <div className="space-y-4 text-sm text-blue-50">
              <div className="flex items-center gap-3 rounded-xl bg-white/12 p-3 ring-1 ring-white/25">
                <Mail className="h-5 w-5 text-white" />
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/80">简历投递</p>
                  <p className="text-base font-semibold text-white">hr@yiliedu.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/12 p-3 ring-1 ring-white/25">
                <MapPin className="h-5 w-5 text-white" />
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/80">办公地址</p>
                  <p className="text-base font-semibold text-white">上海市宝山区沪太路1886号诺诚M立方创意园301室</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.14em] text-white/75">直连 HR</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "HR 微信", note: "扫码添加，快速沟通", src: "/qrcode/hr-wechat.jpg" },
                    { label: "HR 钉钉", note: "扫码入群，获取岗位", src: "/qrcode/hr-dingtalk.jpg" },
                  ].map((qr) => (
                    <div
                      key={qr.label}
                      className="flex aspect-square flex-col items-center justify-between gap-3 rounded-2xl bg-white/18 p-4 text-center ring-1 ring-white/30 shadow-md shadow-blue-200/40 backdrop-blur"
                    >
                      <div className="space-y-1">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/80">{qr.label}</p>
                        <p className="text-sm font-semibold text-white">{qr.note}</p>
                      </div>
                      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-xl border border-white/45 bg-white/15 ring-1 ring-white/20 sm:h-32 sm:w-32">
                        <Image
                          src={`${assetPrefix}${qr.src}`}
                          alt={qr.label}
                          width={170}
                          height={170}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 grid gap-6 rounded-3xl bg-white px-8 py-10 text-slate-800 ring-1 ring-[#d9e2f5] sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src={`${assetPrefix}/branding/logo.png`}
                alt="Yili Education"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div className="w-[180px] leading-tight">
                <p className="text-base font-semibold text-[#1677ff]">Yili Education</p>
                <p className="text-base font-semibold text-[#1677ff]">屹力教育</p>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              教育数字化场景专家，为学校与教育局提供治理、教师发展、学生成长的端到端方案。
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">导航</p>
            <div className="grid gap-2 text-sm text-slate-700">
              <a className="hover:text-[#1677ff]" href="#solutions">解决方案</a>
              <a className="hover:text-[#1677ff]" href="#cases">案例与证言</a>
              <a className="hover:text-[#1677ff]" href="#team">团队与资质</a>
              <a className="hover:text-[#1677ff]" href="#jobs">加入我们</a>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">快速行动</p>
            <div className="grid gap-2 text-sm text-slate-700">
              <a className="hover:text-[#1677ff]" href="mailto:bd@yiliedu.com">预约产品演示</a>
              <a className="hover:text-[#1677ff]" href="mailto:bd@yiliedu.com">联系商务合作</a>
              <Link className="hover:text-[#1677ff]" href={`${assetPrefix}/solutions/`}>
                下载方案（可定制）
              </Link>
              <Link className="text-slate-500 hover:text-[#1677ff]" href={`${assetPrefix}/admin/`}>
                管理后台（内部）
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">联系我们</p>
            <div className="space-y-2 text-sm text-slate-700">
              <p>电话：021-12345678</p>
              <p>商务：bd@yiliedu.com</p>
              <p>招聘：hr@yiliedu.com</p>
              <p>地址：上海市宝山区沪太路1886号诺诚M立方创意园301室</p>
            </div>
          </div>
        </footer>
        <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2">
          <Link
            href="/contact"
            className="hover-glow flex flex-col items-center gap-1 rounded-2xl bg-gradient-to-b from-[#1677ff] via-[#2aa1ff] to-[#69e0ff] px-3 py-5 text-sm font-semibold text-white shadow-xl shadow-[rgba(22,119,255,0.45)] ring-1 ring-white/40 transition hover:-translate-y-1"
          >
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/85">预约</span>
            <span className="text-base">演示</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

export const dynamic = "force-static";
