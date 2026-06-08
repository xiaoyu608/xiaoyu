import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

const practiceProjects = [
  {
    id: 1,
    title: '电商销售数据分析',
    description: '分析电商平台销售数据，提取关键业务指标，为决策提供数据支持',
    difficulty: '中级',
    duration: 4,
    tags: ['Pandas', 'NumPy', '数据可视化'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=E-commerce%20sales%20data%20analysis%20dashboard%2C%20professional%20business%20intelligence&image_size=landscape_16_9',
    completed: 328,
    rating: 4.8
  },
  {
    id: 2,
    title: '用户行为分析报告',
    description: '基于用户行为日志，分析用户画像和行为路径，优化产品体验',
    difficulty: '高级',
    duration: 6,
    tags: ['Matplotlib', '用户画像', '行为分析'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=User%20behavior%20analysis%20dashboard%2C%20user%20journey%20visualization&image_size=landscape_16_9',
    completed: 215,
    rating: 4.7
  },
  {
    id: 3,
    title: '财务报表自动化',
    description: '使用Python自动化生成财务报表，提升工作效率',
    difficulty: '初级',
    duration: 3,
    tags: ['Excel', '自动化', '报表生成'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Financial%20report%20automation%2C%20spreadsheet%20data%20visualization&image_size=landscape_16_9',
    completed: 456,
    rating: 4.9
  },
  {
    id: 4,
    title: '股票数据分析',
    description: '分析股票历史数据，构建简单的投资分析模型',
    difficulty: '高级',
    duration: 8,
    tags: ['时间序列', '数据分析', '投资分析'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Stock%20market%20data%20analysis%2C%20candlestick%20charts%2C%20financial%20analytics&image_size=landscape_16_9',
    completed: 189,
    rating: 4.6
  },
  {
    id: 5,
    title: '客户满意度调研分析',
    description: '分析客户满意度调查问卷数据，识别改进机会',
    difficulty: '初级',
    duration: 3,
    tags: ['问卷分析', '统计分析', '数据报告'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Customer%20satisfaction%20survey%20analysis%2C%20feedback%20analytics&image_size=landscape_16_9',
    completed: 367,
    rating: 4.7
  },
  {
    id: 6,
    title: '销售预测模型',
    description: '基于历史销售数据，构建销售预测模型',
    difficulty: '中级',
    duration: 5,
    tags: ['机器学习', '预测', '回归分析'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sales%20forecasting%20model%2C%20predictive%20analytics%2C%20machine%20learning&image_size=landscape_16_9',
    completed: 245,
    rating: 4.8
  }
]

const skillsProgress = [
  { name: 'Python基础', progress: 85 },
  { name: '数据分析', progress: 72 },
  { name: '数据可视化', progress: 65 },
  { name: '机器学习', progress: 45 }
]

export default function PracticeCenter() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState<typeof practiceProjects[0] | null>(null)
  const [filterDifficulty, setFilterDifficulty] = useState('all')

  const filteredProjects = practiceProjects.filter(project => 
    filterDifficulty === 'all' || project.difficulty === filterDifficulty
  )

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case '初级': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      case '中级': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case '高级': return 'bg-violet-500/20 text-violet-400 border-violet-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">实战中心</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-slate-300">欢迎, {user.user_metadata?.name || user.email}</span>
            )}
            <a href="/courses" className="text-slate-300 hover:text-white transition-colors">返回课程</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">挑战实战项目</h2>
                <p className="text-slate-300">通过真实业务场景，提升数据分析技能</p>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 py-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400">6</div>
                  <div className="text-sm text-slate-400">实战项目</div>
                </div>
                <div className="text-center px-6 py-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400">1,499</div>
                  <div className="text-sm text-slate-400">已完成</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Skills Progress */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span>📊</span> 技能进度
              </h3>
              <div className="space-y-4">
                {skillsProgress.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span>🔍</span> 难度筛选
              </h3>
              <div className="space-y-2">
                {['all', '初级', '中级', '高级'].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setFilterDifficulty(diff)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      filterDifficulty === diff 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {diff === 'all' ? '全部难度' : diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
              <span>🚀</span> 实战项目列表
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-slate-700/30 hover:border-blue-500/50 transition-all cursor-pointer group"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1 text-slate-400">
                        <span>⏱️</span> {project.duration}小时
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <span>⭐</span> {project.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800/95 backdrop-blur-xl rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-slate-400">{selectedProject.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm border ${getDifficultyColor(selectedProject.difficulty)}`}>
                  {selectedProject.difficulty}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-xl font-bold text-blue-400">{selectedProject.duration}</div>
                  <div className="text-xs text-slate-400">小时</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-xl font-bold text-cyan-400">{selectedProject.completed}</div>
                  <div className="text-xs text-slate-400">已完成</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-xl font-bold text-yellow-400">{selectedProject.rating}</div>
                  <div className="text-xs text-slate-400">评分</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">技能标签</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-blue-600/30 text-blue-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
                  onClick={() => {
                    setSelectedProject(null)
                    navigate(`/training-projects/${selectedProject.id}`)
                  }}
                >
                  开始挑战
                </button>
                <button 
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}