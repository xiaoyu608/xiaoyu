import { useParams } from 'react-router-dom'
import { courses } from '../data/mockData'

// 模拟章节数据
const courseLessons = {
  1: [ // Python基础课程
    {
      id: 1,
      title: "Python简介",
      duration: 15,
      type: "video"
    },
    {
      id: 2,
      title: "Python语法基础",
      duration: 45,
      type: "video"
    },
    {
      id: 3,
      title: "数据类型和变量",
      duration: 60,
      type: "video"
    },
    {
      id: 4,
      title: "控制流语句",
      duration: 60,
      type: "video"
    },
    {
      id: 5,
      title: "函数和模块",
      duration: 45,
      type: "video"
    },
    {
      id: 6,
      title: "实战练习",
      duration: 90,
      type: "exercise"
    }
  ],
  2: [ // Python数据分析基础
    {
      id: 1,
      title: "课程介绍",
      duration: 15,
      type: "video"
    },
    {
      id: 2,
      title: "Python基础回顾",
      duration: 45,
      type: "video"
    },
    {
      id: 3,
      title: "NumPy库入门",
      duration: 60,
      type: "video"
    },
    {
      id: 4,
      title: "Pandas库使用",
      duration: 60,
      type: "video"
    },
    {
      id: 5,
      title: "数据可视化基础",
      duration: 45,
      type: "video"
    },
    {
      id: 6,
      title: "实战练习",
      duration: 90,
      type: "exercise"
    }
  ]
}

// 默认章节数据
const defaultLessons = [
  {
    id: 1,
    title: "课程介绍",
    duration: 15,
    type: "video"
  },
  {
    id: 2,
    title: "课程内容概述",
    duration: 45,
    type: "video"
  },
  {
    id: 3,
    title: "核心概念讲解",
    duration: 60,
    type: "video"
  },
  {
    id: 4,
    title: "实践应用",
    duration: 60,
    type: "video"
  },
  {
    id: 5,
    title: "总结与展望",
    duration: 45,
    type: "video"
  },
  {
    id: 6,
    title: "实战练习",
    duration: 90,
    type: "exercise"
  }
]

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>()
  const courseId = parseInt(id || '1')
  const course = courses.find(c => c.id === courseId) || courses[0]
  const lessons = courseLessons[courseId] || defaultLessons

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">课程详情</p>
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course Info */}
          <div className="lg:w-2/3">
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden mb-6">
              <div className="h-64 overflow-hidden">
                <img 
                  src={course.cover_image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${course.difficulty === '初级' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : course.difficulty === '中级' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-violet-500/20 text-violet-400 border border-violet-500/30'}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-sm text-slate-400">{course.duration} 小时</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-slate-300 mb-6">{course.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`/learn/${course.id}/1`} 
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
                  >
                    开始学习
                  </a>
                  <button className="px-6 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-colors">
                    加入收藏
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course Curriculum */}
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6">
              <h2 className="text-xl font-bold text-white mb-4">课程大纲</h2>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-600/30 text-blue-400 rounded-full mr-4">
                      {lesson.type === 'video' ? '🎥' : '✏️'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">{lesson.title}</h3>
                    </div>
                    <div className="text-sm text-slate-400">{lesson.duration} 分钟</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">课程信息</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-slate-400">难度</span>
                  <span className="font-medium text-white">{course.difficulty}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">时长</span>
                  <span className="font-medium text-white">{course.duration} 小时</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">章节数</span>
                  <span className="font-medium text-white">{lessons.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">练习数</span>
                  <span className="font-medium text-white">{lessons.filter(l => l.type === 'exercise').length}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-xl border border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">讲师信息</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mr-4">
                  👨‍🏫
                </div>
                <div>
                  <h4 className="font-medium text-white">张老师</h4>
                  <p className="text-sm text-slate-400">数据分析专家</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                拥有10年数据分析经验，曾在多家知名企业担任数据分析师，擅长Python数据分析和可视化。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}