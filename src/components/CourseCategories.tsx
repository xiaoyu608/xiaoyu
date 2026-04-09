import { courseCategories } from '../data/mockData'

const CourseCategories = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">课程分类</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {courseCategories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="font-medium text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseCategories