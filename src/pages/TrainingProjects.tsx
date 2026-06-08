import { useState } from 'react'

const trainingProjects = [
  {
    id: 1,
    title: '电影评分预测系统',
    description: '基于历史电影数据，构建智能评分预测模型，探索机器学习的魅力',
    difficulty: '中级',
    duration: 8,
    tags: ['Pandas', 'Scikit-learn', '回归分析'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop',
    learning: [
      '掌握数据预处理技术',
      '学习特征工程方法',
      '构建预测模型并评估'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将引导您使用机器学习技术构建一个电影评分预测系统。通过分析历史电影数据，您将学会如何提取特征、训练模型，并评估预测效果。</p>
<h4>项目目标</h4>
<ul>
<li>理解数据预处理的重要性</li>
<li>掌握特征工程方法</li>
<li>学会使用Scikit-learn构建回归模型</li>
<li>掌握模型评估指标</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>数据清洗与预处理</li>
<li>特征选择与转换</li>
<li>线性回归与正则化</li>
<li>模型评估与调优</li>
</ul>`
  },
  {
    id: 2,
    title: '天气数据分析与可视化',
    description: '分析多年天气数据，挖掘气候变化规律，创造精美可视化图表',
    difficulty: '初级',
    duration: 6,
    tags: ['Matplotlib', 'Seaborn', '数据可视化'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop',
    learning: [
      '时间序列数据处理',
      '多维度数据可视化',
      '图表美化和交互'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将带您探索天气数据分析的全过程。您将学会如何处理时间序列数据，并使用Matplotlib和Seaborn创建专业的数据可视化图表。</p>
<h4>项目目标</h4>
<ul>
<li>掌握时间序列数据处理</li>
<li>学会创建各种类型的图表</li>
<li>掌握图表美化技巧</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>Pandas时间序列处理</li>
<li>Matplotlib基础图表</li>
<li>Seaborn高级可视化</li>
<li>图表样式与配色</li>
</ul>`
  },
  {
    id: 3,
    title: '学生成绩分析系统',
    description: '分析学生成绩数据，发现学习规律，为教育决策提供数据支持',
    difficulty: '初级',
    duration: 5,
    tags: ['NumPy', '统计分析', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop',
    learning: [
      '描述性统计分析',
      '相关性分析方法',
      '数据报告撰写'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将引导您使用Python进行学生成绩数据分析。通过实际案例，您将学会如何进行描述性统计分析，并撰写专业的数据报告。</p>
<h4>项目目标</h4>
<ul>
<li>掌握描述性统计分析方法</li>
<li>学会相关性分析</li>
<li>能够撰写专业数据报告</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>NumPy数值计算</li>
<li>Pandas数据处理</li>
<li>统计指标计算</li>
<li>数据报告撰写</li>
</ul>`
  },
  {
    id: 4,
    title: '餐厅订单智能分析',
    description: '挖掘餐厅订单数据，发现爆款菜品，优化经营策略',
    difficulty: '中级',
    duration: 7,
    tags: ['Apriori算法', '关联规则', '业务分析'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    learning: [
      '关联规则挖掘',
      '热销商品分析',
      '经营策略建议'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将使用Apriori算法进行餐厅订单数据分析，发现菜品之间的关联规则，为餐厅经营决策提供数据支持。</p>
<h4>项目目标</h4>
<ul>
<li>理解关联规则挖掘原理</li>
<li>掌握Apriori算法实现</li>
<li>学会分析业务数据</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>Apriori算法原理</li>
<li>频繁项集挖掘</li>
<li>关联规则生成</li>
<li>业务策略分析</li>
</ul>`
  },
  {
    id: 5,
    title: '电商用户画像分析',
    description: '构建精细化用户画像，实现精准营销和个性化推荐',
    difficulty: '高级',
    duration: 10,
    tags: ['聚类分析', '用户画像', '机器学习'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    learning: [
      '用户行为数据处理',
      '聚类算法应用',
      '标签体系构建'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将引导您构建电商用户画像系统。通过聚类分析，您将学会如何将用户分组，并构建标签体系，为精准营销提供支持。</p>
<h4>项目目标</h4>
<ul>
<li>掌握用户行为数据分析</li>
<li>学会聚类算法应用</li>
<li>构建用户标签体系</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>K-Means聚类算法</li>
<li>用户行为分析</li>
<li>标签体系设计</li>
<li>画像应用场景</li>
</ul>`
  },
  {
    id: 6,
    title: '游戏数据分析',
    description: '分析游戏玩家行为数据，优化游戏体验和运营策略',
    difficulty: '中级',
    duration: 8,
    tags: ['玩家行为', '漏斗分析', '数据挖掘'],
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=400&fit=crop',
    learning: [
      '玩家留存分析',
      '付费转化漏斗',
      'AB测试方法'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将带您深入分析游戏玩家行为数据。您将学会如何分析玩家留存率、构建转化漏斗，并设计AB测试方案。</p>
<h4>项目目标</h4>
<ul>
<li>掌握玩家行为分析方法</li>
<li>学会构建转化漏斗</li>
<li>理解AB测试原理</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>留存率计算与分析</li>
<li>漏斗分析方法</li>
<li>AB测试设计</li>
<li>数据驱动决策</li>
</ul>`
  },
  {
    id: 7,
    title: '音乐风格深度分析',
    description: '探索音乐数据特征，发现音乐风格规律，走进音乐数据科学',
    difficulty: '高级',
    duration: 12,
    tags: ['特征提取', '降维分析', '音乐可视化'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop',
    learning: [
      '音频特征提取',
      '降维可视化技术',
      '音乐数据库操作'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将探索音乐数据科学的奥秘。您将学会如何提取音频特征、使用降维技术进行数据可视化，并分析不同音乐风格的特征。</p>
<h4>项目目标</h4>
<ul>
<li>掌握音频特征提取方法</li>
<li>学会降维分析技术</li>
<li>理解音乐风格特征</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>MFCC特征提取</li>
<li>PCA降维分析</li>
<li>t-SNE可视化</li>
<li>音乐风格分类</li>
</ul>`
  },
  {
    id: 8,
    title: '图书推荐系统',
    description: '构建个性化图书推荐引擎，让读者发现更多好书',
    difficulty: '中级',
    duration: 9,
    tags: ['协同过滤', '推荐算法', '相似度计算'],
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=400&fit=crop',
    learning: [
      '推荐系统原理',
      '协同过滤实现',
      '推荐效果评估'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将引导您构建一个图书推荐系统。您将学会协同过滤算法的原理和实现，以及如何评估推荐效果。</p>
<h4>项目目标</h4>
<ul>
<li>理解推荐系统原理</li>
<li>掌握协同过滤算法</li>
<li>学会评估推荐效果</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>基于用户的协同过滤</li>
<li>基于物品的协同过滤</li>
<li>相似度计算方法</li>
<li>推荐效果评估指标</li>
</ul>`
  },
  {
    id: 9,
    title: '空气质量实时分析',
    description: '分析空气污染数据，揭示环境变化趋势，提升环保意识',
    difficulty: '初级',
    duration: 6,
    tags: ['环境数据', '时序分析', '地图可视化'],
    image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&h=400&fit=crop',
    learning: [
      '环境数据获取',
      '污染趋势分析',
      '地理数据可视化'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将引导您分析空气质量数据。您将学会如何获取环境数据、分析污染趋势，并创建地理可视化图表。</p>
<h4>项目目标</h4>
<ul>
<li>掌握环境数据获取方法</li>
<li>学会时序分析技术</li>
<li>创建地理可视化图表</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>API数据获取</li>
<li>时间序列分析</li>
<li>地理数据可视化</li>
<li>趋势预测方法</li>
</ul>`
  },
  {
    id: 10,
    title: '交通事故深度分析',
    description: '分析交通事故数据，发现危险因素，为安全驾驶提供数据支撑',
    difficulty: '高级',
    duration: 11,
    tags: ['分类算法', '风险评估', '地理分析'],
    image: 'https://images.unsplash.com/photo-1449965408869-ebd3fee7fa9b?w=800&h=400&fit=crop',
    learning: [
      '多源数据融合',
      '风险因素识别',
      '空间统计分析'
    ],
    content: `<h3>项目简介</h3>
<p>本项目将深入分析交通事故数据。您将学会如何融合多源数据、识别风险因素，并进行空间统计分析。</p>
<h4>项目目标</h4>
<ul>
<li>掌握多源数据融合方法</li>
<li>学会风险因素识别</li>
<li>理解空间统计分析</li>
</ul>
<h4>技术要点</h4>
<ul>
<li>数据融合技术</li>
<li>分类算法应用</li>
<li>空间分析方法</li>
<li>风险评估模型</li>
</ul>`
  }
]

export default function TrainingProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof trainingProjects[0] | null>(null)
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const filteredProjects = trainingProjects.filter(project => 
    filterDifficulty === 'all' || project.difficulty === filterDifficulty
  )

  const getDifficultyStyle = (difficulty: string) => {
    switch(difficulty) {
      case '初级': 
        return { bg: 'from-emerald-500 to-teal-500', text: 'text-white', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
      case '中级': 
        return { bg: 'from-blue-500 to-indigo-500', text: 'text-white', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' }
      case '高级': 
        return { bg: 'from-violet-500 to-purple-500', text: 'text-white', badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30' }
      default: 
        return { bg: 'from-gray-500 to-gray-600', text: 'text-white', badge: 'bg-gray-500/20 text-gray-400 border-gray-500/30' }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python项目学习网站</h1>
              <p className="text-xs text-slate-400">专栏学习</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">首页</a>
            <a href="/courses" className="text-slate-300 hover:text-white transition-colors">课程</a>
            <a href="/practice-center" className="text-slate-300 hover:text-white transition-colors">实战中心</a>
            <a href="/training-projects" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">专栏学习</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-violet-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-3">专栏学习</h2>
                <p className="text-slate-300 max-w-2xl">
                  10个精选实训项目，涵盖数据分析、机器学习、可视化等多个领域，助您快速提升技能！
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">10</div>
                  <div className="text-sm text-slate-400">精选项目</div>
                </div>
                <div className="text-center px-6 py-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400">3</div>
                  <div className="text-sm text-slate-400">难度等级</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-300 font-medium">难度筛选：</span>
            {['all', '初级', '中级', '高级'].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-5 py-2 rounded-full transition-all ${
                  filterDifficulty === diff 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
                }`}
              >
                {diff === 'all' ? '全部' : diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const style = getDifficultyStyle(project.difficulty)
            return (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-slate-800/60 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 ${hoveredCard === project.id ? 'border-blue-500/50' : 'border-slate-700/50'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full border ${style.badge} text-sm font-medium`}>
                    {project.difficulty}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-1 text-slate-400">
                      <span>⏱️</span> 
                      <span className="text-sm">{project.duration}小时</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <span>📚</span>
                      <span className="text-sm">开始学习 →</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <div className={`absolute bottom-4 left-6 px-4 py-2 rounded-full border ${getDifficultyStyle(selectedProject.difficulty).badge} font-medium`}>
                {selectedProject.difficulty}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-slate-300">{selectedProject.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">{selectedProject.duration}h</div>
                  <div className="text-sm text-slate-400">学习时长</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>📚</span> 学习要点
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.learning.map((point, idx) => (
                    <div key={idx} className="bg-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-blue-400 font-medium mb-2">{idx + 1}</div>
                      <p className="text-slate-300 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🛠️</span> 技术栈
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>📖</span> 项目详情
                </h3>
                <div dangerouslySetInnerHTML={{ __html: selectedProject.content.replace(/<h3/g, '<h3 class="text-lg font-semibold text-white mb-3"').replace(/<h4/g, '<h4 class="text-base font-medium text-blue-300 mb-2"').replace(/<p/g, '<p class="text-slate-300 mb-4"').replace(/<ul/g, '<ul class="list-disc pl-5 mb-4"').replace(/<li/g, '<li class="text-slate-300 mb-1"') }} />
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/30"
                >
                  开始学习
                </button>
                <button 
                  className="px-6 py-4 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors border border-slate-600/50"
                  onClick={() => setSelectedProject(null)}
                >
                  返回
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}