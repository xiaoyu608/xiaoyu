import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { courses } from '../data/mockData'

// 模拟练习数据
const practiceData = {
  1: {
    id: 1,
    title: "Python基础练习",
    description: "完成以下Python基础练习，巩固你的Python基础语法知识。",
    tasks: [
      {
        id: 1,
        title: "计算两数之和",
        description: "编写一个函数，接收两个参数，返回它们的和。",
        starterCode: "def add(a, b):\n    # 请在这里编写代码\n    pass",
        testCases: [
          { input: "add(1, 2)", expected: 3 },
          { input: "add(5, 10)", expected: 15 },
          { input: "add(-1, 1)", expected: 0 }
        ]
      },
      {
        id: 2,
        title: "判断回文串",
        description: "编写一个函数，判断一个字符串是否为回文串。",
        starterCode: "def is_palindrome(s):\n    # 请在这里编写代码\n    pass",
        testCases: [
          { input: "is_palindrome('level')", expected: true },
          { input: "is_palindrome('hello')", expected: false },
          { input: "is_palindrome('racecar')", expected: true }
        ]
      }
    ]
  }
}

export default function Practice() {
  const { courseId } = useParams<{ courseId: string }>()
  const currentCourseId = parseInt(courseId || '1')
  const course = courses.find(c => c.id === currentCourseId) || courses[0]
  const practice = practiceData[currentCourseId] || practiceData[1]
  
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)
  const [code, setCode] = useState(practice.tasks[currentTaskIndex].starterCode)
  const [result, setResult] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [score, setScore] = useState(0)

  const currentTask = practice.tasks[currentTaskIndex]

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const handleRunCode = () => {
    setIsRunning(true)
    setResult(null)
    
    // 模拟代码执行
    setTimeout(() => {
      const passedTests = Math.floor(Math.random() * currentTask.testCases.length) + 1
      const newScore = Math.round((passedTests / currentTask.testCases.length) * 100)
      setScore(newScore)
      setResult(`执行结果：通过 ${passedTests} / ${currentTask.testCases.length} 个测试用例\n得分：${newScore}分`)
      setIsRunning(false)
    }, 1000)
  }

  const handleNextTask = () => {
    if (currentTaskIndex < practice.tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1)
      setCode(practice.tasks[currentTaskIndex + 1].starterCode)
      setResult(null)
      setScore(0)
    }
  }

  const handlePrevTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(currentTaskIndex - 1)
      setCode(practice.tasks[currentTaskIndex - 1].starterCode)
      setResult(null)
      setScore(0)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{course.title} - 练习</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{practice.title}</h2>
          <p className="text-gray-600 mb-6">{practice.description}</p>
          
          {/* Task Progress */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-800">任务 {currentTaskIndex + 1} / {practice.tasks.length}</span>
              <span className="text-sm font-medium text-gray-800">得分: {score}分</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${(currentTaskIndex + 1) / practice.tasks.length * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Task Content */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">{currentTask.title}</h3>
            <p className="text-gray-600 mb-4">{currentTask.description}</p>
            
            {/* Code Editor */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-800">代码编辑器</span>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className={`px-4 py-2 rounded-md transition-colors ${isRunning ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  {isRunning ? '运行中...' : '运行代码'}
                </button>
              </div>
              <textarea
                value={code}
                onChange={handleCodeChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm h-64"
                spellCheck={false}
              ></textarea>
            </div>
            
            {/* Result */}
            {result && (
              <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h4 className="text-sm font-medium text-gray-800 mb-2">执行结果</h4>
                <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">{result}</pre>
              </div>
            )}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevTask}
              disabled={currentTaskIndex === 0}
              className={`px-4 py-2 rounded-md transition-colors ${currentTaskIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              上一个任务
            </button>
            <button
              onClick={handleNextTask}
              disabled={currentTaskIndex === practice.tasks.length - 1}
              className={`px-4 py-2 rounded-md transition-colors ${currentTaskIndex === practice.tasks.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              {currentTaskIndex === practice.tasks.length - 1 ? '完成练习' : '下一个任务'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}