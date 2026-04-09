import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

// 模拟学习进度数据
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

// 模拟最近活动数据
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">个人中心</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {user?.user_metadata?.name?.charAt(0) || 'U'}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{user?.user_metadata?.name || user?.email}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('progress')}
                  className={`w-full px-4 py-3 text-left rounded-md transition-colors ${activeTab === 'progress' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                >
                  学习进度
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`w-full px-4 py-3 text-left rounded-md transition-colors ${activeTab === 'achievements' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                >
                  我的成就
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full px-4 py-3 text-left rounded-md transition-colors ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                >
                  账户设置
                </button>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-3 text-left rounded-md transition-colors text-red-600 hover:bg-red-50"
                >
                  退出登录
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'progress' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">学习进度</h2>
                  
                  {/* Overall Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">总体学习进度</span>
                      <span className="text-blue-600 font-medium">47%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                  </div>
                  
                  {/* Course Progress */}
                  <div className="mb-8">
                    <h3 className="font-medium text-gray-800 mb-4">课程进度</h3>
                    <div className="space-y-4">
                      {learningProgress.map((course) => (
                        <div key={course.id}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-800">{course.courseTitle}</span>
                            <span className="text-gray-600">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">最近访问: {course.lastAccessed}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Activities */}
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4">最近活动</h3>
                    <div className="space-y-3">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            {activity.type === 'course' ? '📚' : activity.type === 'practice' ? '✏️' : '📝'}
                          </div>
                          <div>
                            <p className="text-gray-800">{activity.description}</p>
                            <p className="text-xs text-gray-500">{activity.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'achievements' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">我的成就</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl mb-2">🏆</div>
                      <h3 className="font-medium text-gray-800">初学者</h3>
                      <p className="text-sm text-gray-600">完成第一个课程</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl mb-2">🌟</div>
                      <h3 className="font-medium text-gray-800">进阶者</h3>
                      <p className="text-sm text-gray-600">完成5个课程</p>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg text-center opacity-60">
                      <div className="text-3xl mb-2">💎</div>
                      <h3 className="font-medium text-gray-800">专家</h3>
                      <p className="text-sm text-gray-600">完成10个课程</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <h3 className="font-medium text-gray-800">练习达人</h3>
                      <p className="text-sm text-gray-600">完成50个练习</p>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg text-center opacity-60">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-medium text-gray-800">测评高手</h3>
                      <p className="text-sm text-gray-600">测评平均分90分以上</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg text-center">
                      <div className="text-3xl mb-2">🔥</div>
                      <h3 className="font-medium text-gray-800">坚持不懈</h3>
                      <p className="text-sm text-gray-600">连续学习7天</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <a 
                      href="/achievements" 
                      className="text-blue-600 hover:underline"
                    >
                      查看全部成就
                    </a>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">账户设置</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3">个人信息</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                          <input
                            type="text"
                            defaultValue={user?.user_metadata?.name || ''}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                          <input
                            type="email"
                            defaultValue={user?.email || ''}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3">密码设置</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">旧密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">新密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">确认新密码</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-3">通知设置</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">课程更新通知</span>
                          <input type="checkbox" checked className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">练习提醒</span>
                          <input type="checkbox" checked className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">测评提醒</span>
                          <input type="checkbox" checked className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
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