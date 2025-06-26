import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Building2,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: '专业专注',
      description: '深耕基础教育领域，专注于学校数字化转型的实际需求'
    },
    {
      icon: Heart,
      title: '用户至上',
      description: '以学校和师生的真实需求为出发点，提供贴心的产品和服务'
    },
    {
      icon: Lightbulb,
      title: '持续创新',
      description: '紧跟教育发展趋势，不断创新产品功能和服务模式'
    },
    {
      icon: Shield,
      title: '可靠稳定',
      description: '确保系统稳定运行，为学校提供可靠的技术保障'
    },
    {
      icon: Zap,
      title: '高效便捷',
      description: '简化操作流程，提升工作效率，让技术真正服务于教育'
    },
    {
      icon: Users,
      title: '协作共赢',
      description: '与学校建立长期合作关系，共同推进教育数字化发展'
    }
  ]

  const achievements = [
    { number: '500+', label: '合作学校', description: '覆盖全国多个省市' },
    { number: '50万+', label: '服务师生', description: '直接受益用户' },
    { number: '7年', label: '行业经验', description: '深耕教育科技领域' },
    { number: '98%', label: '客户满意度', description: '获得广泛认可' }
  ]

  const partners = [
    { name: '华东师范大学', type: '学术合作' },
    { name: '上海市教委', type: '政府支持' },
    { name: '钉钉教育', type: '技术合作' },
    { name: '腾讯教育', type: '平台合作' },
    { name: '阿里云', type: '技术支持' },
    { name: '微软教育', type: '产品合作' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              关于<span className="text-orange-400">屹力教育</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              做最懂学校的教育科技公司
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              自2017年成立以来，我们专注于基础教育数字化转型，致力于为学校提供场景驱动的解决方案，
              帮助教育工作者提升效率，让技术真正服务于教育。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  屹力教育科技有限公司成立于2017年，是一家专注于基础教育数字化转型的科技公司。
                  我们深入理解学校的实际需求，以&ldquo;教育管理场景驱动&rdquo;为核心理念，为政府教育部门、
                  学校管理者和教育工作者提供专业的数字化解决方案。
                </p>
                <p>
                  经过多年的发展，我们已经服务了500多所学校，覆盖了强校工程、课后服务、
                  教师发展等多个教育场景。我们的产品和服务得到了广大用户的认可和信赖，
                  成为了教育数字化转型的重要推动者。
                </p>
                <p>
                  未来，我们将继续秉承&ldquo;做最懂学校的教育科技公司&rdquo;的使命，
                  不断创新产品和服务，为中国教育事业的发展贡献力量。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              使命愿景与价值观
            </h2>
            <p className="text-xl text-gray-600">
              我们的核心理念指引着公司的发展方向
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">
                  公司使命
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  做最懂学校的教育科技公司，用技术推动教育进步，
                  让每一所学校都能享受到数字化转型带来的便利。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">
                  公司愿景
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  成为中国基础教育数字化转型的领导者，
                  为构建智慧教育生态系统贡献力量。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">
                  核心理念
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  教育管理场景驱动，以实际需求为导向，
                  提供真正有价值的数字化解决方案。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
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
              资质荣誉与合作伙伴
            </h2>
            <p className="text-xl text-gray-600">
              获得行业认可，与优秀伙伴携手前行
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">资质荣誉</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">国家高新技术企业认证</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">软件企业认证</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">ISO9001质量管理体系认证</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">信息安全等级保护三级认证</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">教育科技创新奖</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-500 mr-3" />
                  <span className="text-gray-700">优秀教育信息化服务商</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">合作伙伴</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{partner.name}</div>
                          <div className="text-sm text-gray-600">{partner.type}</div>
                        </div>
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              团队介绍
            </h2>
            <p className="text-xl text-blue-100">
              教育+科技复合型团队，专业实力值得信赖
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
                <div className="text-lg font-semibold mb-1">技术人员占比</div>
                <div className="text-sm text-blue-200">专业技术团队</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">60%</div>
                <div className="text-lg font-semibold mb-1">教育背景人员</div>
                <div className="text-sm text-blue-200">深度理解教育</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">5年+</div>
                <div className="text-lg font-semibold mb-1">平均从业经验</div>
                <div className="text-sm text-blue-200">经验丰富</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">本科以上学历</div>
                <div className="text-sm text-blue-200">高素质团队</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-blue-100 mb-8">
              我们的团队由来自教育行业和科技行业的专业人士组成，
              既懂教育又懂技术，能够真正理解学校的需求并提供专业的解决方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="/careers">加入我们</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
