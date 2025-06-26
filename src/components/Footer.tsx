import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">屹力教育</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              做最懂学校的教育科技公司，专注基础教育数字化转型，为学校提供场景驱动的解决方案。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">解决方案</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  校长解决方案
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  教师解决方案
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  学生支持方案
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">公司信息</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-white transition-colors">
                  客户案例
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-gray-300">
              <li>商务合作：business@yili.edu</li>
              <li>人才招聘：hr@yili.edu</li>
              <li>客服电话：400-123-4567</li>
              <li>工作时间：周一至周五 9:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 屹力教育科技有限公司. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
