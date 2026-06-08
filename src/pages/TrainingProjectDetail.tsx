import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

interface TrainingProject {
  id: number
  title: string
  description: string
  difficulty: string
  duration: number
  tags: string[]
  tasks: { id: number; title: string; description: string; hint: string; starterCode: string }[]
}

const projects: TrainingProject[] = [
  {
    id: 1,
    title: '电影评分预测系统',
    description: '基于历史电影数据，构建智能评分预测模型',
    difficulty: '中级',
    duration: 8,
    tags: ['Pandas', 'Scikit-learn', '回归分析'],
    tasks: [
      {
        id: 1,
        title: '数据加载与探索',
        description: '加载电影数据集，查看数据结构和基本信息',
        hint: '使用pd.read_csv加载数据，使用head()、info()、describe()查看数据',
        starterCode: '# 导入必要的库\nimport pandas as pd\nimport numpy as np\n\n# 加载数据集\nmovies = pd.read_csv("movies.csv")\nratings = pd.read_csv("ratings.csv")\n\n# 查看数据基本信息\nprint("电影数据前5行：")\nprint(movies.head())\nprint("\\n评分数据前5行：")\nprint(ratings.head())'
      },
      {
        id: 2,
        title: '数据预处理',
        description: '处理缺失值、转换数据类型、合并数据集',
        hint: '使用dropna()处理缺失值，使用merge()合并数据集',
        starterCode: '# 检查缺失值\nprint("电影数据缺失值：")\nprint(movies.isnull().sum())\n\n# 合并数据集\ndata = pd.merge(movies, ratings, on="movieId")\n\n# 查看合并后的数据\nprint("\\n合并后的数据前5行：")\nprint(data.head())'
      },
      {
        id: 3,
        title: '特征工程',
        description: '提取有用特征，准备模型训练数据',
        hint: '可以从电影标题中提取年份，处理类型特征',
        starterCode: '# 从标题中提取年份\ndata["year"] = data["title"].str.extract("(\\d{4})", expand=False)\ndata["year"] = data["year"].astype(float)\n\n# 查看处理后的数据\nprint("处理后的数据：")\nprint(data[["title", "year", "rating"]].head())'
      },
      {
        id: 4,
        title: '构建回归模型',
        description: '使用Scikit-learn构建评分预测模型',
        hint: '使用线性回归或随机森林等模型',
        starterCode: 'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\n\n# 准备特征和标签\nX = data[["year"]].fillna(0)\ny = data["rating"]\n\n# 划分训练集和测试集\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# 创建并训练模型\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# 预测并评估\ny_pred = model.predict(X_test)\nprint(f"均方误差: {mean_squared_error(y_test, y_pred):.2f}")'
      }
    ]
  },
  {
    id: 2,
    title: '天气数据分析与可视化',
    description: '分析多年天气数据，挖掘气候变化规律',
    difficulty: '初级',
    duration: 6,
    tags: ['Matplotlib', 'Seaborn', '数据可视化'],
    tasks: [
      {
        id: 1,
        title: '加载天气数据',
        description: '加载CSV格式的天气数据文件',
        hint: '使用pandas读取csv文件',
        starterCode: 'import pandas as pd\n\n# 加载天气数据\nweather = pd.read_csv("weather.csv")\n\n# 查看数据\nprint("天气数据前5行：")\nprint(weather.head())\nprint("\\n数据信息：")\nweather.info()'
      },
      {
        id: 2,
        title: '时间序列处理',
        description: '将日期列转换为datetime格式，设置为索引',
        hint: '使用pd.to_datetime转换日期格式',
        starterCode: '# 转换日期格式\nweather["date"] = pd.to_datetime(weather["date"])\n\n# 设置日期为索引\nweather.set_index("date", inplace=True)\n\n# 查看结果\nprint("设置索引后的数据：")\nprint(weather.head())'
      },
      {
        id: 3,
        title: '温度趋势可视化',
        description: '绘制温度随时间变化的折线图',
        hint: '使用matplotlib或seaborn绘图',
        starterCode: 'import matplotlib.pyplot as plt\nimport seaborn as sns\n\n# 设置风格\nsns.set_style("darkgrid")\n\n# 绘制温度趋势图\nplt.figure(figsize=(12, 6))\nplt.plot(weather.index, weather["temperature"], label="温度")\nplt.title("温度变化趋势")\nplt.xlabel("日期")\nplt.ylabel("温度 (°C)")\nplt.legend()\nplt.show()'
      },
      {
        id: 4,
        title: '统计分析',
        description: '计算统计指标，分析天气数据特征',
        hint: '使用describe()、corr()等方法',
        starterCode: '# 统计描述\nprint("温度统计描述：")\nprint(weather["temperature"].describe())\n\n# 相关性分析\nprint("\\n相关性矩阵：")\nprint(weather.corr())'
      }
    ]
  },
  {
    id: 3,
    title: '学生成绩分析系统',
    description: '分析学生成绩数据，发现学习规律',
    difficulty: '初级',
    duration: 5,
    tags: ['NumPy', '统计分析', 'Pandas'],
    tasks: [
      {
        id: 1,
        title: '加载成绩数据',
        description: '读取学生成绩数据集',
        hint: '使用pandas读取数据文件',
        starterCode: 'import pandas as pd\n\n# 加载学生成绩数据\nscores = pd.read_csv("scores.csv")\n\n# 查看数据结构\nprint("数据形状：", scores.shape)\nprint("\\n数据前5行：")\nprint(scores.head())'
      },
      {
        id: 2,
        title: '描述性统计',
        description: '计算平均分、最高分、最低分等统计指标',
        hint: '使用mean()、max()、min()、std()等方法',
        starterCode: '# 计算各科目的统计指标\nprint("语文成绩统计：")\nprint(scores["chinese"].describe())\n\nprint("\\n数学成绩统计：")\nprint(scores["math"].describe())\n\nprint("\\n英语成绩统计：")\nprint(scores["english"].describe())'
      },
      {
        id: 3,
        title: '成绩排名',
        description: '计算总分并进行排名',
        hint: '使用sum()计算总分，rank()进行排名',
        starterCode: '# 计算总分\nscores["total"] = scores[["chinese", "math", "english"]].sum(axis=1)\n\n# 计算排名（降序）\nscores["rank"] = scores["total"].rank(ascending=False, method="min")\n\n# 查看排名前10的学生\nprint("成绩排名前10：")\nprint(scores.sort_values("rank").head(10)[["name", "chinese", "math", "english", "total", "rank"]])'
      },
      {
        id: 4,
        title: '相关性分析',
        description: '分析各科目成绩之间的相关性',
        hint: '使用corr()计算相关系数',
        starterCode: '# 计算相关性矩阵\ncorr_matrix = scores[["chinese", "math", "english", "total"]].corr()\n\nprint("科目成绩相关性矩阵：")\nprint(corr_matrix)\n\n# 使用热图可视化\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.heatmap(corr_matrix, annot=True, cmap="coolwarm")\nplt.title("成绩相关性热图")\nplt.show()'
      }
    ]
  },
  {
    id: 4,
    title: '餐厅订单智能分析',
    description: '挖掘餐厅订单数据，发现爆款菜品',
    difficulty: '中级',
    duration: 7,
    tags: ['Apriori算法', '关联规则', '业务分析'],
    tasks: [
      {
        id: 1,
        title: '加载订单数据',
        description: '读取餐厅订单数据集',
        hint: '使用pandas读取CSV文件',
        starterCode: 'import pandas as pd\n\n# 加载订单数据\norders = pd.read_csv("orders.csv")\n\n# 查看数据\nprint("订单数据前5行：")\nprint(orders.head())\nprint("\\n数据信息：")\norders.info()'
      },
      {
        id: 2,
        title: '数据预处理',
        description: '整理订单数据，转换为适合关联分析的格式',
        hint: '按订单分组，整理菜品列表',
        starterCode: '# 按订单分组，获取每个订单的菜品列表\norder_items = orders.groupby("order_id")["item"].apply(list).reset_index()\n\nprint("每个订单的菜品：")\nprint(order_items.head())'
      },
      {
        id: 3,
        title: '频繁项集挖掘',
        description: '使用Apriori算法挖掘频繁项集',
        hint: '可以使用mlxtend库的Apriori',
        starterCode: 'from mlxtend.frequent_patterns import apriori\nfrom mlxtend.preprocessing import TransactionEncoder\n\n# 转换数据格式\nte = TransactionEncoder()\nte_ary = te.fit(order_items["item"]).transform(order_items["item"])\ndf = pd.DataFrame(te_ary, columns=te.columns_)\n\n# 挖掘频繁项集\nfrequent_itemsets = apriori(df, min_support=0.1, use_colnames=True)\n\nprint("频繁项集：")\nprint(frequent_itemsets.sort_values("support", ascending=False))'
      },
      {
        id: 4,
        title: '关联规则生成',
        description: '生成关联规则并分析',
        hint: '使用association_rules函数',
        starterCode: 'from mlxtend.frequent_patterns import association_rules\n\n# 生成关联规则\nrules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.5)\n\n# 筛选有价值的规则\ninteresting_rules = rules[rules["lift"] > 1.2]\n\nprint("有趣的关联规则：")\nprint(interesting_rules[["antecedents", "consequents", "support", "confidence", "lift"]])'
      }
    ]
  },
  {
    id: 5,
    title: '电商用户画像分析',
    description: '构建精细化用户画像，实现精准营销',
    difficulty: '高级',
    duration: 10,
    tags: ['聚类分析', '用户画像', '机器学习'],
    tasks: [
      {
        id: 1,
        title: '加载用户行为数据',
        description: '读取电商用户行为数据',
        hint: '使用pandas读取数据',
        starterCode: 'import pandas as pd\n\n# 加载用户行为数据\nuser_data = pd.read_csv("user_behavior.csv")\n\n# 查看数据\nprint("用户行为数据前5行：")\nprint(user_data.head())'
      },
      {
        id: 2,
        title: '用户行为特征提取',
        description: '提取用户行为特征（浏览次数、购买次数等）',
        hint: '按用户ID分组聚合',
        starterCode: '# 按用户分组统计行为\nuser_features = user_data.groupby("user_id").agg(\n    browse_count=("behavior_type", lambda x: (x == "browse").sum()),\n    collect_count=("behavior_type", lambda x: (x == "collect").sum()),\n    cart_count=("behavior_type", lambda x: (x == "cart").sum()),\n    buy_count=("behavior_type", lambda x: (x == "buy").sum())\n).reset_index()\n\nprint("用户特征数据：")\nprint(user_features.head())'
      },
      {
        id: 3,
        title: 'K-Means聚类分析',
        description: '使用K-Means算法对用户进行分组',
        hint: '使用sklearn的KMeans',
        starterCode: 'from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\n# 标准化数据\nscaler = StandardScaler()\nscaled_features = scaler.fit_transform(user_features[["browse_count", "collect_count", "cart_count", "buy_count"]])\n\n# 使用K-Means聚类\nkmeans = KMeans(n_clusters=4, random_state=42)\nuser_features["cluster"] = kmeans.fit_predict(scaled_features)\n\nprint("聚类结果：")\nprint(user_features[["user_id", "cluster"]].head())'
      },
      {
        id: 4,
        title: '用户画像分析',
        description: '分析每个用户群体的特征',
        hint: '按聚类分组统计',
        starterCode: '# 分析各群体特征\ncluster_analysis = user_features.groupby("cluster").mean()\n\nprint("各用户群体特征分析：")\nprint(cluster_analysis[["browse_count", "collect_count", "cart_count", "buy_count"]])'
      }
    ]
  },
  {
    id: 6,
    title: '游戏数据分析',
    description: '分析游戏玩家行为数据，优化游戏体验',
    difficulty: '中级',
    duration: 8,
    tags: ['玩家行为', '漏斗分析', '数据挖掘'],
    tasks: [
      {
        id: 1,
        title: '加载玩家数据',
        description: '读取游戏玩家行为数据',
        hint: '使用pandas读取CSV文件',
        starterCode: 'import pandas as pd\n\n# 加载玩家数据\nplayers = pd.read_csv("players.csv")\n\nprint("玩家数据前5行：")\nprint(players.head())'
      },
      {
        id: 2,
        title: '留存率分析',
        description: '计算次日留存、7日留存、30日留存',
        hint: '需要用户注册日期和活跃日期数据',
        starterCode: '# 转换日期格式\nplayers["register_date"] = pd.to_datetime(players["register_date"])\nplayers["last_active"] = pd.to_datetime(players["last_active"])\n\n# 计算留存天数\nplayers["days_since_register"] = (players["last_active"] - players["register_date"]).dt.days\n\n# 计算次日留存\nday1_retention = (players["days_since_register"] >= 1).mean() * 100\nprint(f"次日留存率: {day1_retention:.2f}%")'
      },
      {
        id: 3,
        title: '付费转化漏斗',
        description: '分析用户从注册到付费的转化过程',
        hint: '按步骤统计用户数量',
        starterCode: '# 漏斗数据\nfunnel_data = {\n    "步骤": ["注册", "登录", "创建角色", "首次付费"],\n    "用户数": [10000, 8500, 7000, 1500]\n}\n\nfunnel = pd.DataFrame(funnel_data)\n\n# 计算转化率\nfunnel["转化率"] = (funnel["用户数"] / funnel["用户数"].iloc[0] * 100).round(1)\n\nprint("付费转化漏斗：")\nprint(funnel)'
      },
      {
        id: 4,
        title: '玩家等级分布',
        description: '分析玩家等级分布情况',
        hint: '使用value_counts统计',
        starterCode: '# 等级分布\nlevel_dist = players["level"].value_counts().sort_index()\n\nprint("玩家等级分布：")\nprint(level_dist)\n\n# 可视化等级分布\nimport matplotlib.pyplot as plt\nlevel_dist.plot(kind="bar", figsize=(12, 6))\nplt.title("玩家等级分布")\nplt.xlabel("等级")\nplt.ylabel("玩家数量")\nplt.show()'
      }
    ]
  },
  {
    id: 7,
    title: '音乐风格深度分析',
    description: '探索音乐数据特征，发现音乐风格规律',
    difficulty: '高级',
    duration: 12,
    tags: ['特征提取', '降维分析', '音乐可视化'],
    tasks: [
      {
        id: 1,
        title: '加载音乐数据',
        description: '读取音乐特征数据集',
        hint: '使用pandas读取数据',
        starterCode: 'import pandas as pd\n\n# 加载音乐数据\nmusic = pd.read_csv("music_features.csv")\n\nprint("音乐数据前5行：")\nprint(music.head())'
      },
      {
        id: 2,
        title: '特征标准化',
        description: '对音乐特征进行标准化处理',
        hint: '使用StandardScaler',
        starterCode: 'from sklearn.preprocessing import StandardScaler\n\n# 提取特征列\nfeatures = music.drop(["song_id", "genre"], axis=1)\n\n# 标准化\nscaler = StandardScaler()\nscaled_features = scaler.fit_transform(features)\n\nprint("标准化后的特征：")\nprint(pd.DataFrame(scaled_features, columns=features.columns).head())'
      },
      {
        id: 3,
        title: 'PCA降维',
        description: '使用PCA将高维特征降维到2维',
        hint: '使用sklearn的PCA',
        starterCode: 'from sklearn.decomposition import PCA\n\n# PCA降维到2维\npca = PCA(n_components=2)\nprincipal_components = pca.fit_transform(scaled_features)\n\n# 创建结果DataFrame\npca_df = pd.DataFrame(data=principal_components, columns=["PC1", "PC2"])\npca_df["genre"] = music["genre"]\n\nprint("PCA结果：")\nprint(pca_df.head())'
      },
      {
        id: 4,
        title: '可视化分析',
        description: '绘制PCA散点图，观察不同风格的分布',
        hint: '使用matplotlib或seaborn绘图',
        starterCode: 'import matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.figure(figsize=(10, 8))\nsns.scatterplot(x="PC1", y="PC2", hue="genre", data=pca_df, palette="viridis")\nplt.title("音乐风格PCA可视化")\nplt.show()'
      }
    ]
  },
  {
    id: 8,
    title: '图书推荐系统',
    description: '构建个性化图书推荐引擎',
    difficulty: '中级',
    duration: 9,
    tags: ['协同过滤', '推荐算法', '相似度计算'],
    tasks: [
      {
        id: 1,
        title: '加载图书评分数据',
        description: '读取用户-图书评分数据',
        hint: '使用pandas读取CSV',
        starterCode: 'import pandas as pd\n\n# 加载评分数据\nratings = pd.read_csv("book_ratings.csv")\n\nprint("评分数据前5行：")\nprint(ratings.head())'
      },
      {
        id: 2,
        title: '创建评分矩阵',
        description: '构建用户-图书评分矩阵',
        hint: '使用pivot_table',
        starterCode: '# 创建用户-图书评分矩阵\nrating_matrix = ratings.pivot_table(\n    index="user_id",\n    columns="book_id",\n    values="rating"\n).fillna(0)\n\nprint("评分矩阵形状：", rating_matrix.shape)\nprint("评分矩阵示例：")\nprint(rating_matrix.iloc[:5, :5])'
      },
      {
        id: 3,
        title: '计算相似度',
        description: '计算图书之间的相似度',
        hint: '使用余弦相似度',
        starterCode: 'from sklearn.metrics.pairwise import cosine_similarity\n\n# 计算图书之间的余弦相似度\nbook_similarity = cosine_similarity(rating_matrix.T)\n\n# 转换为DataFrame\nsimilarity_df = pd.DataFrame(book_similarity, index=rating_matrix.columns, columns=rating_matrix.columns)\n\nprint("图书相似度矩阵（部分）：")\nprint(similarity_df.iloc[:5, :5])'
      },
      {
        id: 4,
        title: '生成推荐',
        description: '根据相似度生成推荐列表',
        hint: '找出与某本书最相似的书籍',
        starterCode: '# 获取与book_id=1最相似的书籍\ntarget_book = 1\nsimilar_books = similarity_df[target_book].sort_values(ascending=False)\n\nprint(f"与图书 {target_book} 最相似的书籍：")\nprint(similar_books.head(10))'
      }
    ]
  },
  {
    id: 9,
    title: '空气质量实时分析',
    description: '分析空气污染数据，揭示环境变化趋势',
    difficulty: '初级',
    duration: 6,
    tags: ['环境数据', '时序分析', '地图可视化'],
    tasks: [
      {
        id: 1,
        title: '加载空气质量数据',
        description: '读取空气质量监测数据',
        hint: '使用pandas读取CSV文件',
        starterCode: 'import pandas as pd\n\n# 加载空气质量数据\nair_quality = pd.read_csv("air_quality.csv")\n\nprint("空气质量数据前5行：")\nprint(air_quality.head())'
      },
      {
        id: 2,
        title: '数据清洗',
        description: '处理缺失值和异常值',
        hint: '使用dropna()和fillna()',
        starterCode: '# 查看缺失值\nprint("缺失值统计：")\nprint(air_quality.isnull().sum())\n\n# 填充缺失值（使用前向填充）\nair_quality["PM2.5"] = air_quality["PM2.5"].fillna(method="ffill")\n\nprint("\\n处理后缺失值：")\nprint(air_quality.isnull().sum())'
      },
      {
        id: 3,
        title: 'PM2.5趋势分析',
        description: '分析PM2.5随时间的变化趋势',
        hint: '转换日期格式后绘图',
        starterCode: 'import matplotlib.pyplot as plt\n\n# 转换日期格式\nair_quality["date"] = pd.to_datetime(air_quality["date"])\n\n# 绘制PM2.5趋势\nplt.figure(figsize=(12, 6))\nplt.plot(air_quality["date"], air_quality["PM2.5"], label="PM2.5")\nplt.title("PM2.5变化趋势")\nplt.xlabel("日期")\nplt.ylabel("PM2.5 (μg/m³)")\nplt.legend()\nplt.show()'
      },
      {
        id: 4,
        title: '空气质量等级统计',
        description: '统计各空气质量等级的天数',
        hint: '根据PM2.5值划分等级',
        starterCode: '# 定义空气质量等级\ndef get_level(pm25):\n    if pm25 <= 35:\n        return "优"\n    elif pm25 <= 75:\n        return "良"\n    elif pm25 <= 115:\n        return "轻度污染"\n    elif pm25 <= 150:\n        return "中度污染"\n    else:\n        return "重度污染"\n\n# 添加等级列\nair_quality["level"] = air_quality["PM2.5"].apply(get_level)\n\n# 统计各等级天数\nlevel_counts = air_quality["level"].value_counts()\n\nprint("空气质量等级统计：")\nprint(level_counts)'
      }
    ]
  },
  {
    id: 10,
    title: '交通事故深度分析',
    description: '分析交通事故数据，发现危险因素',
    difficulty: '高级',
    duration: 11,
    tags: ['分类算法', '风险评估', '地理分析'],
    tasks: [
      {
        id: 1,
        title: '加载事故数据',
        description: '读取交通事故数据集',
        hint: '使用pandas读取CSV',
        starterCode: 'import pandas as pd\n\n# 加载事故数据\naccidents = pd.read_csv("accidents.csv")\n\nprint("事故数据前5行：")\nprint(accidents.head())'
      },
      {
        id: 2,
        title: '数据预处理',
        description: '处理分类变量，准备模型训练',
        hint: '使用get_dummies进行独热编码',
        starterCode: '# 查看数据类型\nprint("数据类型：")\nprint(accidents.dtypes)\n\n# 独热编码分类变量\ncategorical_cols = ["weather", "road_type", "time_of_day"]\naccidents_encoded = pd.get_dummies(accidents, columns=categorical_cols)\n\nprint("\\n编码后数据形状：", accidents_encoded.shape)'
      },
      {
        id: 3,
        title: '风险因素分析',
        description: '分析各因素与事故严重程度的关系',
        hint: '使用相关性分析',
        starterCode: '# 计算相关性\ncorrelation = accidents_encoded.corr()["severity"].sort_values(ascending=False)\n\nprint("与事故严重程度相关性最高的因素：")\nprint(correlation.head(10))'
      },
      {
        id: 4,
        title: '事故预测模型',
        description: '构建事故严重程度预测模型',
        hint: '使用分类算法',
        starterCode: 'from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# 准备特征和标签\nX = accidents_encoded.drop(["severity", "accident_id"], axis=1).fillna(0)\ny = accidents_encoded["severity"]\n\n# 划分数据集\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# 创建模型\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# 预测并评估\ny_pred = model.predict(X_test)\naccuracy = accuracy_score(y_test, y_pred)\nprint(f"模型准确率: {accuracy:.2f}")'
      }
    ]
  }
]

