import Link from "next/link";

type CaseDetail = {
  slug: string;
  name: string;
  basics: string[];
  background: string;
  solutions: string[];
  effects: string[];
};

const caseDetails: CaseDetail[] = [
  {
    slug: "zhangjiang-kindergarten",
    name: "上海市张江经典幼儿园（浦东）",
    basics: [
      "学校类型：幼儿园",
      "合作时间：2024年11月5日",
      "服务内容：园务协同平台 + 钉钉考勤排班",
    ],
    background:
      "多园区、教职工较多，日常公示不规范、文件传递混乱，跨园区排班协调困难，手工处理效率低、易出错。",
    solutions: [
      "智能园务管理：每周工作安排、干部行事历、教师个人平台、常规文件公示区，信息集中展示按需可见。",
      "跨园区排班与考勤：基于钉钉原生排班配置，学期级统一设置，调班/替岗有留痕、数据准确。",
    ],
    effects: [
      "行政公示与跨园区协同标准化，通知不再依赖微信群/纸质。",
      "出勤与排班数据准确可追溯，跨园沟通成本明显下降。",
    ],
  },
  {
    slug: "defu-kindergarten",
    name: "嘉定新城德富幼儿园",
    basics: [
      "学校类型：幼儿园",
      "合作时间：2022年9月5日",
      "服务内容：智慧校园平台（行政协同 + 家校互动）",
    ],
    background:
      "行政巡查、督导记录线下留痕，家长反馈统计低效，教科研/课程资源分散，荣誉展示零散。",
    solutions: [
      "行政园务协同：每周工作安排、行政/消防巡视表在线记录与汇总，园所荣誉集中管理。",
      "教学文件公示：课程计划、教师发展、教研活动、科研成果、资源共享模块化归档分权限查阅。",
      "家长满意度评价：月度推送评价表，重点项可配置，数据自动统计导出。",
    ],
    effects: [
      "园务统筹留痕可追溯，行政协同效率显著提升。",
      "教学资料集中沉淀，教师查阅效率提升。",
      "家校反馈数据化，满意度收集标准化、可分析。",
    ],
  },
  {
    slug: "yunxiang-kindergarten",
    name: "云翔幼儿园（嘉定）",
    basics: ["学校类型：幼儿园", "服务内容：教师发展平台 + 星级评价体系"],
    background:
      "教师成长成果分散，评优缺少量化依据，希望结合区级星级标准建立自有激励与画像体系。",
    solutions: [
      "教师发展档案：获奖荣誉、园内外活动、家长表扬与活动记录统一留痕，生成成长轨迹。",
      "教师画像：基于成长数据生成个人画像与整体队伍画像，支撑人力安排与培养策略。",
      "星级评价：映射区级星级标准，指标量化并自动记录星级变动，激励与评优更客观。",
    ],
    effects: [
      "成长档案系统化、图谱化，评优与培养有据可依。",
      "星级评价更科学透明，激励机制可视可追踪。",
      "教师主动上传成长记录，形成良好使用习惯。",
    ],
  },
  {
    slug: "qibao-primary",
    name: "上海市七宝实验小学（闵行）",
    basics: [
      "学校类型：小学（双校区）",
      "合作时间：2023年8月14日",
      "服务内容：轻应用场景建设 + 定制化开发 + 校长数据驾驶舱",
    ],
    background:
      "多校区、多场景信息管理繁杂，纸质与重复表单效率低；教学常规数据分散，缺少集中管理与决策支持。",
    solutions: [
      "轻应用覆盖高频日常：钉钉轻应用快速搭建常规流程，减负提效。",
      "定制化系统：针对校内需求深度开发，贯通教学与行政数据。",
      "校长驾驶舱：集中呈现教学、行政关键指标，辅助跨校区治理决策。",
    ],
    effects: [
      "多场景流程线上化、留痕化，教师事务性负担降低。",
      "数据集中沉淀，支撑校长层决策与督导。",
      "跨校区治理效率提升，信息化水平显著增强。",
    ],
  },
  {
    slug: "qiantan-hsefz",
    name: "华师大二附中前滩学校",
    basics: [
      "学校类型：九年一贯制",
      "服务内容：钉钉运维 + 轻应用 + 学生综合素养积分/商城",
    ],
    background:
      "多学段组织架构复杂，事务入口分散（请假、用餐、物品、场馆等），希望构建数据化的学生正向激励体系并统一流程管理。",
    solutions: [
      "钉钉运维：新生导入、升班/毕业、组织架构与权限精准维护，处理调动与调整任务。",
      "轻应用矩阵：请假用餐联动、物品申购领用、学生评教、每周工作安排、场所预约、固定资产管理等高频场景快上、快迭代。",
      "定制学生综合素养评价：积分驱动的争章与商城体系，管理员/教师/学生三端分权，积分兑换留痕，数据看板支持决策。",
    ],
    effects: [
      "事务入口统一，流程线上化留痕，师生三端常态化使用。",
      "积分激励形成正向闭环，兑换与成长档案打通，提升学生内驱力。",
      "组织管理与日常运维规范可靠，数据沉淀可用于督导与决策。",
    ],
  },
  {
    slug: "xinguang-school",
    name: "上海市莘光学校（闵行）",
    basics: [
      "学校类型：九年一贯制（双校区）",
      "服务内容：钉钉运维 + 轻应用 + 定制化管理项目",
    ],
    background:
      "双校区、跨学段管理事务繁多，希望通过标准化轻应用与定制平台覆盖行政、教学督导、安全护导、用餐、教研、学生成长与教师发展等全流程。",
    solutions: [
      "九类轻应用矩阵：行政管理、教学督导、安全护导、用餐流程等全面上线，数据留痕。",
      "教师发展系统：发展目标与成果申报线上化，成长档案沉淀。",
      "学生综合素质平台：争章、成绩导入、全员导师日志等形成全过程育人档案。",
      "钉钉组织与通讯维护：三个月稳定运维，保证家校沟通与权限准确。",
    ],
    effects: [
      "轻应用全覆盖，行政与教学督导流程标准化、可追踪。",
      "教师发展数据百条以上沉淀，争章数据近千条，导师日志超200篇。",
      "组织架构稳定无错漏，家校通讯效率提升，育人数据持续沉淀。",
    ],
  },
  {
    slug: "fengxian-junior",
    name: "上海市奉贤中学附属初级中学",
    basics: [
      "学校类型：初中",
      "合作时间：2024年8月20日",
      "服务内容：钉钉基础支持 + 轻应用 + 定制平台",
    ],
    background:
      "作业公示、教学评比、成绩分析、教师绩效确认等事务分散在线下或表格，数据利用率低、流程易漏，希望通过数字化提升教务效率与透明度。",
    solutions: [
      "钉钉基础支持：组织架构与角色绑定、审批与考勤配置、家校绑定指导。",
      "轻应用：作业公示（图文/附件）、教学评比（自填+评审打分、自动排名）、周教务安排统一发布。",
      "定制平台：成绩分析（批量导入、多维度分析、模板化导出）、教师绩效确认（个人确认留痕、管理员催办与导出签字表）。",
    ],
    effects: [
      "作业与教学评比线上化，通知与排名自动化，教师负担降低。",
      "成绩分析准确高效，报表标准化，决策参考价值提升。",
      "绩效确认流程效率提升约60%，留痕可查，配合奖金发放更规范。",
      "家校沟通与组织维护清晰，教师自主使用率高。",
    ],
  },
  {
    slug: "hongwen-vocational",
    name: "上海鸿文国际职业高级中学",
    basics: [
      "学校类型：职业高中",
      "合作时间：2025年1月2日",
      "服务内容：钉钉维护 + 轻应用矩阵 + 招生迎新系统",
    ],
    background:
      "国际化职高，重视学生行为规范与学业管理，需适配家校通讯、行政高频流程，以及安全可控的招生迎新系统；旧系统体验差、数据孤岛、安全风险高。",
    solutions: [
      "钉钉基础运维：职教特色通讯录建设与维护，处理人员变动与新生导入，保障日常审批/日志/DING等功能稳定。",
      "轻应用矩阵：会议室预约、用车申请、设备报修、外聘专家库、绩效奖励申请、调代课、因公出国/学生因公请假等高频场景线上化。",
      "招生迎新系统重构：钉钉账号统一身份，一站式信息填报（基础信息/校服尺码/住宿/专业志愿），断点续填、进度提醒、权限隔离与数据加密，并预留教务对接口。",
    ],
    effects: [
      "行政流程全面数字化，会议室/用车/报修/调代课等可追踪、标准化。",
      "招生迎新体验大幅优化，权限隔离确保安全，数据集中便于后续教学管理。",
      "学生成绩/评价/考勤应用形成闭环，管理数据可视化（大屏/看板）。",
    ],
  },
  {
    slug: "fushan-tangcheng-primary",
    name: "上海市浦东新区福山唐城外国语小学",
    basics: [
      "学校类型：小学（三个校区）",
      "合作时间：2022年3月17日",
      "服务内容：学生成长档案平台 + 钉钉基础运维",
    ],
    background:
      "三校区学生成长信息零散，教师/学生侧缺少全周期记录；多校区事务复杂，期初期末的组织架构调整与人员更新依赖钉钉但缺少专业运维支撑。",
    solutions: [
      "成长档案平台：教师端含班级进度追踪、成绩导入与分析、过程/终结性评价、班主任寄语、心理测评导入；学生端含个人信息、我的收获、拓展探究、心理自评与提醒。",
      "钉钉运维：新生批量导入与家校绑定、升班/毕业一键处理、多校区通讯录分权维护、考勤组/审批流按学期配置。",
    ],
    effects: [
      "成长档案覆盖全学段，过程+终结性数据有序沉淀，报告一键生成。",
      "教师端按时提醒与模块化录入，心理/评价留痕可追溯。",
      "组织架构与权限稳定维护，年度切换标准化，使用无错漏。",
    ],
  },
  {
    slug: "meilanhuh-middle",
    name: "上海市宝山区美兰湖中学",
    basics: [
      "学校类型：初中",
      "合作时间：2021年11月15日",
      "服务内容：钉钉运维 + 轻应用矩阵（人员/安全/教学/用印/报修/德育）",
    ],
    background:
      "人员管理、巡查、教学资源、用印及报修等事务依赖纸质或微信群，缺少标准化流程和数据留痕，校务数据无法集中展示。",
    solutions: [
      "人员管理：基础数据录入、岗位与权限配置，数据接口同步。",
      "安全与卫生：消防/卫生巡查电子化，记录反馈与频次统计可视化。",
      "教学管理：资源集中上传共享，作业公示统一口径，考务计划集中展示。",
      "资源/行政：用印申请线上审批、全程留痕；设备报修闭环处理。",
      "德育/校务：德育活动统一录入、图文留痕；校务系统整合行政事务，并规划二期大屏。",
    ],
    effects: [
      "各类流程线上闭环，人员/安全/用印/报修可追溯。",
      "教学资源与作业公示集中管理，信息获取更高效。",
      "德育与校务数据沉淀，为后续可视化和智能化奠定基础。",
    ],
  },
  {
    slug: "tianyuan-foreign-language",
    name: "上海市闵行区田园外国语中学",
    basics: [
      "学校类型：初中",
      "合作时间：2024年10月11日",
      "服务内容：钉钉基础服务 + 轻应用 + 定制化育人平台",
    ],
    background:
      "导师制育人与数字素养并重，事务流程零散，教师发展与学生活动数据分散；导师制度缺少过程记录，成绩导入输出依赖人工，争章与综合素质评价无痕沉淀。",
    solutions: [
      "基础运维：家校通讯录与组织导入，升班/毕业自动化，考勤/审批配置。",
      "轻应用（9+）：请假用餐联动退费、教学/行规检查、听评课、每周工作安排/任务管理、场所预约、校园护导、三重一大、学生满意度等。",
      "定制平台：教师发展系统（目标设定、成果申报、画像）；学籍与综评（学生活动记录、争章、成绩导入与分析）；导师制记录沟通与寄宿生管理。",
    ],
    effects: [
      "行政与教学流程统一入口、留痕可追踪，教师负担下降。",
      "教师发展档案与画像形成闭环，评优培养有据可依。",
      "学生综评与导师制数据沉淀，争章与成绩管理标准化。",
    ],
  },
  {
    slug: "snu-affiliated-jdg-hs",
    name: "上海师范大学附属嘉定高级中学",
    basics: [
      "学校类型：高中",
      "合作时间：2024年10月17日",
      "服务内容：教师发展数字化平台（定制化）",
    ],
    background:
      "教师成果分散于邮件/Excel，缺少目标-过程-达成闭环；赋分、自评、沟通记录量大难追踪，缺少角色化数据看板。",
    solutions: [
      "发展目标与成果：按年/学期录入规划，成果申报/导出，支持职称评审与归档。",
      "过程记录：家访/谈心、支教/献血、带教、培训统一入口，特色课堂视频上传。",
      "数据看板：人事构成、规划达成率、成果分布等多维可视化；角色权限区分教师/导师/负责人/分管领导。",
    ],
    effects: [
      "教师发展轨迹系统化记录，计划-过程-达成闭环。",
      "赋分流程规范，结果联动看板，多级评价透明。",
      "沟通与成长记录沉淀，支撑师德考核与评优评先。",
    ],
  },
  {
    slug: "jianping-high",
    name: "上海市建平中学",
    basics: [
      "学校类型：高中",
      "合作时间：2024年12月11日",
      "服务内容：钉钉轻应用建设 + 招生管理平台（定制化）",
    ],
    background:
      "多类别招生需分时段精准开放并反推市级系统；教师请假/报修/场馆登记线下低效；招生活动证明需规范推送且上线周期紧张。",
    solutions: [
      "轻应用：学生离校申请、教师请假（对接排班考勤）、报修申请、场馆登记（冲突提醒、导出预约表）。",
      "招生平台：多类别报名通道与分时开放控制；反推市级平台操作指引与培训；报名完成后短信/邮箱推送 PDF 证明；严格时间进度管控。",
    ],
    effects: [
      "行政事务统一入口，审批清晰、记录可查，效率提升。",
      "招生报名流程标准化，反推与通知自动化，按时上线保障招生季。",
      "家长端收到规范化证明，信息传递更专业规范。",
    ],
  },
  {
    slug: "fudan-branch",
    name: "上海市浦东复旦附中分校",
    basics: [
      "学校类型：高中",
      "合作时间：2021年7月21日",
      "服务内容：钉钉基础维护 + 轻应用建设 + 行政数据大屏",
    ],
    background:
      "通讯录与家校通讯结构复杂，随新生/升班/毕业需频繁调整；高频审批与日常管理场景依赖传统方式，效率低、数据难沉淀；缺少可视化大屏统一展示关键运行数据，期望贴合高中实际的场景化工具。",
    solutions: [
      "钉钉基础维护：精细化梳理并维护内部/家校通讯录，新生入学、升班、毕业节点信息准确同步；优化高频审批流程配置，保障 OA 流转顺畅。",
      "轻应用建设：值班提醒、食堂满意度测评、课堂考勤、耗材管理等专属轻应用，实现提醒、反馈、申领、库存追踪与数据汇总。",
      "行政数据大屏：融合审批与高频应用数据，定制展示校园运行概览（审批效率、值班在岗、测评反馈趋势等），辅助管理决策。",
    ],
    effects: [
      "通讯录管理智能化，动态更新减轻行政负担。",
      "值班/考勤/耗材/测评等高频事务处理效率显著提升，数据留痕可查。",
      "场景化轻应用贴合高中管理需求，碎片化痛点数字化闭环。",
      "行政数据大屏提供全局视图，管理透明度与决策效率提升。",
      "持续基础维护与场景扩展，数字化应用深度持续增强。",
    ],
  },
  {
    slug: "second-light-industry",
    name: "上海市第二轻工业学校",
    basics: [
      "学校类型：职业高中",
      "服务内容：校务综合管理 + 实训安排 + 学工事务 + 教师发展平台",
    ],
    background:
      "校务、实训、学工事务分散，教师发展缺少画像和成长记录，需要打通教学与实训管理，提升管理可视化。",
    solutions: [
      "校务与实训综合管理平台，贯通教学管理、实训安排、学工事务流程。",
      "教师发展平台记录成长与画像，支撑评优与培养。",
    ],
    effects: [
      "教学与实训安排透明可控，学工事务有据可循。",
      "教师画像与成长记录沉淀，管理更客观高效。",
    ],
  },
];

