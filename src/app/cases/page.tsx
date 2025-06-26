'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Building2, 
  Calendar, 
  Users, 
  CheckCircle, 
  Search,
  Filter,
  ArrowRight,
  Star,
  Award
} from 'lucide-react'
import { adminApi, type ClientCase } from '@/lib/api'

export default function CasesPage() {
  const [cases, setCases] = useState<ClientCase[]>([])
  const [filteredCases, setFilteredCases] = useState<ClientCase[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await adminApi.getClientCases()
        setCases(data)
        setFilteredCases(data)
      } catch (error) {
        console.error('Failed to fetch client cases:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCases()
  }, [])

  useEffect(() => {
    let filtered = cases

    if (searchTerm) {
      filtered = filtered.filter(case_ =>
        case_.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.project_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        case_.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedIndustry !== 'all') {
      filtered = filtered.filter(case_ => case_.industry === selectedIndustry)
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(case_ => case_.status === selectedStatus)
    }

    setFilteredCases(filtered)
  }, [cases, searchTerm, selectedIndustry, selectedStatus])

  const industries = [...new Set(cases.map(case_ => case_.industry))]
  const statuses = [...new Set(cases.map(case_ => case_.status))]

  const featuredCases = [
    {
      title: '华二前滩学校',
      subtitle: 'K12教育数字化转型标杆',
      description: '通过智能化管理系统，实现了教学、行政、学生管理的全面数字化转型，成为上海市数字化校园建设的典型案例。',
      achievements: ['管理效率提升60%', '家校满意度98%', '获市级数字化校园奖'],
      image: '/images/cases/huaer-qiantan.jpg'
    },
    {
      title: '双丁路幼儿园',
      subtitle: '学前教育智能管理典范',
      description: '专为幼儿园设计的管理系统，涵盖教学、安全、家校沟通等各个环节，为幼儿提供更安全、更优质的教育环境。',
      achievements: ['安全事故零发生', '家长满意度99%', '获区级示范园称号'],
      image: '/images/cases/shuangding-kindergarten.jpg'
    },
    {
      title: '上海第二轻工业学校',
      subtitle: '职业教育数字化创新',
      description: '针对职业教育特点，打造专业化的教学管理和学生发展支持平台，提升职业教育质量和学生就业竞争力。',
      achievements: ['就业率提升15%', '技能竞赛获奖率翻倍', '获职教创新奖'],
      image: '/images/cases/shanghai-light-industry.jpg'
    }
  ]

  const testimonials = [
    {
      content: "屹力教育的解决方案真正理解学校的实际需求，帮助我们实现了教育管理的数字化转型。系统稳定可靠，操作简单，大大提升了我们的工作效率。",
      author: "张明华",
      position: "校长",
      school: "华二前滩学校",
      rating: 5
    },
    {
      content: "作为幼儿园，我们最关心的是孩子的安全和教育质量。屹力教育的系统帮助我们建立了完善的安全管理体系，家长们都很放心。",
      author: "李小红",
      position: "园长",
      school: "双丁路幼儿园",
      rating: 5
    },
    {
      content: "职业教育有其特殊性，屹力教育的团队深入了解我们的需求，提供了非常专业的解决方案。学生和老师的反馈都很好。",
      author: "王建国",
      position: "副校长",
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
              客户<span className="text-orange-400">案例</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              真实案例，见证教育数字化转型成果
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              500+学校的成功实践，覆盖K12教育、学前教育、职业教育等各个领域，
              为不同类型的学校提供了专业的数字化解决方案。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              典型案例展示
            </h2>
            <p className="text-xl text-gray-600">
              深度合作的成功案例，展现数字化转型的实际效果
            </p>
          </div>

          <div className="space-y-16">
            {featuredCases.map((case_, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className="mb-4">典型案例</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{case_.title}</h3>
                  <p className="text-xl text-blue-600 mb-6">{case_.subtitle}</p>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {case_.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">主要成果</h4>
                    {case_.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center">
                        <Award className="w-5 h-5 text-orange-500 mr-3" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    查看详细案例 <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <Building2 className="w-24 h-24 text-blue-600" />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {case_.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {case_.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              客户合作目录
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              浏览我们的完整客户案例库
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="搜索客户名称、项目标题..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="选择行业" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有行业</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="项目状态" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">所有状态</SelectItem>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">加载中...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCases.map((case_) => (
                <Card key={case_.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{case_.industry}</Badge>
                      <Badge variant={case_.status === '已完成' ? 'default' : 'outline'}>
                        {case_.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {case_.client_name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {case_.project_title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {case_.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(case_.start_date).getFullYear()}年
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {case_.project_type}
                      </div>
                    </div>
                    {case_.achievements && case_.achievements.length > 0 && (
                      <div className="space-y-1 mb-4">
                        {case_.achievements.slice(0, 2).map((achievement, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                    <Button variant="outline" className="w-full">
                      查看详情
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!loading && filteredCases.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">没有找到符合条件的案例</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              客户证言
            </h2>
            <p className="text-xl text-gray-600">
              听听合作伙伴的真实反馈
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
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.school}</div>
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
            成为我们的下一个成功案例
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            让我们一起推进您学校的数字化转型
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">
                联系我们 <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/solutions">了解解决方案</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
