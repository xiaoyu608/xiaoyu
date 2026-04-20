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
    <div className="min-h-screen bg-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course Info */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="h-64 overflow-hidden">
                <img 
                  src={course.cover_image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${course.difficulty === '初级' ? 'bg-purple-100 text-purple-800' : course.difficulty === '中级' ? 'bg-purple-200 text-purple-900' : 'bg-purple-300 text-purple-900'}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-sm text-purple-700">{course.duration} 小时</span>
                </div>
                <h1 className="text-2xl font-bold text-purple-900 mb-4">{course.title}</h1>
                <p className="text-purple-700 mb-6">{course.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`/learn/${course.id}/1`} 
                    className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors"
                  >
                    开始学习
                  </a>
                  <button className="px-6 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors">
                    加入收藏
                  </button>
                </div>
              </div>
            </div>
            
            {/* Course Curriculum */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-purple-900 mb-4">课程大纲</h2>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center p-3 border border-purple-100 rounded-md hover:bg-purple-50 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mr-4">
                      {lesson.type === 'video' ? '🎥' : '✏️'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-900">{lesson.title}</h3>
                    </div>
                    <div className="text-sm text-purple-700">{lesson.duration} 分钟</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">课程信息</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-purple-700">难度</span>
                  <span className="font-medium text-purple-900">{course.difficulty}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700">时长</span>
                  <span className="font-medium text-purple-900">{course.duration} 小时</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700">章节数</span>
                  <span className="font-medium text-purple-900">{lessons.length}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-purple-700">练习数</span>
                  <span className="font-medium text-purple-900">{lessons.filter(l => l.type === 'exercise').length}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">讲师信息</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  👨‍🏫
                </div>
                <div>
                  <h4 className="font-medium text-purple-900">张老师</h4>
                  <p className="text-sm text-purple-700">数据分析专家</p>
                </div>
              </div>
              <p className="text-sm text-purple-700">
                拥有10年数据分析经验，曾在多家知名企业担任数据分析师，擅长Python数据分析和可视化。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}