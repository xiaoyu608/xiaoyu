import { courses } from '../data/mockData'

const RecommendedCourses = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">推荐课程</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.cover_image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`px-2 py-1 text-xs rounded-full ${course.difficulty === '初级' ? 'bg-green-100 text-green-800' : course.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                  {course.difficulty}
                </span>
                <span className="text-sm text-gray-600">{course.duration} 小时</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
              <a 
                href={`/courses/${course.id}`} 
                className="block w-full py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors"
              >
                开始学习
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedCourses