import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'
import CourseCategories from '../components/CourseCategories'
import RecommendedCourses from '../components/RecommendedCourses'
import AchievementShowcase from '../components/AchievementShowcase'

export default function Home() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">数据分析在线教育平台</h1>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">首页</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">课程</a>
            <a href="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors">成就</a>
            {user ? (
              <>
                <a href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">个人中心</a>
                <span className="text-gray-700">欢迎, {user.user_metadata?.name || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <a 
                  href="/login" 
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  登录
                </a>
                <a 
                  href="/register" 
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  注册
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">数据分析在线教育平台</h2>
          <p className="text-xl mb-8">专为商务数据分析与应用专业学生设计的在线学习系统</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/courses" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors">
              浏览课程
            </a>
            <a href="/register" className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition-colors">
              免费注册
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Course Categories */}
        <CourseCategories />
        
        {/* Recommended Courses */}
        <RecommendedCourses />
        
        {/* Achievement Showcase */}
        <AchievementShowcase />
        
        {/* CTA Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">开始你的数据分析之旅</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            加入我们的平台，学习实用的数据分析技能，提升你的职业竞争力
          </p>
          <a href="/register" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors inline-block">
            立即注册
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">数据分析在线教育平台</h3>
              <p className="text-gray-400">专为商务数据分析与应用专业学生设计</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
                <li><a href="/courses" className="text-gray-400 hover:text-white transition-colors">课程</a></li>
                <li><a href="/achievements" className="text-gray-400 hover:text-white transition-colors">成就</a></li>
                <li><a href="/profile" className="text-gray-400 hover:text-white transition-colors">个人中心</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="text-gray-400">邮箱：contact@example.com</p>
              <p className="text-gray-400">电话：123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 数据分析在线教育平台. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}