import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Building2, 
  Users, 
  GraduationCap, 
  FileText, 
  UserCheck, 
  BookOpen, 
  School, 
  Home,
  CheckCircle,

  BarChart3,
  Settings,
  Shield,
  Zap,
  Target,
  Heart
} from 'lucide-react'

export default function SolutionsPage() {
  const roleBasedSolutions = [
    {
      icon: Building2,
      title: '校长解决方案',
      subtitle: '全面的学校管理数字化平台',
      description: '为学校管理者提供全面的数字化管理工具，涵盖教学管理、行政管理、数据分析等各个方面，提升管理效率和决策质量。',
      features: [
        '智能数据分析与决策支持',
        '全校资源统一管理',
        '教学质量监控与评估',
        '财务与预算管理',
        '人事管理与绩效考核',
        '家校沟通平台'
      ],
      benefits: [
        '提升管理效率50%以上',
        '数据驱动决策，减少主观判断',
        '统一平台管理，降低运营成本',
        '实时监控，及时发现问题'
      ]
    },
    {
      icon: Users,
      title: '教师解决方案',
      subtitle: '专业的教学支持与发展平台',
      description: '帮助教师提升教学效果，减轻工作负担，促进专业发展。提供智能化的教学工具和资源，让教师专注于教学本身。',
      features: [
        '智能备课助手与资源库',
        '学情分析与个性化教学',
        '作业批改与反馈系统',
        '教学质量评估工具',
        '专业发展规划与培训',
        '教师协作与交流平台'
      ],
      benefits: [
        '备课时间减少30%',
        '教学效果显著提升',
        '减轻重复性工作负担',
        '促进教师专业成长'
      ]
    },
    {
      icon: GraduationCap,
      title: '学生支持方案',
      subtitle: '个性化的学习成长平台',
      description: '为学生提供个性化学习支持，促进全面发展。通过数据分析了解学生特点，提供针对性的学习建议和成长指导。',
      features: [
        '个性化学习路径规划',
        '学习进度跟踪与分析',
        '综合素质评价系统',
        '成长记录与档案管理',
        '兴趣特长发现与培养',
        '心理健康监测与支持'
      ],
      benefits: [
        '学习效率提升40%',
        '个性化发展得到支持',
        '全面素质得到提升',
        '学习兴趣显著增强'
      ]
    }
  ]

  const scenarioBasedSolutions = [
    {
      icon: FileText,
      title: '行政办公',
      description: '数字化办公流程，提升行政效率',
      scenarios: ['公文流转', '会议管理', '资产管理', '采购申请', '请假审批', '报销管理']
    },
    {
      icon: UserCheck,
      title: '教师发展',
      description: '支持教师专业成长的全方位平台',
      scenarios: ['培训管理', '绩效考核', '职业规划', '教研活动', '课程开发', '经验分享']
    },
    {
      icon: BookOpen,
      title: '学生支持',
      description: '促进学生全面发展的综合平台',
      scenarios: ['学业辅导', '心理健康', '兴趣培养', '社团活动', '实践活动', '升学指导']
    },
    {
      icon: School,
      title: '校园文化',
      description: '营造积极向上的校园文化氛围',
      scenarios: ['文化建设', '活动组织', '宣传推广', '荣誉管理', '传统传承', '品牌塑造']
    },
    {
      icon: Home,
      title: '家校协同',
      description: '构建家校合作的桥梁',
      scenarios: ['家长沟通', '学情反馈', '家庭教育', '志愿服务', '家委会管理', '亲子活动']
    }
  ]

  const technicalFeatures = [
    {
      icon: Shield,
      title: '安全可靠',
      description: '多层安全防护，确保数据安全'
    },
    {
      icon: Zap,
      title: '高效稳定',
      description: '云原生架构，支持高并发访问'
    },
    {
      icon: Settings,
      title: '灵活配置',
      description: '模块化设计，支持个性化定制'
    },
    {
      icon: BarChart3,
      title: '数据驱动',
      description: '智能分析，提供决策支持'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              解决<span className="text-orange-400">方案</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              场景驱动的教育数字化解决方案
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              针对不同角色和场景，提供专业化的数字化工具和服务，
              让技术真正服务于教育，提升教学管理效率。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="roles" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                解决方案分类
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                按角色和场景提供针对性的解决方案
              </p>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="roles">按角色分类</TabsTrigger>
                <TabsTrigger value="scenarios">按场景分类</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="roles" className="space-y-16">
              {roleBasedSolutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                          <p className="text-lg text-gray-600">{solution.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">核心功能</h4>
                          <ul className="space-y-2">
                            {solution.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">预期效果</h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-600">
                                <Target className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <CardContent className="p-8">
                          <div className="text-center">
                            <IconComponent className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-4">
                              {solution.title}
                            </h4>
                            <p className="text-gray-600 mb-6">
                              专为{solution.title.replace('解决方案', '').replace('支持方案', '')}设计的数字化平台
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              了解详情
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </TabsContent>

            <TabsContent value="scenarios" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {scenarioBasedSolutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {solution.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {solution.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-3">应用场景</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.scenarios.map((scenario, scenarioIndex) => (
                              <Badge key={scenarioIndex} variant="secondary" className="text-xs">
                                {scenario}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              技术特色
            </h2>
            <p className="text-xl text-gray-600">
              先进的技术架构，保障系统稳定高效运行
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            定制化解决方案
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            根据学校具体需求，提供个性化的解决方案设计
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">需求分析</h3>
                <p className="text-sm text-blue-200">
                  深入了解学校现状和需求，制定针对性方案
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">方案设计</h3>
                <p className="text-sm text-blue-200">
                  基于需求分析，设计个性化的解决方案
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">持续服务</h3>
                <p className="text-sm text-blue-200">
                  提供全程技术支持和持续优化服务
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">咨询定制方案</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/cases">查看成功案例</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
