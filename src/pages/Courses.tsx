import { useState } from 'react'
import { courses } from '../data/mockData'
import Footer from '../components/Footer'

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case '初级': return 'bg-emerald-600/30 text-emerald-400'
      case '中级': return 'bg-blue-600/30 text-blue-400'
      case '高级': return 'bg-violet-600/30 text-violet-400'
      default: return 'bg-gray-600/30 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">课程中心</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="/" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">首页</a>
            <a href="/courses" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg">课程中心</a>
            <a href="/practice-center" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">实战中心</a>
            <a href="/training-projects" className="px-4 py-2 bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 rounded-lg transition-colors">专栏学习</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">探索课程</h2>
          <p className="text-slate-400">从入门到精通，掌握Python数据分析技能</p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-slate-700/30 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
              type="text"
              placeholder="搜索课程..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-500"
            />
            </div>
            <div className="w-full md:w-48">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="all">所有难度</option>
                <option value="初级">初级</option>
                <option value="中级">中级</option>
                <option value="高级">高级</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Course List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden border border-slate-700/30 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.cover_image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-500">{course.duration} 小时</span>
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{course.description}</p>
                <a 
                  href={`/courses/${course.id}`} 
                  className="block w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
                >
                  查看详情
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-slate-400">没有找到符合条件的课程</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}