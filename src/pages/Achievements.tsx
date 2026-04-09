import { useState } from 'react'
import { useAuth } from '../lib/auth'

// 模拟成就数据
const achievements = [
  {
    id: 1,
    name: "初学者",
    description: "完成第一个课程",
    icon: "🏆",
    difficulty: "初级",
    unlocked: true
  },
  {
    id: 2,
    name: "进阶者",
    description: "完成5个课程",
    icon: "🌟",
    difficulty: "中级",
    unlocked: true
  },
  {
    id: 3,
    name: "专家",
    description: "完成10个课程",
    icon: "💎",
    difficulty: "高级",
    unlocked: false
  },
  {
    id: 4,
    name: "练习达人",
    description: "完成50个练习",
    icon: "⚡",
    difficulty: "中级",
    unlocked: true
  },
  {
    id: 5,
    name: "测评高手",
    description: "测评平均分90分以上",
    icon: "🎯",
    difficulty: "高级",
    unlocked: false
  },
  {
    id: 6,
    name: "坚持不懈",
    description: "连续学习7天",
    icon: "🔥",
    difficulty: "初级",
    unlocked: true
  }
]

// 模拟徽章数据
const badges = [
  {
    id: 1,
    name: "Python基础",
    description: "完成Python基础课程",
    icon: "🐍",
    level: "初级",
    earned: true
  },
  {
    id: 2,
    name: "数据分析",
    description: "完成数据分析课程",
    icon: "📊",
    level: "中级",
    earned: true
  },
  {
    id: 3,
    name: "机器学习",
    description: "完成机器学习课程",
    icon: "🤖",
    level: "高级",
    earned: false
  }
]

// 模拟排行榜数据
const leaderboard = [
  {
    rank: 1,
    name: "张三",
    score: 1250
  },
  {
    rank: 2,
    name: "李四",
    score: 1180
  },
  {
    rank: 3,
    name: "王五",
    score: 1050
  },
  {
    rank: 4,
    name: "赵六",
    score: 980
  },
  {
    rank: 5,
    name: "孙七",
    score: 920
  }
]

export default function Achievements() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('achievements')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">成就系统</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-md shadow-sm flex">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              成就
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'badges' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              徽章
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-2 rounded-md transition-colors ${activeTab === 'leaderboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              排行榜
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">我的成就</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-6 rounded-lg border transition-all ${achievement.unlocked ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50 opacity-60'}`}
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{achievement.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${achievement.difficulty === '初级' ? 'bg-green-100 text-green-800' : achievement.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                      {achievement.difficulty}
                    </span>
                    {!achievement.unlocked && (
                      <div className="mt-3 text-sm text-gray-500">
                        未解锁
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'badges' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">我的徽章</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-6 rounded-lg border transition-all ${badge.earned ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50 opacity-60'}`}
                  >
                    <div className="text-4xl mb-4">{badge.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{badge.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${badge.level === '初级' ? 'bg-green-100 text-green-800' : badge.level === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                      {badge.level}
                    </span>
                    {!badge.earned && (
                      <div className="mt-3 text-sm text-gray-500">
                        未获得
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'leaderboard' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">排行榜</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 border-b">排名</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 border-b">用户名</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 border-b">分数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((item) => (
                      <tr key={item.rank} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b">
                          <span className={`font-bold ${item.rank === 1 ? 'text-yellow-500' : item.rank === 2 ? 'text-gray-400' : item.rank === 3 ? 'text-yellow-700' : 'text-gray-600'}`}>
                            {item.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 border-b">{item.name}</td>
                        <td className="px-4 py-3 border-b">{item.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Current User Rank */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-800 mb-2">我的排名</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {user?.user_metadata?.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user?.user_metadata?.name || user?.email}</p>
                    <p className="text-sm text-gray-600">排名: 第12名 | 分数: 780</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}