export default function TrainingProjectDetail() {
  const [selectedTask, setSelectedTask] = useState(0)
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const { id } = useParams<{ id: string }>()
  const project = projects.find(p => p.id === parseInt(id || '1'))
  const currentTask = project?.tasks[selectedTask]

  useEffect(() => {
    setSelectedTask(0)
    setCode('')
    setOutput('')
  }, [id])

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const handleRunCode = () => {
    setIsRunning(true)
    setOutput('')
    
    setTimeout(() => {
      let result = ''
      
      if (code.includes('pd.read_csv') || code.includes('movies') || code.includes('ratings')) {
        result = `电影数据前5行：
   movieId                               title                                       genres
0        1                    Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy
1        2                      Jumanji (1995)                   Adventure|Children|Fantasy
2        3             Grumpier Old Men (1995)                               Comedy|Romance
3        4            Waiting to Exhale (1995)                         Comedy|Drama|Romance
4        5  Father of the Bride Part II (1995)                                       Comedy

评分数据前5行：
   userId  movieId  rating   timestamp
0       1        1     4.0  964982703
1       1        3     4.0  964981247
2       1        6     4.0  964982224
3       1       47     5.0  964983815
4       1       50     5.0  964982931

✅ 数据加载成功！`
      } else if (code.includes('describe') || code.includes('info') || code.includes('统计')) {
        result = `温度统计描述：
count    365.000000
mean      15.230137
std        8.123456
min       -5.000000
25%        9.000000
50%       15.500000
75%       22.000000
max       35.000000
Name: temperature, dtype: float64

相关性矩阵：
            temperature  humidity  wind_speed
temperature    1.000000  0.324567    -0.123456
humidity       0.324567  1.000000     0.089765
wind_speed    -0.123456  0.089765     1.000000

✅ 统计分析完成！`
      } else if (code.includes('score') || code.includes('accuracy') || code.includes('模型')) {
        result = `模型训练完成！
训练集得分: 0.8523
测试集得分: 0.8215

均方误差: 0.1876
R²分数: 0.8215

预测结果示例：
实际值: [4.5, 3.8, 4.2, 3.5, 4.0]
预测值: [4.3, 3.9, 4.1, 3.6, 4.1]

✅ 模型评估完成！`
      } else if (code.includes('merge') || code.includes('groupby') || code.includes('数据')) {
        result = `合并后的数据前5行：
   movieId             title                                       genres  userId  rating   timestamp  year
0        1  Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy       1     4.0  964982703  1995
1        1  Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy       5     4.0  847434962  1995
2        1  Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy       7     4.5  892889179  1995
3        1  Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy      15     2.5  1163375153 1995
4        1  Toy Story (1995)  Adventure|Animation|Children|Comedy|Fantasy      17     4.5  1117408267 1995

✅ 数据处理完成！`
      } else if (code.includes('plt') || code.includes('plot') || code.includes('visualize')) {
        result = `图表已生成！

📊 温度趋势图
- X轴：日期
- Y轴：温度 (°C)
- 趋势：整体呈上升趋势，夏季温度较高

📈 相关性热图
- 温度与湿度：正相关 (0.32)
- 温度与风速：负相关 (-0.12)

✅ 可视化完成！图表已显示在右侧输出区域。`
      } else if (code.includes('sort_values') || code.includes('rank') || code.includes('排名')) {
        result = `成绩排名前10：
   name  chinese  math  english  total  rank
0   张三       95    98       92    285   1.0
1   李四       92    95       94    281   2.0
2   王五       90    93       96    279   3.0
3   赵六       88    91       93    272   4.0
4   钱七       85    89       90    264   5.0

✅ 排名计算完成！`
      } else if (code.includes('corr') || code.includes('相关性')) {
        result = `科目成绩相关性矩阵：
          chinese      math    english     total
chinese  1.000000  0.782345  0.823456  0.956789
math     0.782345  1.000000  0.756789  0.923456
english  0.823456  0.756789  1.000000  0.934567
total    0.956789  0.923456  0.934567  1.000000

✅ 相关性分析完成！
语文和英语相关性最高(0.82)，说明语言类科目学习能力有较强关联。`
      } else {
        result = `>>> 执行代码：
${code}

✅ 代码执行成功！

提示：这是一个模拟执行环境。在实际Python环境中运行代码可以获得真实的执行结果。`
      }
      
      setOutput(result)
      setIsRunning(false)
    }, 800)
  }

  const handleResetCode = () => {
    if (currentTask) {
      setCode(currentTask.starterCode)
    }
  }

  const nextTask = () => {
    if (selectedTask < (project?.tasks.length || 0) - 1) {
      setSelectedTask(selectedTask + 1)
      setOutput('')
      setCode(project?.tasks[selectedTask + 1]?.starterCode || '')
    }
  }

  const prevTask = () => {
    if (selectedTask > 0) {
      setSelectedTask(selectedTask - 1)
      setOutput('')
      setCode(project?.tasks[selectedTask - 1]?.starterCode || '')
    }
  }

  if (!project || !currentTask) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">项目未找到</h2>
          <p className="text-slate-400">请从专栏学习页面选择一个项目开始学习</p>
        </div>
      </div>
    )
  }

  // 初始化代码
  if (!code && currentTask) {
    setCode(currentTask.starterCode)
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
              <p className="text-xs text-slate-400">实训作业</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/training-projects" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">← 返回项目列表</a>
          </nav>
        </div>
      </header>

      {/* Project Info */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-violet-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-slate-300">{project.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-4 py-2 rounded-full ${
                  project.difficulty === '初级' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  project.difficulty === '中级' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  'bg-violet-500/20 text-violet-400 border border-violet-500/30'
                } font-medium`}>
                  {project.difficulty}
                </span>
                <span className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full">
                  ⏱️ {project.duration}小时
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Task Navigation */}
      <section className="px-4 mb-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">实训任务</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTask}
                disabled={selectedTask === 0}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← 上一个
              </button>
              <span className="text-slate-400">
                任务 {selectedTask + 1} / {project.tasks.length}
              </span>
              <button
                onClick={nextTask}
                disabled={selectedTask === project.tasks.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                下一个 →
              </button>
            </div>
          </div>
          
          {/* Task Progress */}
          <div className="flex gap-2">
            {project.tasks.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-2 rounded-full transition-all ${
                  idx < selectedTask ? 'bg-blue-500' :
                  idx === selectedTask ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                  'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Task Info */}
          <div className="space-y-6">
            {/* Task Card */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{selectedTask + 1}</span>
                </div>
                <h4 className="text-xl font-bold text-white">{currentTask.title}</h4>
              </div>
              <p className="text-slate-300 mb-4">{currentTask.description}</p>
              
              {/* Hint */}
              <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span>💡</span>
                  <span className="text-yellow-400 font-medium">提示</span>
                </div>
                <p className="text-slate-300 text-sm">{currentTask.hint}</p>
              </div>
            </div>

            {/* Output Panel */}
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>📊</span> 输出结果
              </h4>
              <div className="bg-black/50 rounded-lg p-4 min-h-[150px] font-mono text-sm overflow-auto">
                {output ? (
                  <pre className="text-slate-300 whitespace-pre-wrap">{output}</pre>
                ) : (
                  <p className="text-slate-500">运行代码后，输出将显示在这里...</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Code Editor */}
          <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-slate-400">Python 3.10</span>
            </div>
            
            {/* Code Area */}
            <textarea
              value={code}
              onChange={handleCodeChange}
              className="w-full p-4 bg-transparent text-slate-100 font-mono text-sm resize-none min-h-[350px] focus:outline-none"
              placeholder="在此输入Python代码..."
            />
            
            {/* Editor Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-t border-slate-700/50">
              <button
                onClick={handleResetCode}
                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm"
              >
                重置代码
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all text-sm font-medium disabled:opacity-50"
                >
                  {isRunning ? '运行中...' : '▶ 运行代码'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
