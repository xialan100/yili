import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Heart, 
  Zap, 
  Target, 
  Coffee, 
  Laptop, 
  MapPin, 
  Clock, 
  DollarSign,
  GraduationCap,
  Lightbulb,
  Shield,

  CheckCircle,
  Star,
  Award,
  Mail,
  Phone
} from 'lucide-react'

export default function CareersPage() {
  const cultureValues = [
    {
      icon: Heart,
      title: '以人为本',
      description: '我们相信每个人都有无限潜能，致力于为员工创造最好的成长环境'
    },
    {
      icon: Lightbulb,
      title: '持续创新',
      description: '鼓励创新思维，支持员工提出新想法，推动产品和服务的持续改进'
    },
    {
      icon: Users,
      title: '团队协作',
      description: '倡导开放沟通，相互支持，共同成长，打造高效协作的团队文化'
    },
    {
      icon: Target,
      title: '追求卓越',
      description: '对工作质量有高标准要求，不断挑战自我，追求专业领域的卓越表现'
    },
    {
      icon: Shield,
      title: '诚信负责',
      description: '以诚待人，对工作负责，对客户负责，对社会负责'
    },
    {
      icon: Zap,
      title: '敏捷高效',
      description: '快速响应市场变化，高效执行，在变化中寻找机遇'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: '有竞争力的薪酬',
      description: '行业领先的薪酬水平，年终奖金，股权激励计划'
    },
    {
      icon: GraduationCap,
      title: '学习发展机会',
      description: '内部培训，外部学习机会，技术大会，职业发展规划'
    },
    {
      icon: Coffee,
      title: '灵活的工作环境',
      description: '弹性工作时间，远程办公支持，舒适的办公环境'
    },
    {
      icon: Heart,
      title: '完善的福利保障',
      description: '五险一金，商业保险，年度体检，带薪年假'
    },
    {
      icon: Users,
      title: '团队建设活动',
      description: '定期团建，技术分享，生日聚会，节日庆祝'
    },
    {
      icon: Laptop,
      title: '先进的工作设备',
      description: '高配置电脑，双显示器，人体工学椅，最新开发工具'
    }
  ]

  const openPositions = [
    {
      title: '前端开发工程师',
      department: '技术部',
      location: '上海',
      type: '全职',
      experience: '3-5年',
      description: '负责教育产品前端开发，使用React/Vue等现代框架',
      requirements: [
        '熟练掌握HTML、CSS、JavaScript',
        '熟悉React或Vue框架',
        '有教育行业经验优先',
        '良好的团队协作能力'
      ]
    },
    {
      title: '后端开发工程师',
      department: '技术部',
      location: '上海',
      type: '全职',
      experience: '3-5年',
      description: '负责教育管理系统后端开发，构建稳定可靠的服务',
      requirements: [
        '熟练掌握Python/Java/Go等语言',
        '熟悉数据库设计和优化',
        '有微服务架构经验',
        '具备良好的代码规范'
      ]
    },
    {
      title: '产品经理',
      department: '产品部',
      location: '上海',
      type: '全职',
      experience: '3-5年',
      description: '负责教育产品规划和设计，深入理解用户需求',
      requirements: [
        '有教育行业产品经验',
        '优秀的需求分析能力',
        '良好的沟通协调能力',
        '熟悉产品设计流程'
      ]
    },
    {
      title: 'UI/UX设计师',
      department: '设计部',
      location: '上海',
      type: '全职',
      experience: '2-4年',
      description: '负责教育产品界面设计，提升用户体验',
      requirements: [
        '熟练使用Figma、Sketch等设计工具',
        '有移动端和Web端设计经验',
        '理解用户体验设计原则',
        '有教育产品设计经验优先'
      ]
    },
    {
      title: '销售经理',
      department: '销售部',
      location: '上海',
      type: '全职',
      experience: '3-5年',
      description: '负责教育客户开发和维护，推广公司产品和服务',
      requirements: [
        '有教育行业销售经验',
        '优秀的沟通表达能力',
        '强烈的目标导向',
        '良好的客户服务意识'
      ]
    },
    {
      title: '技术支持工程师',
      department: '技术部',
      location: '上海',
      type: '全职',
      experience: '1-3年',
      description: '为客户提供技术支持和培训服务',
      requirements: [
        '计算机相关专业背景',
        '良好的问题解决能力',
        '耐心细致的服务态度',
        '有客户服务经验优先'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              加入<span className="text-orange-400">我们</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              与我们一起推动教育数字化转型
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              我们正在寻找有激情、有才华的伙伴，一起为中国教育事业的发展贡献力量。
              在这里，你将获得专业成长、个人发展和实现价值的机会。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择屹力教育
            </h2>
            <p className="text-xl text-gray-600">
              我们致力于创造最好的工作环境，让每个人都能发挥潜能
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                我们的招聘主张
              </h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-blue-600">价值驱动：</strong>
                  我们相信每个人都有独特的价值，致力于为员工提供发挥才能的平台，
                  让个人成长与公司发展相互促进。
                </p>
                <p>
                  <strong className="text-blue-600">成长导向：</strong>
                  提供丰富的学习机会和职业发展路径，支持员工在专业领域不断精进，
                  实现职业目标。
                </p>
                <p>
                  <strong className="text-blue-600">扁平管理：</strong>
                  采用扁平化的组织结构，鼓励开放沟通，让每个声音都能被听到，
                  每个想法都有实现的可能。
                </p>
                <p>
                  <strong className="text-blue-600">使命感：</strong>
                  我们的工作直接影响着教育质量的提升，每一行代码、每一个设计
                  都在为教育事业贡献力量。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">优秀团队成员</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-sm text-gray-600">员工满意度</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">3年</div>
                  <div className="text-sm text-gray-600">平均在职时间</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-sm text-gray-600">内部晋升率</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              企业文化与价值观
            </h2>
            <p className="text-xl text-gray-600">
              我们的文化价值观指引着团队的发展方向
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              福利待遇
            </h2>
            <p className="text-xl text-gray-600">
              完善的福利体系，让你专注于创造价值
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              热招职位
            </h2>
            <p className="text-xl text-gray-600">
              寻找志同道合的伙伴，一起创造教育的未来
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    {position.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">任职要求</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      申请职位
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              投递简历
            </h2>
            <p className="text-xl text-blue-100">
              准备好加入我们了吗？我们期待与你相遇
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">招聘邮箱</div>
                    <div className="text-blue-200">hr@yili.edu</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">联系电话</div>
                    <div className="text-blue-200">400-123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">工作地址</div>
                    <div className="text-blue-200">上海市浦东新区张江高科技园区</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">工作时间</div>
                    <div className="text-blue-200">周一至周五 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">投递指南</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-100">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">简历要求</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 请发送PDF格式简历</li>
                        <li>• 邮件标题：姓名-应聘职位-工作年限</li>
                        <li>• 简历请包含项目经验和技能描述</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">面试流程</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 简历筛选（3个工作日内回复）</li>
                        <li>• 电话/视频初试</li>
                        <li>• 现场/线上技术面试</li>
                        <li>• HR面试</li>
                        <li>• 发放offer</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="mailto:hr@yili.edu">
                  发送简历 <Mail className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">了解更多</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
