import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { courses } from '../data/mockData'

// 模拟章节内容
const courseLessonContent = {
  1: { // Python基础课程
    1: {
      title: "Python简介",
      content: `
        <h3>欢迎来到Python基础课程</h3>
        <p>本课程将帮助你掌握Python编程语言的基础知识和语法，为你打开编程世界的大门。</p>
        <h4>课程目标</h4>
        <ul>
          <li>了解Python的历史和应用领域</li>
          <li>掌握Python的基本语法</li>
          <li>学习Python的数据类型和变量</li>
          <li>能够编写简单的Python程序</li>
        </ul>
        <h4>为什么学习Python？</h4>
        <p>Python是一种简单易学、功能强大的编程语言，广泛应用于数据分析、人工智能、Web开发等领域。</p>
      `
    },
    2: {
      title: "Python语法基础",
      content: `
        <h3>Python语法基础</h3>
        <p>在本节中，我们将学习Python的基本语法规则。</p>
        <h4>主要内容</h4>
        <ul>
          <li>Python的缩进规则</li>
          <li>注释的使用</li>
          <li>基本输入输出</li>
          <li>代码结构</li>
        </ul>
        <h4>示例代码</h4>
        <pre><code>print("Hello, World!")
name = input("请输入你的名字：")
print("你好，" + name)</code></pre>
      `
    },
    3: {
      title: "数据类型和变量",
      content: `
        <h3>数据类型和变量</h3>
        <p>本节将介绍Python中的基本数据类型和变量。</p>
        <h4>主要数据类型</h4>
        <ul>
          <li>整数 (int)</li>
          <li>浮点数 (float)</li>
          <li>字符串 (str)</li>
          <li>布尔值 (bool)</li>
        </ul>
        <h4>变量的使用</h4>
        <pre><code># 变量赋值
age = 18
height = 1.75
name = "张三"
is_student = True

# 变量使用
print("年龄：", age)
print("身高：", height)</code></pre>
      `
    },
    4: {
      title: "控制流语句",
      content: `
        <h3>控制流语句</h3>
        <p>本节将学习Python中的控制流语句，包括条件语句和循环语句。</p>
        <h4>条件语句</h4>
        <pre><code>if age >= 18:
    print("你是成年人")
elif age >= 13:
    print("你是青少年")
else:
    print("你是儿童")</code></pre>
        <h4>循环语句</h4>
        <pre><code># for循环
for i in range(5):
    print(i)

# while循环
count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
      `
    },
    5: {
      title: "函数和模块",
      content: `
        <h3>函数和模块</h3>
        <p>本节将学习Python中的函数和模块。</p>
        <h4>函数定义和使用</h4>
        <pre><code>def greet(name):
    """打招呼函数"""
    print("你好，" + name)

# 调用函数
greet("张三")</code></pre>
        <h4>模块的导入和使用</h4>
        <pre><code># 导入整个模块
import math

# 导入特定函数
from math import sqrt

# 使用模块中的函数
print(math.pi)
print(sqrt(16))</code></pre>
      `
    },
    6: {
      title: "实战练习",
      content: `
        <h3>实战练习</h3>
        <p>本节将通过实际练习巩固所学知识。</p>
        <h4>练习1：计算器</h4>
        <p>编写一个简单的计算器程序，实现加减乘除功能。</p>
        <h4>练习2：猜数字游戏</h4>
        <p>编写一个猜数字游戏，随机生成一个1-100的数字，让用户猜，直到猜对为止。</p>
        <h4>练习3：温度转换</h4>
        <p>编写一个温度转换程序，将摄氏度转换为华氏度，反之亦然。</p>
      `
    }
  },
  2: { // Python数据分析基础
    1: {
      title: "课程介绍",
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
}

// 模拟章节列表
const courseLessons = {
  1: [ // Python基础课程
    {
      id: 1,
      title: "Python简介",
      duration: 15,
      type: "lesson",
      completed: true
    },
    {
      id: 2,
      title: "Python语法基础",
      duration: 45,
      type: "lesson",
      completed: false
    },
    {
      id: 3,
      title: "数据类型和变量",
      duration: 60,
      type: "lesson",
      completed: false
    },
    {
      id: 4,
      title: "控制流语句",
      duration: 60,
      type: "lesson",
      completed: false
    },
    {
      id: 5,
      title: "函数和模块",
      duration: 45,
      type: "lesson",
      completed: false
    },
    {
      id: 6,
      title: "实战练习",
      duration: 90,
      type: "exercise",
      completed: false
    }
  ],
  2: [ // Python数据分析基础
    {
      id: 1,
      title: "课程介绍",
      duration: 15,
      type: "lesson",
      completed: true
    },
    {
      id: 2,
      title: "Python基础回顾",
      duration: 45,
      type: "lesson",
      completed: false
    },
    {
      id: 3,
      title: "NumPy库入门",
      duration: 60,
      type: "lesson",
      completed: false
    },
    {
      id: 4,
      title: "Pandas库使用",
      duration: 60,
      type: "lesson",
      completed: false
    },
    {
      id: 5,
      title: "数据可视化基础",
      duration: 45,
      type: "lesson",
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
}

// 默认章节列表
const defaultLessons = [
  {
    id: 1,
    title: "课程介绍",
    duration: 15,
    type: "lesson",
    completed: true
  },
  {
    id: 2,
    title: "课程内容概述",
    duration: 45,
    type: "lesson",
    completed: false
  },
  {
    id: 3,
    title: "核心概念讲解",
    duration: 60,
    type: "lesson",
    completed: false
  },
  {
    id: 4,
    title: "实践应用",
    duration: 60,
    type: "lesson",
    completed: false
  },
  {
    id: 5,
    title: "总结与展望",
    duration: 45,
    type: "lesson",
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
  const lessons = courseLessons[currentCourseId] || defaultLessons
  const currentLesson = courseLessonContent[currentCourseId]?.[currentLessonId] || courseLessonContent[1][1]
  const lessonInfo = lessons.find(l => l.id === currentLessonId) || lessons[0]
  
  const [completed, setCompleted] = useState(lessonInfo.completed)
  const [progress, setProgress] = useState(0)
  const [code, setCode] = useState('print("Hello, World!")')
  const [output, setOutput] = useState('')

  const handleMarkComplete = () => {
    setCompleted(!completed)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value))
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const runCode = () => {
    // 模拟代码执行
    setOutput(`执行结果:\n${code.includes('print') ? code.replace('print("', '').replace('")', '') : '代码执行成功'}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Course Outline */}
          <div className="lg:w-1/4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-4 sticky top-4 border border-purple-500/30">
              <h2 className="text-lg font-semibold text-purple-100 mb-4">{course.title}</h2>
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <a 
                    key={lesson.id} 
                    href={`/learn/${currentCourseId}/${lesson.id}`}
                    className={`flex items-center p-3 rounded-md transition-colors ${lesson.id === currentLessonId ? 'bg-purple-600/30 border-l-4 border-purple-400' : 'hover:bg-white/5'}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 bg-white/10">
                      {lesson.completed ? '✅' : lesson.type === 'exercise' ? '✏️' : '📖'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-purple-100">{lesson.title}</h3>
                      <p className="text-xs text-purple-300">{lesson.duration} 分钟</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-purple-500/30">
              {/* Lesson Content */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-purple-100 mb-6">{currentLesson.title}</h1>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-purple-300">学习进度</span>
                    <span className="text-sm font-medium text-purple-100">{progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-purple-700/50 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                {/* Content */}
                <div className="mb-8" dangerouslySetInnerHTML={{ __html: currentLesson.content.replace(/<h3/g, '<h3 class="text-xl font-semibold text-purple-100 mb-3"').replace(/<h4/g, '<h4 class="text-lg font-medium text-purple-200 mb-2"').replace(/<p/g, '<p class="text-purple-200 mb-4"').replace(/<ul/g, '<ul class="list-disc pl-5 mb-4"').replace(/<li/g, '<li class="text-purple-200 mb-1"').replace(/<pre/g, '<pre class="bg-purple-900/50 p-4 rounded-md mb-4"').replace(/<code/g, '<code class="text-purple-100 font-mono"') }} />
                
                {/* Code Editor */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-purple-100 mb-3">编程环境</h3>
                  <div className="bg-purple-900/50 rounded-md overflow-hidden border border-purple-500/30">
                    <div className="flex items-center justify-between px-4 py-2 bg-purple-800/50">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-purple-200">Python 3.9</span>
                    </div>
                    <textarea
                      value={code}
                      onChange={handleCodeChange}
                      className="w-full p-4 bg-transparent text-purple-100 font-mono resize-none min-h-[200px]"
                      placeholder="在此输入Python代码..."
                    ></textarea>
                    <div className="px-4 py-2 bg-purple-800/50 flex justify-end">
                      <button
                        onClick={runCode}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
                      >
                        运行代码
                      </button>
                    </div>
                  </div>
                  {output && (
                    <div className="mt-4 bg-purple-900/50 rounded-md p-4 border border-purple-500/30">
                      <h4 className="text-sm font-medium text-purple-200 mb-2">输出结果：</h4>
                      <pre className="text-purple-100 font-mono whitespace-pre-wrap">{output}</pre>
                    </div>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={handleMarkComplete}
                    className={`px-4 py-2 rounded-md transition-colors ${completed ? 'bg-purple-600/50 text-purple-200' : 'bg-purple-600 text-white'}`}
                  >
                    {completed ? '已完成' : '标记为完成'}
                  </button>
                  <div className="flex space-x-4">
                    {currentLessonId > 1 && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId - 1}`}
                        className="px-4 py-2 bg-purple-700/50 text-purple-100 rounded-md hover:bg-purple-600/50 transition-colors"
                      >
                        上一课
                      </a>
                    )}
                    {currentLessonId < lessons.length && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId + 1}`}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
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