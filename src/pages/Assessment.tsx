import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { courses } from '../data/mockData'

// 模拟测评数据
const assessmentData = {
  1: {
    id: 1,
    title: "Python数据分析基础测评",
    description: "本测评包含10道题目，测试你对Python数据分析基础的掌握程度。",
    duration: 60, // 分钟
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "以下哪个库是Python中用于数据分析的核心库？",
        options: [
          { id: "A", text: "NumPy" },
          { id: "B", text: "Pandas" },
          { id: "C", text: "Matplotlib" },
          { id: "D", text: "Scikit-learn" }
        ],
        correctAnswer: "B"
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Pandas中用于创建数据框的函数是？",
        options: [
          { id: "A", text: "pd.array()" },
          { id: "B", text: "pd.DataFrame()" },
          { id: "C", text: "pd.series()" },
          { id: "D", text: "pd.create()" }
        ],
        correctAnswer: "B"
      },
      {
        id: 3,
        type: "true-false",
        question: "NumPy是Python中用于数值计算的库。",
        options: [
          { id: "A", text: "正确" },
          { id: "B", text: "错误" }
        ],
        correctAnswer: "A"
      }
    ]
  }
}

export default function Assessment() {
  const { courseId } = useParams<{ courseId: string }>()
  const currentCourseId = parseInt(courseId || '1')
  const course = courses.find(c => c.id === currentCourseId) || courses[0]
  const assessment = assessmentData[currentCourseId] || assessmentData[1]
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(assessment.duration * 60) // 转换为秒
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = assessment.questions[currentQuestionIndex]

  // 倒计时
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !showResults) {
      handleSubmit()
    }
  }, [timeLeft, showResults])

  const handleAnswerChange = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    
    // 计算得分
    setTimeout(() => {
      let correctCount = 0
      assessment.questions.forEach(question => {
        if (answers[question.id] === question.correctAnswer) {
          correctCount++
        }
      })
      const finalScore = Math.round((correctCount / assessment.questions.length) * 100)
      setScore(finalScore)
      setShowResults(true)
      setIsSubmitting(false)
    }, 1000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{course.title} - 测评结果</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-100 mb-4">
                <span className="text-4xl font-bold text-blue-600">{score}%</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">测评完成！</h2>
              <p className="text-gray-600">
                你答对了 {Object.values(answers).filter((ans, idx) => ans === assessment.questions[idx].correctAnswer).length} / {assessment.questions.length} 道题
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">答题详情</h3>
              <div className="space-y-4">
                {assessment.questions.map((question, idx) => {
                  const userAnswer = answers[question.id]
                  const isCorrect = userAnswer === question.correctAnswer
                  return (
                    <div key={question.id} className={`p-4 border rounded-md ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <h4 className="font-medium text-gray-800 mb-2">{idx + 1}. {question.question}</h4>
                      <div className="space-y-2 mb-2">
                        {question.options.map(option => (
                          <div key={option.id} className="flex items-center">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option.id}
                              checked={userAnswer === option.id}
                              disabled
                              className="mr-2"
                            />
                            <label className={`${userAnswer === option.id ? 'font-medium' : ''} ${option.id === question.correctAnswer ? 'text-green-600' : ''} ${userAnswer === option.id && !isCorrect ? 'text-red-600' : ''}`}>
                              {option.id}. {option.text}
                            </label>
                          </div>
                        ))}
                      </div>
                      <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? '回答正确！' : `正确答案：${question.correctAnswer}`}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href={`/courses/${currentCourseId}`}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                返回课程详情
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{course.title} - 测评</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">{assessment.title}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-800 mr-2">时间剩余：</span>
                <span className="text-sm font-bold text-red-600">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-sm font-medium text-gray-800">
                问题 {currentQuestionIndex + 1} / {assessment.questions.length}
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{assessment.description}</p>
          
          {/* Question Progress */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${(currentQuestionIndex + 1) / assessment.questions.length * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Question Content */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">{currentQuestion.question}</h3>
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <div key={option.id} className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option.id}
                    checked={answers[currentQuestion.id] === option.id}
                    onChange={() => handleAnswerChange(option.id)}
                    className="mr-3"
                  />
                  <label className="text-gray-800 cursor-pointer">
                    {option.id}. {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-md transition-colors ${currentQuestionIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              上一题
            </button>
            {currentQuestionIndex === assessment.questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-md transition-colors ${isSubmitting ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {isSubmitting ? '提交中...' : '提交测评'}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                下一题
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}