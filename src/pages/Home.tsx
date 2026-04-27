import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-950 text-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Navigation */}
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
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-700/30 backdrop-blur-sm rounded-full mb-6">
              <span className="text-purple-200 text-sm font-medium">数据分析专家</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
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
                href="/courses" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-md hover:from-purple-500 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
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
      </div>
      
      {/* My Courses Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Python基础课程 */}
            <a href="/learn/1/1" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/30 hover:bg-white/15 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-700/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🐍</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-100 mb-2">Python基础课程</h3>
              <p className="text-purple-300 mb-4">掌握Python编程语言的基础知识和语法</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-400">6 章节</span>
                <span className="px-3 py-1 bg-purple-700/50 text-purple-100 rounded-full text-sm">入门</span>
              </div>
            </a>
            
            {/* Python数据分析基础 */}
            <a href="/learn/2/1" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/30 hover:bg-white/15 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-700/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-100 mb-2">Python数据分析基础</h3>
              <p className="text-purple-300 mb-4">学习Python数据分析的基本概念和工具</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-400">6 章节</span>
                <span className="px-3 py-1 bg-purple-700/50 text-purple-100 rounded-full text-sm">进阶</span>
              </div>
            </a>
            
            {/* 数据可视化 */}
            <a href="/courses" className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-purple-500/30 hover:bg-white/15 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-700/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-purple-100 mb-2">数据可视化</h3>
              <p className="text-purple-300 mb-4">学习如何使用Python创建数据可视化图表</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-400">5 章节</span>
                <span className="px-3 py-1 bg-purple-700/50 text-purple-100 rounded-full text-sm">进阶</span>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/courses" 
              className="inline-block px-6 py-3 bg-transparent border-2 border-purple-400 text-white font-semibold rounded-md hover:bg-purple-800/30 transition-all"
            >
              查看全部课程
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-purple-900/80 backdrop-blur-md border-t border-purple-800 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <a href="/" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <div className="text-2xl mb-1">🏠</div>
            <span className="text-xs">首页</span>
          </a>
          <a href="/courses" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <div className="text-2xl mb-1">📚</div>
            <span className="text-xs">课程</span>
          </a>
          <a href="/achievements" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <div className="text-2xl mb-1">🏆</div>
            <span className="text-xs">成就</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <div className="text-2xl mb-1">👤</div>
            <span className="text-xs">我的</span>
          </a>
        </div>
      </div>
    </div>
  );
}