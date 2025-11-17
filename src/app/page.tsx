import { ArrowRight, CheckCircle2, Factory, Layers, Mail, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const strengths = [
  {
    title: "智能制造集成",
    description: "自动化产线、机器人应用与数字化工厂整体落地，助力产能升级。",
    icon: <Sparkles className="h-6 w-6 text-blue-500" />, 
  },
  {
    title: "结构与机电工程",
    description: "钢结构、机电安装、能源管理一体化交付，打造可靠的生产环境。",
    icon: <Wrench className="h-6 w-6 text-blue-500" />, 
  },
  {
    title: "安全与合规",
    description: "全过程EHS与质量管理体系，守护项目安全、效率与可持续。",
    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />, 
  },
];

const services = [
  {
    title: "工业园区规划与建设",
    detail: "总包交付、设备选型、楼宇智能化一体化设计，确保项目按期稳交。",
  },
  {
    title: "产线自动化改造",
    detail: "机器人、输送、MES/SCADA全链路改造，实现良率、稼动率双提升。",
  },
  {
    title: "能源与低碳解决方案",
    detail: "智慧用能、能源托管及光伏储能方案，降低单位能耗与运维成本。",
  },
  {
    title: "运维与持续优化",
    detail: "7×24小时运维响应、远程监控与巡检服务，让产线始终保持高效。",
  },
];

const cases = [
  {
    name: "华东智能制造基地",
    result: "12个月完成交付，整体OEE提升18%，单线人力投入减少30%。",
  },
  {
    name: "新能源电池标杆工厂",
    result: "洁净厂房+自动化组装产线，年产能达15GWh，合规一次验收通过。",
  },
  {
    name: "精密零部件数字车间",
    result: "设备联网与数据中台建设，异常响应时间缩短60%，良率稳定95%以上。",
  },
];

const steps = [
  "需求洞察与方案共创",
  "数字化BIM与仿真验证",
  "高标准施工与集成交付",
  "上线培训与运营陪跑",
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.15),transparent_25%),linear-gradient(120deg,rgba(15,23,42,0.02),rgba(59,130,246,0.02))]" />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-12 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
              <Sparkles className="h-4 w-4" />
              屹力 · 让工程与制造更高效
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                屹力公司官网
                <span className="block text-blue-600">工程驱动未来制造</span>
              </h1>
              <p className="max-w-2xl text-lg text-slate-700">
                屹力专注智能制造、工业建筑与自动化改造的全流程服务。我们以工程硬实力、数字化能力与EHS体系，为企业打造安全、可持续、可复制的标杆工厂。
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                href="#contact"
              >
                立即咨询
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-blue-200"
                href="#cases"
              >
                查看案例
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[{ label: "项目经验", value: "200+" }, { label: "核心工程师", value: "120人" }, { label: "客户满意度", value: "98%" }].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm text-slate-600">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.14),transparent_30%)]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">专注行业</p>
                  <h3 className="text-2xl font-semibold">智能制造 & 新能源</h3>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-200 ring-1 ring-white/15">
                  EPC · 数字化 · 运维
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm text-slate-100 ring-1 ring-white/10">
                <Factory className="h-10 w-10 text-teal-200" />
                <div>
                  <p className="font-semibold">从规划到运营的端到端交付</p>
                  <p className="text-slate-300">
                    BIM+仿真、智慧工地、数字化交付文档，确保每个环节透明可控。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">核心服务</h2>
              <p className="text-slate-700">以工程和数字化能力，陪伴企业从蓝图落地到持续优化。</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-700">
              <CheckCircle2 className="h-4 w-4" /> 交付质量与安全双重保障
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <Layers className="mt-1 h-10 w-10 text-blue-500" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600">{service.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" className="space-y-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">精选案例</h2>
            <p className="text-slate-700">真实场景的效率提升与品质保障，持续为客户创造价值。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((project) => (
              <div key={project.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Factory className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                    <p className="text-sm text-slate-500">交付与成效</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-700">{project.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/80 p-8 shadow-inner ring-1 ring-slate-100 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">与屹力一起，打造下一座标杆工厂</h2>
            <p className="text-lg text-slate-700">
              我们组建跨学科团队，覆盖咨询、设计、施工、自动化、IT与运维。借助数据驱动的工程方法论，帮助企业在安全、质量、成本和交期之间取得最佳平衡。
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="font-medium text-slate-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl bg-slate-900/95 p-6 text-white shadow-lg ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">保障体系</p>
                <h3 className="text-2xl font-semibold">质量·安全·交付</h3>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-teal-100 ring-1 ring-white/15">
                全流程可追溯
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />
                <p>ISO质量、EHS与信息安全体系，确保工程合规与可持续。</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />
                <p>数字化项目管理与可视化看板，进度、风险、成本透明可控。</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />
                <p>上线陪跑与持续优化，帮助产线保持长期卓越的运营表现。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-6 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 p-10 text-white shadow-xl">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Contact</p>
            <h2 className="text-3xl font-semibold">一起讨论您的项目</h2>
            <p className="max-w-2xl text-lg text-blue-50">
              无论是新建工厂、产线升级还是能源降本，我们乐于与您共创解决方案。提交需求后，屹力顾问将在1个工作日内与您取得联系。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-blue-50">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-white/20"
              href="mailto:contact@yili.com"
            >
              <Mail className="h-5 w-5" /> contact@yili.com
            </a>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm ring-1 ring-white/25">
              <ShieldCheck className="h-4 w-4" />
              数据安全与隐私保护
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm ring-1 ring-white/25">
              <Sparkles className="h-4 w-4" />
              方案初稿最快72小时
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
