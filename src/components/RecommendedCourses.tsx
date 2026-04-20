import { courses } from '../data/mockData'

const RecommendedCourses = () => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id} className="bg-purple-900/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-purple-500/30 transition-all transform hover:scale-105 border border-purple-800">
          <div className="h-48 overflow-hidden">
            <img 
              src={course.cover_image} 
              alt={course.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className={`px-2 py-1 text-xs rounded-full ${course.difficulty === '初级' ? 'bg-purple-700/80 text-purple-200' : course.difficulty === '中级' ? 'bg-purple-600/80 text-white' : 'bg-purple-500/80 text-white'}`}>
                {course.difficulty}
              </span>
              <span className="text-sm text-purple-300">{course.duration} 小时</span>
            </div>
            <h3 className="font-semibold text-white mb-2">{course.title}</h3>
            <p className="text-sm text-purple-300 mb-4 line-clamp-2">{course.description}</p>
            <a 
              href={`/courses/${course.id}`} 
              className="block w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center rounded-md hover:from-purple-500 hover:to-indigo-500 transition-all"
            >
              开始学习
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default RecommendedCourses