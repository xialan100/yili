import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Users, GraduationCap, ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function HomePage() {
  const solutions = [
    {
      icon: Building2,
      title: '校长解决方案',
      description: '为学校管理者提供全面的数字化管理工具，提升管理效率和决策质量。',
      features: ['智能数据分析', '决策支持系统', '资源优化配置']
    },
    {
      icon: Users,
      title: '教师解决方案', 
      description: '帮助教师提升教学效果，减轻工作负担，促进专业发展。',
      features: ['教学资源库', '智能备课助手', '学情分析工具']
    },
    {
      icon: GraduationCap,
      title: '学生支持方案',
      description: '为学生提供个性化学习支持，促进全面发展。',
      features: ['个性化学习', '成长记录档案', '综合素质评价']
    }
  ]

  const testimonials = [
    {
      content: "屹力教育的解决方案真正理解学校的实际需求，帮助我们实现了教育管理的数字化转型。",
      author: "张校长",
      school: "华二前滩学校",
      rating: 5
    },
    {
      content: "系统操作简单，功能实用，大大提升了我们的工作效率。",
      author: "李主任",
      school: "双丁路幼儿园",
      rating: 5
    },
    {
      content: "专业的技术团队，贴心的服务支持，值得信赖的合作伙伴。",
      author: "王老师",
      school: "上海第二轻工业学校",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              教育数字化，不止于系统，
              <span className="text-orange-400">而是场景</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              500+学校落地经验，覆盖强校工程、课后服务、教师发展等场景
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/solutions">了解解决方案</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/cases">查看客户案例</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">联系我们</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              解决方案速览
            </h2>
            <p className="text-xl text-gray-600">
              针对不同角色，提供场景化的数字化解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
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
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
              客户案例预览
            </h2>
            <p className="text-xl text-gray-600">
              真实案例，见证教育数字化转型成果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">K12教育</Badge>
                <CardTitle>华二前滩学校</CardTitle>
                <CardDescription>
                  全面数字化管理平台建设
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  通过智能化管理系统，实现了教学、行政、学生管理的全面数字化转型。
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  项目已完成
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">学前教育</Badge>
                <CardTitle>双丁路幼儿园</CardTitle>
                <CardDescription>
                  幼儿园智能管理系统
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  专为幼儿园设计的管理系统，涵盖教学、安全、家校沟通等各个环节。
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  项目已完成
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2">职业教育</Badge>
                <CardTitle>上海第二轻工业学校</CardTitle>
                <CardDescription>
                  职业教育数字化平台
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  针对职业教育特点，打造专业化的教学管理和学生发展支持平台。
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  项目已完成
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/cases">
                查看更多案例 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              用户证言
            </h2>
            <p className="text-xl text-gray-600">
              听听合作伙伴怎么说
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            做最懂学校的教育科技公司
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            专注基础教育数字化转型，为学校提供场景驱动的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/about">了解我们</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/careers">加入我们</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            立即开始合作
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            联系我们，了解如何为您的学校提供定制化解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                联系我们 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="tel:400-123-4567">
                电话咨询：400-123-4567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
