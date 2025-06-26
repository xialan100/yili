'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { 
  Mail, 
 
  MapPin, 
  Clock, 
  Send, 
 
  Users, 
  MessageSquare,

  ArrowRight,
  Globe,
  Shield,
  Headphones
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "提交成功",
        description: "我们已收到您的咨询，将在24小时内回复您。",
      })

      setFormData({
        name: '',
        organization: '',
        position: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      })
    } catch {
      toast({
        title: "提交失败",
        description: "请稍后重试或直接联系我们。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: '商务合作',
      description: '产品咨询、合作洽谈',
      contact: 'business@yili.edu',
      action: 'mailto:business@yili.edu'
    },
    {
      icon: Users,
      title: '人才招聘',
      description: '简历投递、职位咨询',
      contact: 'hr@yili.edu',
      action: 'mailto:hr@yili.edu'
    },
    {
      icon: Headphones,
      title: '客服电话',
      description: '技术支持、售后服务',
      contact: '400-123-4567',
      action: 'tel:400-123-4567'
    }
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: '公司地址',
      content: '上海市浦东新区张江高科技园区科苑路399号'
    },
    {
      icon: Clock,
      title: '工作时间',
      content: '周一至周五 9:00-18:00'
    },
    {
      icon: Globe,
      title: '服务区域',
      content: '全国范围内提供服务'
    },
    {
      icon: Shield,
      title: '服务承诺',
      content: '24小时内响应，专业技术支持'
    }
  ]

  const inquiryTypes = [
    '产品咨询',
    '技术支持',
    '商务合作',
    '售后服务',
    '招聘咨询',
    '其他'
  ]

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              联系<span className="text-orange-400">我们</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              我们随时为您提供专业的服务和支持
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              无论您是想了解我们的产品和服务，还是寻求技术支持，
              或者希望与我们建立合作关系，我们都期待与您沟通。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              联系方式
            </h2>
            <p className="text-xl text-gray-600">
              选择最适合您的联系方式，我们将及时回复
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-lg font-semibold text-blue-600 mb-4">
                      {method.contact}
                    </div>
                    <Button asChild className="w-full">
                      <Link href={method.action}>
                        立即联系 <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                在线咨询
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                填写下面的表单，我们将在24小时内回复您的咨询。
                请尽可能详细地描述您的需求，以便我们为您提供更准确的建议。
              </p>

              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">姓名 *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="请输入您的姓名"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">职位</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          placeholder="请输入您的职位"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">单位/学校 *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="请输入您的单位或学校名称"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">邮箱 *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="请输入您的邮箱地址"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">电话</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="请输入您的联系电话"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">咨询类型 *</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="请选择咨询类型" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">详细需求 *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="请详细描述您的需求或问题，我们将为您提供专业的建议..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>提交中...</>
                      ) : (
                        <>
                          提交咨询 <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                常见问题
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                以下是一些客户经常询问的问题，或许能帮助您快速找到答案。
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">如何开始使用屹力教育的产品？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      您可以通过联系我们的商务团队开始咨询。我们会安排专业顾问了解您的具体需求，
                      并为您制定个性化的解决方案。整个过程包括需求分析、方案设计、系统部署和培训支持。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">产品的技术支持如何？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      我们提供全方位的技术支持服务，包括7×24小时在线客服、远程技术支持、
                      现场服务、用户培训等。我们承诺在收到技术支持请求后24小时内响应。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">系统的安全性如何保障？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      我们采用多层安全防护机制，包括数据加密传输、权限管理、安全审计等。
                      系统通过了信息安全等级保护三级认证，确保您的数据安全可靠。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">是否支持定制化开发？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      是的，我们支持根据学校的具体需求进行定制化开发。
                      我们的技术团队会深入了解您的业务流程，提供最适合的解决方案。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">如何获取产品演示？</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      您可以通过联系我们的商务团队预约产品演示。我们可以提供在线演示或现场演示，
                      让您直观了解产品功能和使用体验。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">还有其他问题？</h3>
                    <p className="text-gray-600 mb-4">
                      如果您没有找到想要的答案，请随时联系我们。
                      我们的专业团队将为您提供详细的解答。
                    </p>
                    <Button asChild variant="outline">
                      <Link href="mailto:business@yili.edu">
                        立即咨询 <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            期待与您合作
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            让我们一起推动教育数字化转型，创造更美好的教育未来
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="mailto:business@yili.edu">
                立即联系 <Mail className="ml-2 w-4 h-4" />
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
