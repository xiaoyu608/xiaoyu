import { useState } from 'react'
import { useAuth } from '../lib/auth'

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

const getDifficultyColor = (difficulty: string) => {
  switch(difficulty) {
    case '初级': return 'bg-emerald-600/30 text-emerald-400'
    case '中级': return 'bg-blue-600/30 text-blue-400'
    case '高级': return 'bg-violet-600/30 text-violet-400'
    default: return 'bg-gray-600/30 text-gray-400'
  }
}

export default function Achievements() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('achievements')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">🏆</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">成就系统</p>
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
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">成就系统</h2>
          <p className="text-slate-400">记录您的学习旅程</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 p-1 rounded-xl backdrop-blur-sm flex">
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'achievements' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
            >
              成就
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'badges' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
            >
              徽章
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'leaderboard' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
            >
              排行榜
            </button>
          </div>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg border border-slate-700/30 p-6">
          {activeTab === 'achievements' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-6">我的成就</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-6 rounded-xl border transition-all ${achievement.unlocked ? 'border-blue-500/30 bg-blue-900/20' : 'border-slate-700/50 bg-slate-700/30 opacity-60'}`}
                  >
                    <div className={`text-4xl mb-4 ${achievement.unlocked ? '' : 'grayscale'}`}>{achievement.icon}</div>
                    <h3 className="font-semibold text-white mb-2">{achievement.name}</h3>
                    <p className="text-sm text-slate-400 mb-3">{achievement.description}</p>
                    <span className={`px-3 py-1 text-xs rounded-full ${getDifficultyColor(achievement.difficulty)}`}>
                      {achievement.difficulty}
                    </span>
                    {!achievement.unlocked && (
                      <div className="mt-3 text-sm text-slate-500">
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
              <h2 className="text-xl font-semibold text-white mb-6">我的徽章</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`p-6 rounded-xl border transition-all ${badge.earned ? 'border-blue-500/30 bg-blue-900/20' : 'border-slate-700/50 bg-slate-700/30 opacity-60'}`}
                  >
                    <div className={`text-4xl mb-4 ${badge.earned ? '' : 'grayscale'}`}>{badge.icon}</div>
                    <h3 className="font-semibold text-white mb-2">{badge.name}</h3>
                    <p className="text-sm text-slate-400 mb-3">{badge.description}</p>
                    <span className={`px-3 py-1 text-xs rounded-full ${getDifficultyColor(badge.level)}`}>
                      {badge.level}
                    </span>
                    {!badge.earned && (
                      <div className="mt-3 text-sm text-slate-500">
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
              <h2 className="text-xl font-semibold text-white mb-6">排行榜</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">排名</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">用户名</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">分数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((item) => (
                      <tr key={item.rank} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                        <td className="px-4 py-3">
                          <span className={`font-bold ${item.rank === 1 ? 'text-yellow-400' : item.rank === 2 ? 'text-slate-400' : item.rank === 3 ? 'text-orange-400' : 'text-slate-500'}`}>
                            {item.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white">{item.name}</td>
                        <td className="px-4 py-3 text-blue-400 font-medium">{item.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 p-4 bg-blue-900/30 rounded-xl border border-blue-500/30">
                <h3 className="font-semibold text-white mb-2">我的排名</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mr-4">
                    {user?.user_metadata?.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="font-medium text-white">{user?.user_metadata?.name || user?.email}</p>
                    <p className="text-sm text-slate-400">排名: 第12名 | 分数: 780</p>
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