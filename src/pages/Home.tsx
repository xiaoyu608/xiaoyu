import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'
import RecommendedCourses from '../components/RecommendedCourses'

export default function Home() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-purple-950 text-white">
      <nav className="bg-purple-900/80 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">张子瑜的主页</h1>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-purple-200 hover:text-white transition-colors">首页</a>
            <a href="/courses" className="text-purple-200 hover:text-white transition-colors">课程</a>
            <a href="/achievements" className="text-purple-200 hover:text-white transition-colors">成就</a>
            {user ? (
              <>
                <a href="/profile" className="text-purple-200 hover:text-white transition-colors">个人中心</a>
                <span className="text-purple-200">欢迎, {user.user_metadata?.name || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors"
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <a 
                  href="/login" 
                  className="px-3 py-1 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors"
                >
                  登录
                </a>
                <a 
                  href="/register" 
                  className="px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
                >
                  注册
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
        
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-700/30 backdrop-blur-sm rounded-full mb-6">
              <span className="text-purple-200 text-sm font-medium">数据分析专家</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              张子瑜的主页
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8">
              欢迎来到张子瑜的主页
            </p>
            <p className="text-xl text-purple-300 mb-12 max-w-2xl mx-auto">
              开发一款基于Python的数据分析在线教育平台
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#courses" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-md hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
              >
                浏览课程
              </a>
              <a 
                href="/register" 
                className="px-8 py-4 bg-transparent border-2 border-purple-400 text-white font-semibold rounded-md hover:bg-purple-800/30 transition-all"
              >
                免费注册
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-purple-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-800/50 backdrop-blur-sm rounded-full mb-6">
              <span className="text-purple-300 text-sm font-medium">学习模块</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              我的课程
            </h2>
            <p className="text-purple-300 max-w-2xl mx-auto">
              探索我的Python数据分析课程，从基础到高级，助你掌握数据分析技能
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RecommendedCourses />
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#6b21a8_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-purple-900 py-12 border-t border-purple-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">张子瑜的主页</h3>
              <p className="text-purple-300">开发Python数据分析在线教育平台</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-purple-300 hover:text-white transition-colors">首页</a></li>
                <li><a href="/courses" className="text-purple-300 hover:text-white transition-colors">课程</a></li>
                <li><a href="/achievements" className="text-purple-300 hover:text-white transition-colors">成就</a></li>
                <li><a href="/profile" className="text-purple-300 hover:text-white transition-colors">个人中心</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">联系我们</h3>
              <p className="text-purple-300">邮箱：contact@example.com</p>
              <p className="text-purple-300">电话：123-456-7890</p>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-400">
            <p>© 2026 张子瑜的主页. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}