import { achievements } from '../data/mockData'

const AchievementShowcase = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">成就系统</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-3">{achievement.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{achievement.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
            <span className={`px-2 py-1 text-xs rounded-full ${achievement.difficulty === '初级' ? 'bg-green-100 text-green-800' : achievement.difficulty === '中级' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
              {achievement.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AchievementShowcase