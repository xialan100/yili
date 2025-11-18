export type CaseSummary = {
  slug: string;
  name: string;
  segment: "幼儿园" | "小学/九年制" | "初中" | "高中" | "职业高中";
  result: string;
};

export const allCases: CaseSummary[] = [
  {
    slug: "zhangjiang-kindergarten",
    name: "上海市张江经典幼儿园（浦东）",
    segment: "幼儿园",
    result: "园务协同平台+排班考勤，跨园区公示与出勤标准化，调班留痕、信息发布规范。",
  },
  {
    slug: "defu-kindergarten",
    name: "嘉定新城德富幼儿园",
    segment: "幼儿园",
    result: "智慧校园协同系统覆盖巡查、公示、家长满意度，数据集中留痕，行政与家校效率双提升。",
  },
  {
    slug: "yunxiang-kindergarten",
    name: "云翔幼儿园（嘉定）",
    segment: "幼儿园",
    result: "教师发展平台+星级评价，成长档案与荣誉、家长表扬可视化，评优激励更客观透明。",
  },
  {
    slug: "qibao-primary",
    name: "上海市七宝实验小学（闵行）",
    segment: "小学/九年制",
    result: "轻应用+定制系统+校长驾驶舱，覆盖多校区流程与决策，教学治理数字化落地。",
  },
  {
    slug: "qiantan-hsefz",
    name: "华师大二附中前滩学校",
    segment: "小学/九年制",
    result: "钉钉运维+轻应用+学生积分/商城，事务入口统一，激励体系数字化，师生三端常态使用。",
  },
  {
    slug: "xinguang-school",
    name: "上海市莘光学校（闵行）",
    segment: "小学/九年制",
    result: "九类轻应用+教师发展+综评平台，导师日志、争章、成绩导入与组织维护全链路标准化。",
  },
  {
    slug: "fushan-tangcheng-primary",
    name: "上海市浦东新区福山唐城外国语小学",
    segment: "小学/九年制",
    result: "三校区学生成长档案平台+钉钉年度运维，新生/升班批量导入，成长记录沉淀与心理/评价联动。",
  },
  {
    slug: "meilanhuh-middle",
    name: "上海市宝山区美兰湖中学",
    segment: "初中",
    result: "人员/安全/教学/用印/报修/德育全流程轻应用，校务与资源管理闭环，规划大屏二期。",
  },
  {
    slug: "tianyuan-foreign-language",
    name: "上海市闵行区田园外国语中学",
    segment: "初中",
    result: "导师制育人平台+9类轻应用，教师发展/学籍+综评/满意度联动，流程与育人机制一体化。",
  },
  {
    slug: "fengxian-junior",
    name: "上海市奉贤中学附属初级中学",
    segment: "初中",
    result: "作业公示、教学评比、成绩分析、绩效确认一体化，教务效率与数据利用率显著提升。",
  },
  {
    slug: "snu-affiliated-jdg-hs",
    name: "上海师范大学附属嘉定高级中学",
    segment: "高中",
    result: "教师发展平台定制：规划/成果申报/家访沟通/赋分看板一体化，形成计划-过程-达成闭环。",
  },
  {
    slug: "jianping-high",
    name: "上海市建平中学",
    segment: "高中",
    result: "教师请假/离校/报修/场馆登记轻应用+招生管理平台（多通道、分时段、反推指导、短信邮箱推送）。",
  },
  {
    slug: "fudan-branch",
    name: "上海市浦东复旦附中分校",
    segment: "高中",
    result: "钉钉基础维护+轻应用（值班/食堂测评/课堂考勤/耗材管理）+行政数据大屏，审批与资源管理提效。",
  },
  {
    slug: "hongwen-vocational",
    name: "上海鸿文国际职业高级中学",
    segment: "职业高中",
    result: "职教通讯录+行政轻应用矩阵+招生迎新系统，学生管理闭环与安全管控同步上线。",
  },
  {
    slug: "second-light-industry",
    name: "上海市第二轻工业学校",
    segment: "职业高中",
    result: "校务综合管理与实训安排、学工事务打通，教师发展平台助力画像与成长记录。",
  },
];
