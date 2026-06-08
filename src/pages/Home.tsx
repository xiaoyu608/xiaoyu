import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Home() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"></div>
      
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-xl shadow-lg fixed w-full z-50 border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">🐍</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg">首页</a>
            <a href="/courses" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">课程</a>
            <a href="/training-projects" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">专栏学习</a>
            <a href="/practice-center" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">实战中心</a>
            {user ? (
              <>
                <a href="/profile" className="text-slate-300 hover:text-white transition-colors">个人中心</a>
                <span className="text-slate-300">欢迎, {user.user_metadata?.name || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                >
                  退出
                </button>
              </>
            ) : (
              <>
                <a 
                  href="/login" 
                  className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
                >
                  登录
                </a>
                <a 
                  href="/register" 
                  className="px-3 py-1 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors"
                >
                  注册
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
              <span className="text-blue-200 text-sm font-medium">数据分析专家</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Python项目学习网站
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-8">
              欢迎来到Python项目学习网站
            </p>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              开发一款基于Python的数据分析在线教育平台
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/courses" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                浏览课程
              </a>
              <a 
                href="/practice-center" 
                className="px-8 py-4 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-800/30 transition-all"
              >
                实战中心
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-slate-400">精品课程</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-slate-400">实战项目</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">1000+</div>
              <div className="text-slate-400">学习人次</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-slate-400">好评率</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Courses Section */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Python基础课程 */}
            <a href="/learn/1/1" className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-blue-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/50 transition-colors">
                <span className="text-2xl">🐍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Python基础课程</h3>
              <p className="text-slate-400 mb-4">掌握Python编程语言的基础知识和语法</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">6 章节</span>
                <span className="px-3 py-1 bg-emerald-600/30 text-emerald-400 rounded-full text-sm">入门</span>
              </div>
            </a>
            
            {/* Python数据分析基础 */}
            <a href="/learn/2/1" className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-cyan-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-600/50 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Python数据分析基础</h3>
              <p className="text-slate-400 mb-4">学习Python数据分析的基本概念和工具</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">6 章节</span>
                <span className="px-3 py-1 bg-blue-600/30 text-blue-400 rounded-full text-sm">进阶</span>
              </div>
            </a>
            
            {/* 数据可视化 */}
            <a href="/courses" className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-violet-600/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-600/50 transition-colors">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">数据可视化</h3>
              <p className="text-slate-400 mb-4">学习如何使用Python创建数据可视化图表</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">5 章节</span>
                <span className="px-3 py-1 bg-violet-600/30 text-violet-400 rounded-full text-sm">进阶</span>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/courses" 
              className="inline-block px-6 py-3 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-800/30 transition-all"
            >
              查看全部课程
            </a>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="py-20 relative z-10 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">平台特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎓</span>
              </div>
              <h3 className="font-semibold text-white mb-2">专业课程体系</h3>
              <p className="text-slate-400 text-sm">系统化的课程设计，从入门到精通</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="w-12 h-12 bg-cyan-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💻</span>
              </div>
              <h3 className="font-semibold text-white mb-2">在线编程环境</h3>
              <p className="text-slate-400 text-sm">无需安装，浏览器即可编写运行代码</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="w-12 h-12 bg-violet-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">实战项目演练</h3>
              <p className="text-slate-400 text-sm">真实业务场景，学以致用</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 text-center">
              <div className="w-12 h-12 bg-emerald-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="font-semibold text-white mb-2">成就激励系统</h3>
              <p className="text-slate-400 text-sm">学习成就徽章，激励持续进步</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">开始你的数据分析之旅</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">掌握Python数据分析技能，开启职业新篇章</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/register" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
              >
                免费注册
              </a>
              <a 
                href="/practice-center" 
                className="px-8 py-4 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-800/30 transition-all"
              >
                浏览实战项目
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-t border-slate-700/50 z-50 md:hidden">
        <div className="flex justify-around items-center py-3">
          <a href="/" className="flex flex-col items-center text-slate-300 hover:text-blue-400 transition-colors">
            <div className="text-2xl mb-1">🏠</div>
            <span className="text-xs">首页</span>
          </a>
          <a href="/courses" className="flex flex-col items-center text-slate-300 hover:text-blue-400 transition-colors">
            <div className="text-2xl mb-1">📚</div>
            <span className="text-xs">课程</span>
          </a>
          <a href="/practice-center" className="flex flex-col items-center text-slate-300 hover:text-blue-400 transition-colors">
            <div className="text-2xl mb-1">⚡</div>
            <span className="text-xs">实战</span>
          </a>
          <a href="/training-projects" className="flex flex-col items-center text-blue-400 transition-colors">
            <div className="text-2xl mb-1">🚀</div>
            <span className="text-xs">专栏</span>
          </a>
          <a href="/profile" className="flex flex-col items-center text-slate-300 hover:text-blue-400 transition-colors">
            <div className="text-2xl mb-1">👤</div>
            <span className="text-xs">我的</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}