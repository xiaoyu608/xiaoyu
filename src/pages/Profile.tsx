import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

const learningProgress = [
  {
    id: 1,
    courseTitle: "Python数据分析基础",
    progress: 75,
    lastAccessed: "2026-04-09"
  },
  {
    id: 2,
    courseTitle: "商务数据分析实战",
    progress: 45,
    lastAccessed: "2026-04-08"
  },
  {
    id: 3,
    courseTitle: "数据可视化进阶",
    progress: 20,
    lastAccessed: "2026-04-07"
  }
]

const recentActivities = [
  {
    id: 1,
    type: "course",
    description: "开始学习 Python数据分析基础",
    timestamp: "2026-04-09 10:30"
  },
  {
    id: 2,
    type: "practice",
    description: "完成了 Python基础练习",
    timestamp: "2026-04-08 15:45"
  },
  {
    id: 3,
    type: "assessment",
    description: "参加了 Python数据分析基础测评",
    timestamp: "2026-04-07 14:20"
  }
]

export default function Profile() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('progress')

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">个人中心</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">首页</a>
            <a href="/courses" className="text-slate-300 hover:text-white transition-colors">课程</a>
            <a href="/practice-center" className="text-slate-300 hover:text-white transition-colors">实战中心</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg p-6 sticky top-20 border border-slate-700/30">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold">{user?.user_metadata?.name?.charAt(0) || 'U'}</span>
                </div>
                <h2 className="text-xl font-semibold text-white">{user?.user_metadata?.name || user?.email}</h2>
                <p className="text-slate-400 text-sm">{user?.email}</p>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`w-full px-4 py-3 text-left rounded-lg transition-all ${activeTab === 'progress' ? 'bg-blue-600/30 text-blue-300 border-l-4 border-blue-500' : 'hover:bg-slate-700/50 text-slate-300'}`}
                >
                  学习进度
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`w-full px-4 py-3 text-left rounded-lg transition-all ${activeTab === 'achievements' ? 'bg-blue-600/30 text-blue-300 border-l-4 border-blue-500' : 'hover:bg-slate-700/50 text-slate-300'}`}
                >
                  我的成就
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full px-4 py-3 text-left rounded-lg transition-all ${activeTab === 'settings' ? 'bg-blue-600/30 text-blue-300 border-l-4 border-blue-500' : 'hover:bg-slate-700/50 text-slate-300'}`}
                >
                  账户设置
                </button>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-3 text-left rounded-lg transition-all text-red-400 hover:bg-red-600/20"
                >
                  退出登录
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg border border-slate-700/30 p-6">
              {activeTab === 'progress' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">学习进度</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-white">总体学习进度</span>
                      <span className="text-blue-400 font-medium">47%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-medium text-white mb-4">课程进度</h3>
                    <div className="space-y-5">
                      {learningProgress.map((course) => (
                        <div key={course.id} className="bg-slate-700/30 rounded-xl p-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-white">{course.courseTitle}</span>
                            <span className="text-slate-400">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <p className="text-xs text-slate-500 mt-2">最近访问: {course.lastAccessed}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-4">最近活动</h3>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start bg-slate-700/30 rounded-xl p-4">
                          <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center mr-4">
                            {activity.type === 'course' ? '📚' : activity.type === 'practice' ? '✏️' : '📝'}
                          </div>
                          <div>
                            <p className="text-white">{activity.description}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">我的成就</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-5 border border-blue-500/30 bg-blue-900/20 rounded-xl text-center">
                      <div className="text-4xl mb-3">🏆</div>
                      <h3 className="font-medium text-white">初学者</h3>
                      <p className="text-sm text-slate-400">完成第一个课程</p>
                    </div>
                    <div className="p-5 border border-blue-500/30 bg-blue-900/20 rounded-xl text-center">
                      <div className="text-4xl mb-3">🌟</div>
                      <h3 className="font-medium text-white">进阶者</h3>
                      <p className="text-sm text-slate-400">完成5个课程</p>
                    </div>
                    <div className="p-5 border border-slate-700/50 bg-slate-700/30 rounded-xl text-center opacity-60">
                      <div className="text-4xl mb-3 grayscale">💎</div>
                      <h3 className="font-medium text-slate-400">专家</h3>
                      <p className="text-sm text-slate-500">完成10个课程</p>
                    </div>
                    <div className="p-5 border border-blue-500/30 bg-blue-900/20 rounded-xl text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <h3 className="font-medium text-white">练习达人</h3>
                      <p className="text-sm text-slate-400">完成50个练习</p>
                    </div>
                    <div className="p-5 border border-slate-700/50 bg-slate-700/30 rounded-xl text-center opacity-60">
                      <div className="text-4xl mb-3 grayscale">🎯</div>
                      <h3 className="font-medium text-slate-400">测评高手</h3>
                      <p className="text-sm text-slate-500">测评平均分90分以上</p>
                    </div>
                    <div className="p-5 border border-blue-500/30 bg-blue-900/20 rounded-xl text-center">
                      <div className="text-4xl mb-3">🔥</div>
                      <h3 className="font-medium text-white">坚持不懈</h3>
                      <p className="text-sm text-slate-400">连续学习7天</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <a 
                      href="/achievements" 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      查看全部成就 →
                    </a>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">账户设置</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-white mb-3">个人信息</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">姓名</label>
                          <input
                            type="text"
                            defaultValue={user?.user_metadata?.name || ''}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">邮箱</label>
                          <input
                            type="email"
                            defaultValue={user?.email || ''}
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-3">密码设置</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">旧密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">新密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">确认新密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-3">通知设置</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-slate-300">课程更新通知</span>
                          <input type="checkbox" checked className="w-5 h-5 text-blue-600 border-slate-600 rounded focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-slate-300">练习提醒</span>
                          <input type="checkbox" checked className="w-5 h-5 text-blue-600 border-slate-600 rounded focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <span className="text-slate-300">测评提醒</span>
                          <input type="checkbox" checked className="w-5 h-5 text-blue-600 border-slate-600 rounded focus:ring-blue-500" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all font-medium">
                        保存设置
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}