// 模拟课程数据
export const courses = [
  {
    id: 1,
    title: "Python基础课程",
    description: "学习Python编程语言的基础知识和语法 - 张子瑜的课程",
    difficulty: "初级",
    duration: 10,
    cover_image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20basic%20course%20cover%2C%20beginner%20friendly%20design&image_size=landscape_16_9"
  },
  {
    id: 2,
    title: "Python数据分析基础",
    description: "学习Python数据分析的基本概念和工具",
    difficulty: "初级",
    duration: 12,
    cover_image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%2C%20clean%20modern%20design&image_size=landscape_16_9"
  },
  {
    id: 3,
    title: "商务数据分析实战",
    description: "使用Python解决实际商务数据分析问题",
    difficulty: "中级",
    duration: 16,
    cover_image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%2C%20professional%20design&image_size=landscape_16_9"
  },
  {
    id: 4,
    title: "数据可视化进阶",
    description: "学习高级数据可视化技术和工具",
    difficulty: "高级",
    duration: 10,
    cover_image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%2C%20colorful%20modern%20design&image_size=landscape_16_9"
  },
  {
    id: 5,
    title: "机器学习基础",
    description: "了解机器学习的基本原理和应用",
    difficulty: "中级",
    duration: 14,
    cover_image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20course%20cover%2C%20futuristic%20design&image_size=landscape_16_9"
  }
]

// 课程分类
export const courseCategories = [
  { id: 1, name: "Python基础", icon: "📚" },
  { id: 2, name: "数据分析", icon: "📊" },
  { id: 3, name: "数据可视化", icon: "🎨" },
  { id: 4, name: "机器学习", icon: "🤖" },
  { id: 5, name: "商务分析", icon: "💼" },
  { id: 6, name: "实战项目", icon: "🚀" }
]

// 成就数据
export const achievements = [
  {
    id: 1,
    name: "初学者",
    description: "完成第一个课程",
    icon: "🏆",
    difficulty: "初级"
  },
  {
    id: 2,
    name: "进阶者",
    description: "完成5个课程",
    icon: "🌟",
    difficulty: "中级"
  },
  {
    id: 3,
    name: "专家",
    description: "完成10个课程",
    icon: "💎",
    difficulty: "高级"
  },
  {
    id: 4,
    name: "练习达人",
    description: "完成50个练习",
    icon: "⚡",
    difficulty: "中级"
  }
]