type Params = { params: Promise<{ slug: string }> };

export default async function CasePage({ params }: Params) {
  const { slug } = await params;
  const detail = caseDetails.find((c) => c.slug === slug);
  const basics = detail?.basics.filter((b) => !b.includes("合作时间")) ?? [];
  const schoolType = basics.find((b) => b.startsWith("学校类型"));
  const serviceScope = basics.find((b) => b.startsWith("服务内容"));

  if (!detail) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16 text-slate-100">
        <h1 className="text-3xl font-semibold">未找到案例</h1>
        <p className="mt-4 text-slate-300">请返回案例列表查看其他内容。</p>
        <Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white" href="/#cases">
          返回案例列表
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f8ff] text-[#0f172a]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(22,119,255,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(122,216,255,0.16),transparent_35%),linear-gradient(135deg,#e8f1ff,#f7faff)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#1677ff]/12 via-white/70 to-transparent" />
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-16 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#1677ff]">Case Study</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#0f172a]">{detail.name}</h1>
          </div>
          <Link className="hover-glow inline-flex items-center gap-2 rounded-full bg-[#1677ff] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[rgba(22,119,255,0.35)] ring-1 ring-white/60 hover:bg-[#0f5fd8]" href="/#cases">
            返回列表
          </Link>
        </div>

        <div className="grid gap-4 rounded-3xl border border-[#d9e2f5] bg-white/95 p-6 shadow-xl shadow-blue-50/70 ring-1 ring-[#e8eefc]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#1677ff]">故事开场 · 场景全貌</p>
            <h2 className="text-2xl font-semibold text-[#0f172a]">学校在解决什么问题？</h2>
            <p className="text-slate-700 leading-7">{detail.background}</p>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-[#d9e2f5] bg-white/95 p-6 shadow-xl shadow-blue-50/70 ring-1 ring-[#e8eefc]">
          <div className="flex items-center gap-2">
            <p className="text-xs uppercase tracking-[0.18em] text-[#1677ff]">客户故事</p>
            <span className="rounded-full bg-[#f0f6ff] px-2 py-1 text-[11px] text-[#0f294d] ring-1 ring-[#c7d8ff]">从背景到成效</span>
          </div>
          <div className="space-y-3 text-slate-700 leading-7">
            <p className="text-base font-semibold text-[#0f172a]">起点 · 场景</p>
            <p>
              {detail.name}
              {schoolType ? `，${schoolType.replace("学校类型：", "")}` : ""}。他们遇到的问题是真实的：
              {detail.background}
            </p>
            <p className="text-base font-semibold text-[#0f172a]">行动 · 共创落地</p>
            <p>
              {serviceScope ? `围绕“${serviceScope.replace("服务内容：", "")}”` : "我们"} 与校方并肩梳理业务脉络，把每一步都落到场景里：
              {detail.solutions.map((item, idx) => `${idx + 1}）${item}`).join("；")}。
            </p>
            <p className="text-base font-semibold text-[#0f172a]">改变 · 现场反馈</p>
            <p>
              结果不是冷冰冰的数据，而是现场松了一口气的老师和更透明的管理：{detail.effects.join("；")}
            </p>
            <p className="rounded-2xl bg-[#f7faff] px-4 py-3 text-sm text-[#0f172a] ring-1 ring-[#e0eaff]">
              每个案例都代表一次照见真实需求的共创。从治理到课堂，从流程到温度，学校收获的是真正可复制、能落地、可持续的数字化经验。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return caseDetails.map((c) => ({ slug: c.slug }));
}

export const dynamic = "force-static";
