import { useState } from 'react'
import { courses } from '../data/mockData'

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-purple-100 mb-8">课程中心</h1>
        
        {/* Search and Filter */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-purple-500/30 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
              type="text"
              placeholder="搜索课程..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-100"
            />
            </div>
            <div className="w-full md:w-48">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-100"
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
            <div key={course.id} className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-purple-500/30 hover:bg-white/15 transition-all transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.cover_image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${course.difficulty === '初级' ? 'bg-green-900/50 text-green-200' : course.difficulty === '中级' ? 'bg-blue-900/50 text-blue-200' : 'bg-purple-900/50 text-purple-200'}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-sm text-purple-300">{course.duration} 小时</span>
                </div>
                <h3 className="font-semibold text-purple-100 mb-2">{course.title}</h3>
                <p className="text-sm text-purple-300 mb-4 line-clamp-2">{course.description}</p>
                <a 
                  href={`/courses/${course.id}`} 
                  className="block w-full py-2 bg-purple-600 text-white text-center rounded-md hover:bg-purple-500 transition-colors"
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
            <p className="text-purple-300">没有找到符合条件的课程</p>
          </div>
        )}
      </div>
    </div>
  )
}