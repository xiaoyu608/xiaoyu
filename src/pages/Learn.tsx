import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { courses } from '../data/mockData'

// 模拟章节内容
const lessonContent = {
  1: {
    title: "课程介绍",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `
      <h3>欢迎来到Python数据分析基础课程</h3>
      <p>本课程将帮助你掌握Python数据分析的基本概念和工具，为你打开数据分析的大门。</p>
      <h4>课程目标</h4>
      <ul>
        <li>掌握Python基础语法</li>
        <li>学习NumPy和Pandas库的使用</li>
        <li>了解数据可视化技术</li>
        <li>能够独立完成简单的数据分析任务</li>
      </ul>
      <h4>课程安排</h4>
      <p>本课程共分为6个章节，包括理论学习和实践练习。</p>
    `
  },
  2: {
    title: "Python基础回顾",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `
      <h3>Python基础回顾</h3>
      <p>在开始数据分析之前，我们需要回顾一下Python的基础知识。</p>
      <h4>主要内容</h4>
      <ul>
        <li>Python数据类型</li>
        <li>控制流语句</li>
        <li>函数定义和使用</li>
        <li>面向对象编程基础</li>
      </ul>
    `
  }
}

// 模拟章节列表
const lessons = [
  {
    id: 1,
    title: "课程介绍",
    duration: 15,
    type: "video",
    completed: true
  },
  {
    id: 2,
    title: "Python基础回顾",
    duration: 45,
    type: "video",
    completed: false
  },
  {
    id: 3,
    title: "NumPy库入门",
    duration: 60,
    type: "video",
    completed: false
  },
  {
    id: 4,
    title: "Pandas库使用",
    duration: 60,
    type: "video",
    completed: false
  },
  {
    id: 5,
    title: "数据可视化基础",
    duration: 45,
    type: "video",
    completed: false
  },
  {
    id: 6,
    title: "实战练习",
    duration: 90,
    type: "exercise",
    completed: false
  }
]

export default function Learn() {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>()
  const currentCourseId = parseInt(courseId || '1')
  const currentLessonId = parseInt(lessonId || '1')
  
  const course = courses.find(c => c.id === currentCourseId) || courses[0]
  const currentLesson = lessonContent[currentLessonId] || lessonContent[1]
  const lessonInfo = lessons.find(l => l.id === currentLessonId) || lessons[0]
  
  const [completed, setCompleted] = useState(lessonInfo.completed)
  const [progress, setProgress] = useState(0)

  const handleMarkComplete = () => {
    setCompleted(!completed)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Course Outline */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">{course.title}</h2>
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <a 
                    key={lesson.id} 
                    href={`/learn/${currentCourseId}/${lesson.id}`}
                    className={`flex items-center p-3 rounded-md transition-colors ${lesson.id === currentLessonId ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3">
                      {lesson.completed ? '✅' : lesson.type === 'video' ? '🎥' : '✏️'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800">{lesson.title}</h3>
                      <p className="text-xs text-gray-600">{lesson.duration} 分钟</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900">
                <iframe 
                  src={currentLesson.videoUrl} 
                  title={currentLesson.title} 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Lesson Content */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{currentLesson.title}</h1>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">学习进度</span>
                    <span className="text-sm font-medium text-gray-800">{progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                {/* Content */}
                <div className="mb-6" dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
                
                {/* Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleMarkComplete}
                    className={`px-4 py-2 rounded-md transition-colors ${completed ? 'bg-gray-200 text-gray-700' : 'bg-green-600 text-white'}`}
                  >
                    {completed ? '已完成' : '标记为完成'}
                  </button>
                  <div className="flex space-x-4">
                    {currentLessonId > 1 && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId - 1}`}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        上一课
                      </a>
                    )}
                    {currentLessonId < lessons.length && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId + 1}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        下一课
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}