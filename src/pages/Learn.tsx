import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { courses } from '../data/mockData'

const courseLessonContent = {
  1: {
    1: {
      title: "Python简介与环境搭建",
      content: `
        <h3>欢迎来到Python基础课程</h3>
        <p>Python是一种高级、解释型、通用的编程语言，由Guido van Rossum于1991年创建。它的设计哲学强调代码的可读性和简洁性。</p>
        
        <h4>🎯 课程目标</h4>
        <ul>
          <li>了解Python的历史和应用领域</li>
          <li>掌握Python开发环境的搭建</li>
          <li>学会使用Python解释器和IDE</li>
          <li>编写并运行第一个Python程序</li>
        </ul>
        
        <h4>💡 Python的应用领域</h4>
        <ul>
          <li><strong>数据分析：</strong>Pandas、NumPy、SciPy</li>
          <li><strong>人工智能：</strong>TensorFlow、PyTorch、Keras</li>
          <li><strong>Web开发：</strong>Django、Flask、FastAPI</li>
          <li><strong>自动化脚本：</strong>系统管理、数据处理</li>
          <li><strong>科学计算：</strong>Matplotlib、Jupyter</li>
        </ul>
        
        <h4>💻 环境搭建步骤</h4>
        <p>1. 访问 <a href="https://www.python.org" style="color: #a78bfa;">python.org</a> 下载最新版本</p>
        <p>2. 安装时勾选 "Add Python to PATH"</p>
        <p>3. 验证安装：打开命令行输入 python --version</p>
        
        <h4>📝 第一个程序</h4>
        <pre><code># 我的第一个Python程序
print("Hello, World!")
print("欢迎来到Python世界！")

# 输出结果：
# Hello, World!
# 欢迎来到Python世界！</code></pre>
      `
    },
    2: {
      title: "Python语法基础",
      content: `
        <h3>Python语法基础</h3>
        <p>Python以其简洁优雅的语法著称，本节将学习Python的核心语法规则。</p>
        
        <h4>📏 缩进规则</h4>
        <p>Python使用缩进来表示代码块，通常使用4个空格：</p>
        <pre><code>if True:
    print("条件为真")  # 4个空格缩进
    if False:
        print("不会执行")  # 8个空格缩进
print("代码块结束")</code></pre>
        
        <h4>💬 注释的使用</h4>
        <pre><code># 这是单行注释

"""
这是多行注释
可以写很多行
用于文档说明
"""

# 注释的作用：
# 1. 解释代码功能
# 2. 暂时禁用代码
# 3. 添加作者信息</code></pre>
        
        <h4>🔤 标识符命名规则</h4>
        <ul>
          <li>只能包含字母、数字、下划线</li>
          <li>不能以数字开头</li>
          <li>区分大小写</li>
          <li>不能使用Python关键字</li>
        </ul>
        
        <h4>📝 基本输入输出</h4>
        <pre><code># 输出
print("Hello, Python!")
print("姓名:", "张三", "年龄:", 20)

# 输入
name = input("请输入你的名字：")
age = input("请输入你的年龄：")
print(f"你好，{name}！你今年{age}岁。")</code></pre>
      `
    },
    3: {
      title: "数据类型和变量",
      content: `
        <h3>数据类型和变量</h3>
        <p>Python支持多种内置数据类型，理解它们是编程的基础。</p>
        
        <h4>🔢 基本数据类型</h4>
        <pre><code># 整数 (int)
age = 25
year = 2024
big_number = 1000000000

# 浮点数 (float)
price = 99.99
pi = 3.14159265359
scientific = 1.5e10  # 科学计数法

# 字符串 (str)
name = "张三"
message = 'Hello, Python!'
multiline = """
这是多行字符串
可以写很多内容
"""

# 布尔值 (bool)
is_student = True
is_adult = False

# 空值 (None)
empty = None</code></pre>
        
        <h4>📋 列表 (List)</h4>
        <pre><code># 创建列表
fruits = ["苹果", "香蕉", "橙子"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# 列表操作
fruits.append("葡萄")      # 添加元素
fruits.remove("香蕉")      # 删除元素
first = fruits[0]          # 访问元素
length = len(fruits)       # 获取长度</code></pre>
        
        <h4>📖 字典 (Dictionary)</h4>
        <pre><code># 创建字典
student = {
    "name": "张三",
    "age": 20,
    "major": "数据分析"
}

# 访问和修改
print(student["name"])
student["age"] = 21
student["grade"] = "大三"</code></pre>
        
        <h4>🔄 类型转换</h4>
        <pre><code># 字符串转数字
num_str = "123"
num_int = int(num_str)
num_float = float(num_str)

# 数字转字符串
age = 25
age_str = str(age)

# 列表和元组转换
my_list = [1, 2, 3]
my_tuple = tuple(my_list)</code></pre>
      `
    },
    4: {
      title: "控制流语句",
      content: `
        <h3>控制流语句</h3>
        <p>控制流语句用于控制程序的执行顺序，是编程的核心概念。</p>
        
        <h4>🔀 条件语句 (if-elif-else)</h4>
        <pre><code># 基本条件判断
age = 18

if age >= 18:
    print("你是成年人")
elif age >= 13:
    print("你是青少年")
else:
    print("你是儿童")

# 嵌套条件
score = 85
if score >= 60:
    print("及格")
    if score >= 90:
        print("优秀")
    elif score >= 80:
        print("良好")
else:
    print("不及格")</code></pre>
        
        <h4>🔁 for循环</h4>
        <pre><code># 遍历列表
fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(f"我喜欢吃{fruit}")

# 使用range
for i in range(5):
    print(i)  # 输出 0, 1, 2, 3, 4

for i in range(1, 10, 2):
    print(i)  # 输出 1, 3, 5, 7, 9

# 遍历字典
student = {"name": "张三", "age": 20}
for key, value in student.items():
    print(f"{key}: {value}")</code></pre>
        
        <h4>🔄 while循环</h4>
        <pre><code># 基本while循环
count = 0
while count < 5:
    print(count)
    count += 1

# 猜数字游戏
import random
target = random.randint(1, 100)
while True:
    guess = int(input("猜一个数字(1-100): "))
    if guess < target:
        print("太小了！")
    elif guess > target:
        print("太大了！")
    else:
        print("恭喜你猜对了！")
        break</code></pre>
        
        <h4>⏹️ 循环控制</h4>
        <pre><code># break - 跳出循环
for i in range(10):
    if i == 5:
        break
    print(i)  # 输出 0, 1, 2, 3, 4

# continue - 跳过当前迭代
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # 输出奇数</code></pre>
      `
    },
    5: {
      title: "函数和模块",
      content: `
        <h3>函数和模块</h3>
        <p>函数是组织好的、可重复使用的代码块，模块是包含函数和变量的Python文件。</p>
        
        <h4>📦 函数定义</h4>
        <pre><code># 基本函数
def greet(name):
    """打招呼函数"""
    return f"你好，{name}！"

message = greet("张三")
print(message)  # 输出：你好，张三！

# 带默认参数的函数
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 输出：9
print(power(3, 3))   # 输出：27

# 多返回值函数
def get_info():
    name = "张三"
    age = 20
    return name, age

n, a = get_info()</code></pre>
        
        <h4>🎯 参数类型</h4>
        <pre><code># 位置参数
def add(a, b):
    return a + b

# 关键字参数
def describe(name, age, city="北京"):
    print(f"{name}, {age}岁, 来自{city}")

describe(age=20, name="张三")

# 可变参数
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 输出：15

# 关键字可变参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="张三", age=20)</code></pre>
        
        <h4>📚 模块导入</h4>
        <pre><code># 导入整个模块
import math
print(math.pi)          # 3.14159...
print(math.sqrt(16))    # 4.0

# 导入特定函数
from math import pi, sqrt
print(pi)
print(sqrt(25))

# 使用别名
import numpy as np
import pandas as pd

# 导入所有内容（不推荐）
from math import *</code></pre>
        
        <h4>🔧 Lambda函数</h4>
        <pre><code># 匿名函数
square = lambda x: x ** 2
print(square(5))  # 输出：25

# 在排序中使用
students = [("张三", 85), ("李四", 92), ("王五", 78)]
students.sort(key=lambda x: x[1], reverse=True)
print(students)  # 按成绩降序排列</code></pre>
      `
    },
    6: {
      title: "实战练习",
      content: `
        <h3>实战练习</h3>
        <p>通过实际项目巩固所学知识，提升编程能力。</p>
        
        <h4>📝 练习1：简易计算器</h4>
        <pre><code>def calculator():
    print("简易计算器")
    print("1. 加法  2. 减法  3. 乘法  4. 除法")
    
    choice = input("选择操作(1-4): ")
    num1 = float(input("输入第一个数字: "))
    num2 = float(input("输入第二个数字: "))
    
    if choice == '1':
        print(f"结果: {num1 + num2}")
    elif choice == '2':
        print(f"结果: {num1 - num2}")
    elif choice == '3':
        print(f"结果: {num1 * num2}")
    elif choice == '4':
        if num2 != 0:
            print(f"结果: {num1 / num2}")
        else:
            print("错误：除数不能为0")

calculator()</code></pre>
        
        <h4>📝 练习2：学生成绩管理</h4>
        <pre><code>class StudentManager:
    def __init__(self):
        self.students = {}
    
    def add_student(self, name, scores):
        self.students[name] = scores
    
    def get_average(self, name):
        if name in self.students:
            return sum(self.students[name]) / len(self.students[name])
        return None
    
    def get_grade(self, average):
        if average >= 90: return 'A'
        elif average >= 80: return 'B'
        elif average >= 70: return 'C'
        elif average >= 60: return 'D'
        else: return 'F'

# 使用示例
manager = StudentManager()
manager.add_student("张三", [85, 90, 78, 92])
avg = manager.get_average("张三")
print(f"平均分: {avg}, 等级: {manager.get_grade(avg)}")</code></pre>
        
        <h4>📝 练习3：文件处理</h4>
        <pre><code># 读取文件
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    lines = f.readlines()

# 写入文件
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Hello, Python!\n")
    f.writelines(["第一行\n", "第二行\n"])

# CSV文件处理
import csv
with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)</code></pre>
      `
    }
  },
  2: {
    1: {
      title: "数据分析概述",
      content: `
        <h3>Python数据分析概述</h3>
        <p>数据分析是用适当的方法对收集来的大量数据进行分析，提取有用信息和形成结论的过程。</p>
        
        <h4>🎯 数据分析流程</h4>
        <ul>
          <li><strong>数据收集：</strong>从各种来源获取原始数据</li>
          <li><strong>数据清洗：</strong>处理缺失值、异常值、重复值</li>
          <li><strong>数据探索：</strong>了解数据特征和分布</li>
          <li><strong>数据分析：</strong>应用统计方法和机器学习</li>
          <li><strong>数据可视化：</strong>用图表展示分析结果</li>
          <li><strong>结论报告：</strong>总结发现并提出建议</li>
        </ul>
        
        <h4>📚 核心库介绍</h4>
        <pre><code># 数据分析三剑客
import numpy as np      # 数值计算
import pandas as pd     # 数据处理
import matplotlib.pyplot as plt  # 数据可视化

# 其他常用库
import seaborn as sns   # 统计可视化
import scipy.stats as stats  # 统计分析
from sklearn import preprocessing  # 数据预处理</code></pre>
        
        <h4>💡 数据类型</h4>
        <ul>
          <li><strong>数值型：</strong>连续型（温度、价格）、离散型（人数、次数）</li>
          <li><strong>分类型：</strong>名义型（颜色、城市）、有序型（等级、评分）</li>
          <li><strong>时间型：</strong>日期、时间戳</li>
          <li><strong>文本型：</strong>字符串、文档</li>
        </ul>
        
        <h4>🔧 开发环境</h4>
        <pre><code># Jupyter Notebook 常用魔法命令
%matplotlib inline    # 内嵌显示图表
%timeit              # 计时代码执行
%pwd                 # 显示当前目录
%ls                  # 列出文件

# 安装常用库
# pip install numpy pandas matplotlib seaborn jupyter</code></pre>
      `
    },
    2: {
      title: "NumPy数组操作",
      content: `
        <h3>NumPy数组操作</h3>
        <p>NumPy是Python科学计算的基础库，提供了高效的多维数组对象。</p>
        
        <h4>📦 创建数组</h4>
        <pre><code>import numpy as np

# 从列表创建
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# 特殊数组
zeros = np.zeros((3, 4))      # 全零数组
ones = np.ones((2, 3))        # 全一数组
empty = np.empty((2, 2))      # 空数组
eye = np.eye(3)               # 单位矩阵

# 范围数组
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # 5个均匀分布的数

# 随机数组
rand = np.random.rand(3, 3)      # [0,1)均匀分布
randn = np.random.randn(3, 3)    # 标准正态分布
randint = np.random.randint(0, 10, (3, 3))  # 整数</code></pre>
        
        <h4>🔍 数组属性</h4>
        <pre><code>arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)    # (2, 3) - 形状
print(arr.ndim)     # 2 - 维度
print(arr.size)     # 6 - 元素总数
print(arr.dtype)    # int64 - 数据类型
print(arr.itemsize) # 8 - 每个元素字节数</code></pre>
        
        <h4>✂️ 数组切片</h4>
        <pre><code>arr = np.array([[1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]])

# 基本切片
print(arr[0, :])      # 第一行
print(arr[:, 0])      # 第一列
print(arr[0:2, 1:3])  # 子数组

# 条件索引
print(arr[arr > 5])   # 大于5的元素
print(arr[arr % 2 == 0])  # 偶数元素</code></pre>
        
        <h4>🔢 数组运算</h4>
        <pre><code>a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 基本运算
print(a + b)      # [5, 7, 9]
print(a * b)      # [4, 10, 18]
print(a ** 2)     # [1, 4, 9]

# 统计函数
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.sum())      # 21
print(arr.mean())     # 3.5
print(arr.std())      # 标准差
print(arr.max())      # 6
print(arr.min())      # 1

# 沿轴运算
print(arr.sum(axis=0))  # 列求和
print(arr.sum(axis=1))  # 行求和</code></pre>
      `
    },
    3: {
      title: "Pandas数据处理",
      content: `
        <h3>Pandas数据处理</h3>
        <p>Pandas是Python最强大的数据处理库，提供了DataFrame和Series两种核心数据结构。</p>
        
        <h4>📊 创建DataFrame</h4>
        <pre><code>import pandas as pd

# 从字典创建
data = {
    'name': ['张三', '李四', '王五'],
    'age': [20, 22, 21],
    'score': [85, 92, 78]
}
df = pd.DataFrame(data)

# 从列表创建
df2 = pd.DataFrame(
    [[1, 2, 3], [4, 5, 6]],
    columns=['A', 'B', 'C']
)

# 读取文件
df_csv = pd.read_csv('data.csv')
df_excel = pd.read_excel('data.xlsx')
df_json = pd.read_json('data.json')</code></pre>
        
        <h4>🔍 数据查看</h4>
        <pre><code># 基本信息
print(df.head())        # 前5行
print(df.tail(3))       # 后3行
print(df.info())        # 数据类型信息
print(df.describe())    # 统计描述
print(df.shape)         # 形状
print(df.columns)       # 列名

# 选择数据
print(df['name'])           # 选择列
print(df[['name', 'age']])  # 选择多列
print(df.loc[0])            # 按标签选择行
print(df.iloc[0])           # 按位置选择行
print(df.loc[0, 'name'])    # 选择特定单元格</code></pre>
        
        <h4>🧹 数据清洗</h4>
        <pre><code># 处理缺失值
df.dropna()              # 删除含缺失值的行
df.fillna(0)             # 用0填充缺失值
df.fillna(df.mean())     # 用均值填充

# 处理重复值
df.drop_duplicates()     # 删除重复行

# 数据类型转换
df['age'] = df['age'].astype(float)

# 字符串处理
df['name'] = df['name'].str.strip()    # 去空格
df['name'] = df['name'].str.upper()    # 转大写

# 重命名列
df.rename(columns={'name': '姓名'}, inplace=True)</code></pre>
        
        <h4>📈 数据分析</h4>
        <pre><code># 分组聚合
grouped = df.groupby('category')
print(grouped.sum())
print(grouped.mean())
print(grouped.agg(['sum', 'mean', 'count']))

# 数据排序
df.sort_values('score', ascending=False)

# 数据筛选
df[df['score'] > 80]
df[(df['age'] > 20) & (df['score'] > 80)]

# 数据透视表
pivot = df.pivot_table(
    values='score',
    index='category',
    columns='year',
    aggfunc='mean'
)</code></pre>
      `
    },
    4: {
      title: "数据可视化",
      content: `
        <h3>数据可视化</h3>
        <p>数据可视化是将数据以图形方式展示，帮助发现规律和趋势。</p>
        
        <h4>📊 Matplotlib基础</h4>
        <pre><code>import matplotlib.pyplot as plt
import numpy as np

# 折线图
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title('正弦曲线')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.show()

# 多图绘制
fig, axes = plt.subplots(2, 2, figsize=(10, 8))
axes[0, 0].plot(x, y)
axes[0, 1].scatter(x, y)
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>📈 常用图表</h4>
        <pre><code># 柱状图
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]
plt.bar(categories, values)
plt.title('销售数据')
plt.show()

# 散点图
x = np.random.rand(50)
y = np.random.rand(50)
plt.scatter(x, y, c='red', alpha=0.5)
plt.show()

# 直方图
data = np.random.randn(1000)
plt.hist(data, bins=30)
plt.show()

# 饼图
sizes = [30, 25, 20, 15, 10]
labels = ['A', 'B', 'C', 'D', 'E']
plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.show()</code></pre>
        
        <h4>🎨 Seaborn高级可视化</h4>
        <pre><code>import seaborn as sns

# 设置样式
sns.set_style("whitegrid")

# 热力图
corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm')
plt.show()

# 箱线图
sns.boxplot(x='category', y='value', data=df)
plt.show()

# 小提琴图
sns.violinplot(x='category', y='value', data=df)
plt.show()

# 分布图
sns.distplot(df['value'])
plt.show()

# 成对关系图
sns.pairplot(df, hue='category')
plt.show()</code></pre>
        
        <h4>💡 可视化最佳实践</h4>
        <ul>
          <li>选择合适的图表类型</li>
          <li>使用清晰的标题和标签</li>
          <li>保持颜色一致性</li>
          <li>避免图表过于复杂</li>
          <li>突出重点数据</li>
        </ul>
      `
    },
    5: {
      title: "数据清洗实战",
      content: `
        <h3>数据清洗实战</h3>
        <p>数据清洗是数据分析中最耗时的环节，但也是最重要的环节。</p>
        
        <h4>🔍 数据质量检查</h4>
        <pre><code>import pandas as pd

# 加载数据
df = pd.read_csv('sales_data.csv')

# 检查基本信息
print("数据形状:", df.shape)
print("\n缺失值统计:")
print(df.isnull().sum())
print("\n重复行数:", df.duplicated().sum())
print("\n数据类型:")
print(df.dtypes)

# 查看唯一值
for col in df.columns:
    print(f"{col}: {df[col].nunique()} 个唯一值")</code></pre>
        
        <h4>🧹 处理缺失值</h4>
        <pre><code># 删除缺失值
df_clean = df.dropna()  # 删除所有含缺失值的行
df_clean = df.dropna(subset=['important_col'])  # 删除特定列缺失

# 填充缺失值
df['age'].fillna(df['age'].mean(), inplace=True)  # 均值填充
df['category'].fillna('Unknown', inplace=True)    # 常数填充
df['price'].fillna(method='ffill', inplace=True)  # 前向填充

# 插值法
df['value'].interpolate(method='linear', inplace=True)</code></pre>
        
        <h4>⚠️ 处理异常值</h4>
        <pre><code># IQR方法检测异常值
def detect_outliers_iqr(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    return df[(df[column] < lower) | (df[column] > upper)]

outliers = detect_outliers_iqr(df, 'price')

# Z-score方法
from scipy import stats
z_scores = stats.zscore(df['price'])
outliers = df[abs(z_scores) > 3]

# 处理异常值
df['price'] = df['price'].clip(lower=lower, upper=upper)</code></pre>
        
        <h4>🔄 数据转换</h4>
        <pre><code># 标准化
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df['price_scaled'] = scaler.fit_transform(df[['price']])

# 归一化
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
df['price_normalized'] = scaler.fit_transform(df[['price']])

# 独热编码
df = pd.get_dummies(df, columns=['category'])

# 日期处理
df['date'] = pd.to_datetime(df['date'])
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek</code></pre>
      `
    },
    6: {
      title: "综合案例分析",
      content: `
        <h3>综合案例分析：销售数据分析</h3>
        <p>通过一个完整的销售数据分析案例，综合运用所学知识。</p>
        
        <h4>📋 项目背景</h4>
        <p>某电商平台需要分析过去一年的销售数据，找出销售规律，为决策提供支持。</p>
        
        <h4>📊 数据加载与探索</h4>
        <pre><code>import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 加载数据
df = pd.read_csv('sales_2024.csv')

# 数据概览
print("数据形状:", df.shape)
print("\n前5行数据:")
print(df.head())
print("\n数据类型:")
print(df.dtypes)
print("\n统计描述:")
print(df.describe())</code></pre>
        
        <h4>🧹 数据清洗</h4>
        <pre><code># 处理缺失值
df['customer_name'].fillna('Unknown', inplace=True)
df['quantity'].fillna(1, inplace=True)

# 转换日期
df['order_date'] = pd.to_datetime(df['order_date'])

# 计算总金额
df['total_amount'] = df['quantity'] * df['unit_price']

# 提取时间特征
df['year'] = df['order_date'].dt.year
df['month'] = df['order_date'].dt.month
df['day_of_week'] = df['order_date'].dt.dayofweek</code></pre>
        
        <h4>📈 数据分析</h4>
        <pre><code># 月度销售趋势
monthly_sales = df.groupby('month')['total_amount'].sum()
plt.figure(figsize=(12, 6))
plt.plot(monthly_sales.index, monthly_sales.values, marker='o')
plt.title('月度销售趋势')
plt.xlabel('月份')
plt.ylabel('销售额')
plt.grid(True)
plt.show()

# 产品类别分析
category_sales = df.groupby('category')['total_amount'].sum()
plt.figure(figsize=(10, 6))
category_sales.plot(kind='bar')
plt.title('各产品类别销售额')
plt.show()

# 客户分析
top_customers = df.groupby('customer_id')['total_amount'].sum().nlargest(10)
print("前10大客户:")
print(top_customers)</code></pre>
        
        <h4>💡 分析结论</h4>
        <pre><code># 生成报告
print("=" * 50)
print("销售数据分析报告")
print("=" * 50)
print(f"总销售额: ¥{df['total_amount'].sum():,.2f}")
print(f"订单数量: {len(df):,}")
print(f"平均订单金额: ¥{df['total_amount'].mean():,.2f}")
print(f"最畅销产品: {df['product'].mode()[0]}")
print(f"销售高峰月份: {monthly_sales.idxmax()}月")
print("=" * 50)</code></pre>
      `
    }
  },
  3: {
    1: {
      title: "商务数据分析概述",
      content: `
        <h3>商务数据分析概述</h3>
        <p>商务数据分析是将数据分析方法应用于商业场景，帮助企业做出数据驱动的决策。</p>
        
        <h4>🎯 商务分析的核心目标</h4>
        <ul>
          <li><strong>描述性分析：</strong>发生了什么？</li>
          <li><strong>诊断性分析：</strong>为什么会发生？</li>
          <li><strong>预测性分析：</strong>将来可能发生什么？</li>
          <li><strong>规范性分析：</strong>我们应该怎么做？</li>
        </ul>
        
        <h4>📊 常见商务分析场景</h4>
        <ul>
          <li>销售分析：销售额、销售趋势、产品组合</li>
          <li>客户分析：客户画像、客户价值、客户流失</li>
          <li>市场分析：市场份额、竞争分析、趋势预测</li>
          <li>运营分析：库存管理、供应链优化、成本控制</li>
          <li>财务分析：收入预测、成本分析、风险评估</li>
        </ul>
        
        <h4>🔧 商务分析工具箱</h4>
        <pre><code>import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# 设置中文显示
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 设置显示选项
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 100)
pd.set_option('display.float_format', '{:.2f}'.format)</code></pre>
        
        <h4>💡 分析框架</h4>
        <pre><code># 商务分析标准流程
def business_analysis_pipeline(data_path):
    # 1. 数据获取
    df = pd.read_csv(data_path)
    
    # 2. 数据清洗
    df = clean_data(df)
    
    # 3. 探索性分析
    eda_report = exploratory_analysis(df)
    
    # 4. 深度分析
    insights = deep_analysis(df)
    
    # 5. 可视化报告
    create_visualizations(df)
    
    # 6. 结论建议
    recommendations = generate_recommendations(insights)
    
    return recommendations</code></pre>
      `
    },
    2: {
      title: "销售数据分析",
      content: `
        <h3>销售数据分析</h3>
        <p>销售分析是商务分析中最常见的应用，帮助企业了解销售状况并优化策略。</p>
        
        <h4>📊 销售数据指标</h4>
        <pre><code>import pandas as pd
import numpy as np

# 加载销售数据
sales = pd.read_csv('sales_data.csv')
sales['date'] = pd.to_datetime(sales['date'])

# 核心销售指标
def calculate_sales_metrics(df):
    metrics = {
        '总销售额': df['amount'].sum(),
        '平均订单金额': df['amount'].mean(),
        '订单数量': len(df),
        '客单价': df['amount'].sum() / df['customer_id'].nunique(),
        '复购率': df.groupby('customer_id').size().apply(lambda x: x > 1).mean(),
        '销售天数': df['date'].nunique(),
        '日均销售额': df.groupby('date')['amount'].sum().mean()
    }
    return metrics

metrics = calculate_sales_metrics(sales)
for key, value in metrics.items():
    print(f"{key}: {value:,.2f}")</code></pre>
        
        <h4>📈 销售趋势分析</h4>
        <pre><code># 时间序列分析
sales['month'] = sales['date'].dt.to_period('M')
monthly_sales = sales.groupby('month')['amount'].sum()

# 同比分析
sales['year'] = sales['date'].dt.year
sales['month_num'] = sales['date'].dt.month
yearly_comparison = sales.pivot_table(
    values='amount',
    index='month_num',
    columns='year',
    aggfunc='sum'
)

# 环比增长率
monthly_growth = monthly_sales.pct_change() * 100

# 可视化
import matplotlib.pyplot as plt
fig, axes = plt.subplots(2, 1, figsize=(12, 8))
monthly_sales.plot(ax=axes[0], title='月度销售趋势')
monthly_growth.plot(ax=axes[1], title='月度环比增长率(%)')
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>🏆 产品分析</h4>
        <pre><code># ABC分类法
def abc_analysis(df, value_col):
    df_sorted = df.sort_values(value_col, ascending=False)
    df_sorted['cumsum'] = df_sorted[value_col].cumsum()
    df_sorted['cumsum_pct'] = df_sorted['cumsum'] / df_sorted[value_col].sum()
    
    def classify(pct):
        if pct <= 0.8:
            return 'A'
        elif pct <= 0.95:
            return 'B'
        else:
            return 'C'
    
    df_sorted['category'] = df_sorted['cumsum_pct'].apply(classify)
    return df_sorted

product_sales = sales.groupby('product')['amount'].sum()
abc_result = abc_analysis(product_sales.reset_index(), 'amount')
print(abc_result.groupby('category')['product'].count())</code></pre>
        
        <h4>🎯 销售预测</h4>
        <pre><code>from sklearn.linear_model import LinearRegression
import numpy as np

# 简单线性预测
daily_sales = sales.groupby('date')['amount'].sum().reset_index()
daily_sales['day_num'] = range(len(daily_sales))

X = daily_sales[['day_num']]
y = daily_sales['amount']

model = LinearRegression()
model.fit(X, y)

# 预测未来7天
future_days = np.array(range(len(daily_sales), len(daily_sales) + 7)).reshape(-1, 1)
predictions = model.predict(future_days)
print("未来7天预测销售额:", predictions)</code></pre>
      `
    },
    3: {
      title: "客户分析",
      content: `
        <h3>客户分析</h3>
        <p>了解客户行为和价值是制定营销策略的基础。</p>
        
        <h4>👥 客户细分</h4>
        <pre><code>import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

# RFM模型
def calculate_rfm(df, customer_col, date_col, amount_col, analysis_date):
    rfm = df.groupby(customer_col).agg({
        date_col: lambda x: (analysis_date - x.max()).days,
        amount_col: ['count', 'sum']
    })
    rfm.columns = ['recency', 'frequency', 'monetary']
    
    # 分数计算
    rfm['r_score'] = pd.qcut(rfm['recency'], 5, labels=[5,4,3,2,1])
    rfm['f_score'] = pd.qcut(rfm['frequency'], 5, labels=[1,2,3,4,5])
    rfm['m_score'] = pd.qcut(rfm['monetary'], 5, labels=[1,2,3,4,5])
    
    rfm['rfm_score'] = rfm['r_score'].astype(str) + rfm['f_score'].astype(str) + rfm['m_score'].astype(str)
    
    return rfm

# 客户分类
def segment_customers(rfm):
    def classify(row):
        if row['r_score'] >= 4 and row['f_score'] >= 4:
            return '重要价值客户'
        elif row['r_score'] >= 4 and row['f_score'] < 4:
            return '重要发展客户'
        elif row['r_score'] < 4 and row['f_score'] >= 4:
            return '重要保持客户'
        else:
            return '一般客户'
    
    rfm['segment'] = rfm.apply(classify, axis=1)
    return rfm</code></pre>
        
        <h4>💰 客户生命周期价值(CLV)</h4>
        <pre><code>def calculate_clv(df, customer_col, amount_col):
    # 平均购买价值
    avg_purchase = df[amount_col].mean()
    
    # 购买频率
    purchase_freq = df.groupby(customer_col).size().mean()
    
    # 客户生命周期（简化计算）
    customer_lifespan = 2  # 假设2年
    
    # CLV计算
    clv = avg_purchase * purchase_freq * customer_lifespan
    
    return clv

# 客户价值分布
customer_value = df.groupby('customer_id')['amount'].sum()
print("客户价值分布:")
print(customer_value.describe())</code></pre>
        
        <h4>📉 客户流失分析</h4>
        <pre><code># 流失定义：超过N天未购买
def identify_churn(df, customer_col, date_col, threshold_days=90):
    last_purchase = df.groupby(customer_col)[date_col].max()
    current_date = df[date_col].max()
    churned = (current_date - last_purchase) > pd.Timedelta(days=threshold_days)
    return churned

# 流失率计算
churn_status = identify_churn(df, 'customer_id', 'date')
churn_rate = churn_status.mean()
print(f"客户流失率: {churn_rate:.2%}")

# 流失预警特征
churn_features = df.groupby('customer_id').agg({
    'amount': ['mean', 'sum', 'count'],
    'date': ['min', 'max']
})
churn_features.columns = ['avg_amount', 'total_amount', 'purchase_count', 'first_purchase', 'last_purchase']
churn_features['days_since_last'] = (df['date'].max() - churn_features['last_purchase']).dt.days</code></pre>
        
        <h4>🎯 营销响应分析</h4>
        <pre><code># 营销活动效果分析
campaign_data = pd.read_csv('campaign_results.csv')

# 转化率
conversion_rate = campaign_data['converted'].mean()
print(f"整体转化率: {conversion_rate:.2%}")

# 不同渠道效果
channel_performance = campaign_data.groupby('channel').agg({
    'customer_id': 'count',
    'converted': ['sum', 'mean'],
    'revenue': 'sum'
})
print(channel_performance)

# ROI计算
campaign_cost = 10000  # 活动成本
campaign_revenue = campaign_data['revenue'].sum()
roi = (campaign_revenue - campaign_cost) / campaign_cost
print(f"营销ROI: {roi:.2%}")</code></pre>
      `
    },
    4: {
      title: "市场分析",
      content: `
        <h3>市场分析</h3>
        <p>市场分析帮助企业了解市场环境和竞争态势。</p>
        
        <h4>📊 市场份额分析</h4>
        <pre><code>import pandas as pd

# 市场份额计算
market_data = pd.DataFrame({
    'company': ['我们', '竞品A', '竞品B', '竞品C', '其他'],
    'sales': [150, 200, 180, 120, 100]
})

market_data['market_share'] = market_data['sales'] / market_data['sales'].sum() * 100
market_data['cumulative_share'] = market_data['market_share'].cumsum()

print("市场份额分析:")
print(market_data.sort_values('market_share', ascending=False))

# 可视化
import matplotlib.pyplot as plt
plt.figure(figsize=(10, 6))
plt.pie(market_data['market_share'], labels=market_data['company'], autopct='%1.1f%%')
plt.title('市场份额分布')
plt.show()</code></pre>
        
        <h4>📈 市场趋势分析</h4>
        <pre><code># 行业趋势数据
industry_trend = pd.DataFrame({
    'year': range(2019, 2025),
    'market_size': [100, 120, 150, 180, 200, 250],
    'our_sales': [10, 15, 22, 30, 40, 55]
})

# 增长率
industry_trend['market_growth'] = industry_trend['market_size'].pct_change() * 100
industry_trend['our_growth'] = industry_trend['our_sales'].pct_change() * 100

# 市场地位变化
industry_trend['our_share'] = industry_trend['our_sales'] / industry_trend['market_size'] * 100

print(industry_trend)

# 趋势可视化
fig, ax1 = plt.subplots(figsize=(12, 6))
ax1.plot(industry_trend['year'], industry_trend['market_size'], 'b-', label='市场规模')
ax2 = ax1.twinx()
ax2.plot(industry_trend['year'], industry_trend['our_share'], 'r--', label='我们的份额')
plt.legend()
plt.title('市场规模与份额变化')
plt.show()</code></pre>
        
        <h4>🏆 竞争分析</h4>
        <pre><code># 竞品对比分析
competitors = pd.DataFrame({
    '指标': ['价格', '品质', '服务', '品牌', '渠道'],
    '我们': [80, 85, 90, 75, 80],
    '竞品A': [90, 80, 75, 85, 85],
    '竞品B': [75, 90, 80, 80, 75]
})

# 雷达图
from math import pi
categories = competitors['指标'].tolist()
N = len(categories)

fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, polar=True)

angles = [n / float(N) * 2 * pi for n in range(N)]
angles += angles[:1]

for col in ['我们', '竞品A', '竞品B']:
    values = competitors[col].tolist()
    values += values[:1]
    ax.plot(angles, values, label=col)
    ax.fill(angles, values, alpha=0.1)

ax.set_xticks(angles[:-1])
ax.set_xticklabels(categories)
plt.legend()
plt.title('竞品对比分析')
plt.show()</code></pre>
        
        <h4>🎯 SWOT分析</h4>
        <pre><code>swot = {
    '优势': ['产品创新能力强', '客户服务好', '成本控制优秀'],
    '劣势': ['品牌知名度低', '渠道覆盖不足', '资金有限'],
    '机会': ['市场增长快', '政策支持', '技术升级'],
    '威胁': ['竞争加剧', '成本上涨', '客户需求变化']
}

for category, items in swot.items():
    print(f"\n{category}:")
    for item in items:
        print(f"  • {item}")</code></pre>
      `
    },
    5: {
      title: "运营分析",
      content: `
        <h3>运营分析</h3>
        <p>运营分析帮助企业优化日常运营效率，降低成本。</p>
        
        <h4>📦 库存分析</h4>
        <pre><code>import pandas as pd

# 库存周转分析
inventory = pd.DataFrame({
    'product': ['A', 'B', 'C', 'D', 'E'],
    'avg_inventory': [100, 200, 150, 80, 120],
    'sales': [400, 600, 300, 200, 500]
})

# 库存周转率
inventory['turnover_rate'] = inventory['sales'] / inventory['avg_inventory']

# 库存周转天数
inventory['turnover_days'] = 365 / inventory['turnover_rate']

print("库存分析:")
print(inventory.sort_values('turnover_rate', ascending=False))

# 安全库存计算
def calculate_safety_stock(daily_demand, lead_time, service_level=0.95):
    from scipy.stats import norm
    z = norm.ppf(service_level)
    demand_std = daily_demand.std()
    return z * demand_std * (lead_time ** 0.5)</code></pre>
        
        <h4>⏱️ 效率分析</h4>
        <pre><code># 生产效率
production = pd.DataFrame({
    'date': pd.date_range('2024-01-01', periods=30),
    'output': [100, 105, 98, 110, 115, 108, 102, 112, 118, 105,
               108, 115, 120, 112, 105, 110, 118, 122, 115, 108,
               112, 120, 125, 118, 110, 115, 122, 128, 120, 115],
    'defects': [2, 3, 1, 2, 3, 2, 1, 2, 3, 2,
                1, 2, 3, 2, 1, 2, 3, 2, 1, 2,
                1, 2, 3, 2, 1, 2, 3, 2, 1, 2]
})

# 良品率
production['quality_rate'] = (production['output'] - production['defects']) / production['output'] * 100

# 效率趋势
import matplotlib.pyplot as plt
fig, axes = plt.subplots(2, 1, figsize=(12, 8))
axes[0].plot(production['date'], production['output'])
axes[0].set_title('日产量趋势')
axes[1].plot(production['date'], production['quality_rate'])
axes[1].set_title('良品率趋势')
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>💰 成本分析</h4>
        <pre><code># 成本结构分析
costs = pd.DataFrame({
    'category': ['原材料', '人工', '设备', '物流', '其他'],
    'amount': [500000, 300000, 150000, 100000, 50000]
})

costs['percentage'] = costs['amount'] / costs['amount'].sum() * 100

# 帕累托图
costs_sorted = costs.sort_values('amount', ascending=False)
costs_sorted['cumulative'] = costs_sorted['percentage'].cumsum()

fig, ax1 = plt.subplots(figsize=(10, 6))
ax1.bar(costs_sorted['category'], costs_sorted['amount'])
ax2 = ax1.twinx()
ax2.plot(costs_sorted['category'], costs_sorted['cumulative'], 'r-o')
ax2.axhline(y=80, color='g', linestyle='--')
plt.title('成本帕累托分析')
plt.show()</code></pre>
        
        <h4>📊 KPI仪表板</h4>
        <pre><code># 关键绩效指标
kpi_data = {
    '销售额': {'目标': 1000000, '实际': 950000},
    '订单数': {'目标': 5000, '实际': 5200},
    '客户满意度': {'目标': 90, '实际': 88},
    '库存周转率': {'目标': 12, '实际': 10.5}
}

print("KPI完成情况:")
for kpi, values in kpi_data.items():
    achievement = values['实际'] / values['目标'] * 100
    status = '✓' if achievement >= 100 else '✗'
    print(f"{status} {kpi}: {values['实际']}/{values['目标']} ({achievement:.1f}%)")</code></pre>
      `
    },
    6: {
      title: "综合案例：电商数据分析",
      content: `
        <h3>综合案例：电商数据分析</h3>
        <p>通过一个完整的电商数据分析项目，综合运用所学知识。</p>
        
        <h4>📋 项目背景</h4>
        <p>某电商平台需要全面分析过去一年的运营数据，为下一年的战略规划提供支持。</p>
        
        <h4>📊 数据准备</h4>
        <pre><code>import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# 加载数据
orders = pd.read_csv('orders.csv')
products = pd.read_csv('products.csv')
customers = pd.read_csv('customers.csv')

# 数据合并
df = orders.merge(products, on='product_id').merge(customers, on='customer_id')

# 日期处理
df['order_date'] = pd.to_datetime(df['order_date'])
df['year'] = df['order_date'].dt.year
df['month'] = df['order_date'].dt.month
df['weekday'] = df['order_date'].dt.dayofweek

# 计算金额
df['amount'] = df['quantity'] * df['price']</code></pre>
        
        <h4>📈 销售分析</h4>
        <pre><code># 整体销售情况
total_revenue = df['amount'].sum()
total_orders = len(df)
avg_order_value = df['amount'].mean()

print(f"总营收: ¥{total_revenue:,.2f}")
print(f"订单数: {total_orders:,}")
print(f"平均客单价: ¥{avg_order_value:,.2f}")

# 月度趋势
monthly = df.groupby('month').agg({
    'amount': 'sum',
    'order_id': 'count'
}).rename(columns={'amount': 'revenue', 'order_id': 'orders'})

fig, ax1 = plt.subplots(figsize=(12, 6))
ax1.bar(monthly.index, monthly['revenue'], alpha=0.7)
ax2 = ax1.twinx()
ax2.plot(monthly.index, monthly['orders'], 'r-o')
plt.title('月度销售趋势')
plt.show()</code></pre>
        
        <h4>👥 客户分析</h4>
        <pre><code># RFM分析
from datetime import datetime
analysis_date = df['order_date'].max() + pd.Timedelta(days=1)

rfm = df.groupby('customer_id').agg({
    'order_date': lambda x: (analysis_date - x.max()).days,
    'order_id': 'count',
    'amount': 'sum'
})
rfm.columns = ['recency', 'frequency', 'monetary']

# 客户分层
rfm['r_score'] = pd.qcut(rfm['recency'], 5, labels=[5,4,3,2,1])
rfm['f_score'] = pd.qcut(rfm['frequency'], 5, labels=[1,2,3,4,5])
rfm['m_score'] = pd.qcut(rfm['monetary'], 5, labels=[1,2,3,4,5])
rfm['rfm_score'] = rfm['r_score'].astype(int) + rfm['f_score'].astype(int) + rfm['m_score'].astype(int)

# 客户价值分布
print("客户价值分布:")
print(rfm['rfm_score'].value_counts().sort_index())</code></pre>
        
        <h4>🏆 产品分析</h4>
        <pre><code># 产品销售排名
product_sales = df.groupby('product_name').agg({
    'amount': 'sum',
    'quantity': 'sum',
    'order_id': 'count'
}).sort_values('amount', ascending=False)

print("Top 10 产品:")
print(product_sales.head(10))

# 品类分析
category_sales = df.groupby('category')['amount'].sum()
plt.figure(figsize=(10, 6))
category_sales.plot(kind='pie', autopct='%1.1f%%')
plt.title('品类销售占比')
plt.show()</code></pre>
        
        <h4>💡 分析报告</h4>
        <pre><code># 生成分析报告
report = f"""
{'='*50}
电商数据分析报告
{'='*50}

一、整体概况
- 总营收: ¥{total_revenue:,.2f}
- 订单数: {total_orders:,}
- 客户数: {df['customer_id'].nunique():,}
- 平均客单价: ¥{avg_order_value:,.2f}

二、销售趋势
- 销售高峰月份: {monthly['revenue'].idxmax()}月
- 销售低谷月份: {monthly['revenue'].idxmin()}月
- 月均销售额: ¥{monthly['revenue'].mean():,.2f}

三、客户洞察
- 高价值客户占比: {(rfm['rfm_score'] >= 12).mean():.1%}
- 平均购买频次: {rfm['frequency'].mean():.1f}次
- 平均客户价值: ¥{rfm['monetary'].mean():,.2f}

四、产品分析
- 最畅销产品: {product_sales.index[0]}
- Top 10产品贡献: {product_sales.head(10)['amount'].sum() / total_revenue:.1%}

五、建议
1. 加强高价值客户维护
2. 优化产品组合
3. 提升低谷期销售
{'='*50}
"""
print(report)</code></pre>
      `
    }
  },
  4: {
    1: {
      title: "高级可视化技术",
      content: `
        <h3>高级可视化技术</h3>
        <p>掌握高级数据可视化技术，创建专业级的可视化作品。</p>
        
        <h4>🎨 可视化设计原则</h4>
        <ul>
          <li><strong>清晰性：</strong>信息传达准确无误</li>
          <li><strong>简洁性：</strong>避免不必要的装饰</li>
          <li><strong>一致性：</strong>风格和颜色统一</li>
          <li><strong>可读性：</strong>字体大小适中，标签清晰</li>
          <li><strong>美观性：</strong>配色协调，布局合理</li>
        </ul>
        
        <h4>📊 Matplotlib高级技巧</h4>
        <pre><code>import matplotlib.pyplot as plt
import numpy as np

# 自定义样式
plt.style.use('seaborn-v0_8-darkgrid')

# 创建复杂图表
fig = plt.figure(figsize=(14, 10))

# 网格布局
gs = fig.add_gridspec(3, 3, hspace=0.3, wspace=0.3)

ax1 = fig.add_subplot(gs[0, :])  # 第一行全部
ax2 = fig.add_subplot(gs[1, :2])  # 第二行前两列
ax3 = fig.add_subplot(gs[1, 2])   # 第二行第三列
ax4 = fig.add_subplot(gs[2, :])   # 第三行全部

# 自定义颜色
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']

# 添加注释
ax1.annotate('重要数据点', xy=(5, 100), xytext=(7, 120),
            arrowprops=dict(arrowstyle='->', color='red'))

plt.show()</code></pre>
        
        <h4>📈 交互式图表</h4>
        <pre><code>import plotly.express as px
import plotly.graph_objects as go

# 交互式散点图
fig = px.scatter(df, x='x', y='y', color='category',
                 size='size', hover_data=['name'],
                 title='交互式散点图')
fig.show()

# 交互式折线图
fig = go.Figure()
fig.add_trace(go.Scatter(x=dates, y=values, mode='lines+markers',
                         name='数据', line=dict(color='royalblue', width=3)))
fig.update_layout(title='时间序列', xaxis_title='日期', yaxis_title='值')
fig.show()

# 3D图表
fig = go.Figure(data=[go.Surface(z=z_data)])
fig.update_layout(title='3D曲面图')
fig.show()</code></pre>
        
        <h4>🎯 动态可视化</h4>
        <pre><code>from matplotlib.animation import FuncAnimation

# 创建动画
fig, ax = plt.subplots(figsize=(10, 6))
line, = ax.plot([], [], 'r-')

def init():
    ax.set_xlim(0, 10)
    ax.set_ylim(-1, 1)
    return line,

def animate(frame):
    x = np.linspace(0, 10, 100)
    y = np.sin(x + frame / 10)
    line.set_data(x, y)
    return line,

anim = FuncAnimation(fig, animate, init_func=init,
                     frames=100, interval=50, blit=True)
plt.show()</code></pre>
      `
    },
    2: {
      title: "统计图表进阶",
      content: `
        <h3>统计图表进阶</h3>
        <p>学习专业统计图表的创建和应用场景。</p>
        
        <h4>📊 箱线图与小提琴图</h4>
        <pre><code>import seaborn as sns
import matplotlib.pyplot as plt

# 箱线图
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

sns.boxplot(x='category', y='value', data=df, ax=axes[0])
axes[0].set_title('箱线图')

# 小提琴图
sns.violinplot(x='category', y='value', data=df, ax=axes[1])
axes[1].set_title('小提琴图')

plt.tight_layout()
plt.show()

# 分组箱线图
plt.figure(figsize=(12, 6))
sns.boxplot(x='category', y='value', hue='group', data=df)
plt.title('分组箱线图')
plt.legend(title='组别')
plt.show()</code></pre>
        
        <h4>📈 分布图</h4>
        <pre><code># 直方图与密度图
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# 直方图
axes[0].hist(df['value'], bins=30, edgecolor='black')
axes[0].set_title('直方图')

# 密度图
df['value'].plot(kind='kde', ax=axes[1])
axes[1].set_title('密度图')

# 组合图
sns.histplot(df['value'], kde=True, ax=axes[2])
axes[2].set_title('直方图+密度图')

plt.tight_layout()
plt.show()

# 分组分布
plt.figure(figsize=(10, 6))
for category in df['category'].unique():
    subset = df[df['category'] == category]['value']
    sns.kdeplot(subset, label=category)
plt.legend()
plt.title('分组分布对比')
plt.show()</code></pre>
        
        <h4>🔥 热力图</h4>
        <pre><code># 相关性热力图
plt.figure(figsize=(12, 10))
corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0,
            fmt='.2f', square=True)
plt.title('相关性热力图')
plt.show()

# 透视表热力图
pivot = df.pivot_table(values='value', index='row', columns='col', aggfunc='mean')
plt.figure(figsize=(10, 8))
sns.heatmap(pivot, cmap='YlOrRd', annot=True, fmt='.0f')
plt.title('数据透视热力图')
plt.show()</code></pre>
        
        <h4>📊 成对关系图</h4>
        <pre><code># 成对散点图
plt.figure(figsize=(12, 10))
sns.pairplot(df[['col1', 'col2', 'col3', 'category']], hue='category')
plt.suptitle('变量关系矩阵图', y=1.02)
plt.show()

# 回归图
fig, axes = plt.subplots(1, 2, figsize=(14, 6))
sns.regplot(x='x', y='y', data=df, ax=axes[0])
axes[0].set_title('线性回归图')

sns.residplot(x='x', y='y', data=df, ax=axes[1])
axes[1].set_title('残差图')

plt.tight_layout()
plt.show()</code></pre>
      `
    },
    3: {
      title: "地理数据可视化",
      content: `
        <h3>地理数据可视化</h3>
        <p>学习如何在地图上展示数据，发现地理分布规律。</p>
        
        <h4>🗺️ 基础地图</h4>
        <pre><code>import folium
from folium.plugins import HeatMap

# 创建地图
m = folium.Map(location=[39.9042, 116.4074], zoom_start=12)

# 添加标记
folium.Marker(
    location=[39.9042, 116.4074],
    popup='北京',
    icon=folium.Icon(color='red', icon='info-sign')
).add_to(m)

# 添加圆形标记
folium.Circle(
    location=[39.9163, 116.3972],
    radius=1000,
    popup='天安门',
    color='blue',
    fill=True
).add_to(m)

m.save('map.html')</code></pre>
        
        <h4>🔥 热力图</h4>
        <pre><code># 创建热力图
heat_data = [[row['lat'], row['lon']] for index, row in df.iterrows()]

m = folium.Map(location=[35.8617, 104.1954], zoom_start=4)
HeatMap(heat_data).add_to(m)
m.save('heatmap.html')

# 带权重的热力图
heat_data_weighted = [[row['lat'], row['lon'], row['value']] 
                      for index, row in df.iterrows()]
HeatMap(heat_data_weighted, radius=15).add_to(m)</code></pre>
        
        <h4>📊 区域地图</h4>
        <pre><code>import geopandas as gpd
import matplotlib.pyplot as plt

# 加载地理数据
gdf = gpd.read_file('china_provinces.shp')

# 合并数据
gdf = gdf.merge(data, on='province')

# 绘制地图
fig, ax = plt.subplots(figsize=(12, 10))
gdf.plot(column='value', cmap='YlOrRd', legend=True, ax=ax)
ax.set_title('各省数据分布')
plt.axis('off')
plt.show()

# 交互式区域地图
import plotly.express as px
fig = px.choropleth(df, geojson=geojson, locations='province',
                    color='value', scope='asia')
fig.show()</code></pre>
        
        <h4>📍 散点地图</h4>
        <pre><code># 经纬度散点图
plt.figure(figsize=(12, 8))
plt.scatter(df['lon'], df['lat'], c=df['value'], 
            cmap='viridis', alpha=0.6, s=50)
plt.colorbar(label='数值')
plt.xlabel('经度')
plt.ylabel('纬度')
plt.title('地理分布散点图')
plt.show()

# 气泡地图
fig = px.scatter_geo(df, lat='lat', lon='lon',
                     size='value', color='category',
                     hover_name='name', projection='natural earth')
fig.show()</code></pre>
      `
    },
    4: {
      title: "时间序列可视化",
      content: `
        <h3>时间序列可视化</h3>
        <p>时间序列数据的可视化技巧和分析方法。</p>
        
        <h4>📈 基础时间序列图</h4>
        <pre><code>import pandas as pd
import matplotlib.pyplot as plt

# 准备时间序列数据
df['date'] = pd.to_datetime(df['date'])
df = df.set_index('date')

# 基础折线图
plt.figure(figsize=(14, 6))
plt.plot(df.index, df['value'])
plt.title('时间序列趋势')
plt.xlabel('日期')
plt.ylabel('值')
plt.grid(True, alpha=0.3)
plt.show()

# 多系列对比
fig, ax = plt.subplots(figsize=(14, 6))
for col in ['value1', 'value2', 'value3']:
    ax.plot(df.index, df[col], label=col)
ax.legend()
ax.set_title('多系列时间对比')
plt.show()</code></pre>
        
        <h4>📊 季节性分解</h4>
        <pre><code>from statsmodels.tsa.seasonal import seasonal_decompose

# 分解时间序列
result = seasonal_decompose(df['value'], model='additive', period=12)

# 可视化分解结果
fig, axes = plt.subplots(4, 1, figsize=(14, 12))
result.observed.plot(ax=axes[0], title='原始数据')
result.trend.plot(ax=axes[1], title='趋势')
result.seasonal.plot(ax=axes[2], title='季节性')
result.resid.plot(ax=axes[3], title='残差')
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>📅 日历热力图</h4>
        <pre><code>import calplot

# 创建日历热力图
calplot.calplot(df['value'], cmap='YlOrRd', figsize=(16, 8))
plt.title('日历热力图')
plt.show()

# 自定义日历视图
plt.figure(figsize=(16, 8))
df_pivot = df.pivot_table(values='value', 
                          index=df.index.dayofweek,
                          columns=df.index.week)
sns.heatmap(df_pivot, cmap='YlOrRd')
plt.title('周-月热力图')
plt.xlabel('周')
plt.ylabel('星期')
plt.show()</code></pre>
        
        <h4>📊 滚动统计</h4>
        <pre><code># 滚动均值和标准差
window = 30
df['rolling_mean'] = df['value'].rolling(window=window).mean()
df['rolling_std'] = df['value'].rolling(window=window).std()

plt.figure(figsize=(14, 6))
plt.plot(df.index, df['value'], alpha=0.5, label='原始数据')
plt.plot(df.index, df['rolling_mean'], label=f'{window}天均值', linewidth=2)
plt.fill_between(df.index, 
                 df['rolling_mean'] - df['rolling_std'],
                 df['rolling_mean'] + df['rolling_std'],
                 alpha=0.2)
plt.legend()
plt.title('滚动统计')
plt.show()

# 累计图
plt.figure(figsize=(14, 6))
plt.fill_between(df.index, df['value'].cumsum(), alpha=0.5)
plt.plot(df.index, df['value'].cumsum(), linewidth=2)
plt.title('累计值')
plt.show()</code></pre>
      `
    },
    5: {
      title: "仪表板设计",
      content: `
        <h3>仪表板设计</h3>
        <p>学习如何设计专业的数据仪表板，有效传达信息。</p>
        
        <h4>🎨 仪表板设计原则</h4>
        <ul>
          <li><strong>信息层次：</strong>重要信息突出显示</li>
          <li><strong>视觉平衡：</strong>布局合理，留白适当</li>
          <li><strong>色彩搭配：</strong>配色协调，对比明显</li>
          <li><strong>交互设计：</strong>支持筛选和钻取</li>
          <li><strong>响应式：</strong>适配不同屏幕尺寸</li>
        </ul>
        
        <h4>📊 KPI卡片</h4>
        <pre><code>import matplotlib.pyplot as plt
import matplotlib.patches as patches

def create_kpi_card(ax, title, value, change, color):
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.axis('off')
    
    # 背景
    rect = patches.FancyBboxPatch((0.5, 0.5), 9, 9,
                                   boxstyle="round,pad=0.1",
                                   facecolor=color, alpha=0.2)
    ax.add_patch(rect)
    
    # 标题
    ax.text(5, 8, title, ha='center', fontsize=14, color='gray')
    
    # 数值
    ax.text(5, 5, value, ha='center', fontsize=28, fontweight='bold')
    
    # 变化
    change_color = 'green' if change >= 0 else 'red'
    arrow = '↑' if change >= 0 else '↓'
    ax.text(5, 2, f'{arrow} {abs(change):.1%}', 
            ha='center', fontsize=12, color=change_color)

fig, axes = plt.subplots(1, 4, figsize=(16, 4))
create_kpi_card(axes[0], '总销售额', '¥1,234,567', 0.15, '#4ECDC4')
create_kpi_card(axes[1], '订单数', '12,345', 0.08, '#FF6B6B')
create_kpi_card(axes[2], '客户数', '5,678', 0.12, '#45B7D1')
create_kpi_card(axes[3], '转化率', '3.45%', -0.02, '#96CEB4')
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>📈 综合仪表板</h4>
        <pre><code># 创建仪表板布局
fig = plt.figure(figsize=(20, 12))
gs = fig.add_gridspec(3, 4, hspace=0.3, wspace=0.3)

# KPI区域
ax_kpi1 = fig.add_subplot(gs[0, 0])
ax_kpi2 = fig.add_subplot(gs[0, 1])
ax_kpi3 = fig.add_subplot(gs[0, 2])
ax_kpi4 = fig.add_subplot(gs[0, 3])

# 趋势图
ax_trend = fig.add_subplot(gs[1, :2])

# 饼图
ax_pie = fig.add_subplot(gs[1, 2])

# 柱状图
ax_bar = fig.add_subplot(gs[1, 3])

# 热力图
ax_heat = fig.add_subplot(gs[2, :2])

# 散点图
ax_scatter = fig.add_subplot(gs[2, 2:])

plt.suptitle('数据分析仪表板', fontsize=20, fontweight='bold')
plt.show()</code></pre>
        
        <h4>🔧 Streamlit仪表板</h4>
        <pre><code>import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(page_title='数据分析仪表板', layout='wide')

st.title('📊 数据分析仪表板')

# 侧边栏筛选
st.sidebar.header('筛选条件')
date_range = st.sidebar.date_input('日期范围')
category = st.sidebar.multiselect('类别', df['category'].unique())

# KPI指标
col1, col2, col3, col4 = st.columns(4)
with col1:
    st.metric('总销售额', '¥1,234,567', '+15%')
with col2:
    st.metric('订单数', '12,345', '+8%')
with col3:
    st.metric('客户数', '5,678', '+12%')
with col4:
    st.metric('转化率', '3.45%', '-2%')

# 图表
col1, col2 = st.columns(2)
with col1:
    st.subheader('销售趋势')
    fig = px.line(df, x='date', y='value')
    st.plotly_chart(fig, use_container_width=True)

with col2:
    st.subheader('类别分布')
    fig = px.pie(df, values='value', names='category')
    st.plotly_chart(fig, use_container_width=True)</code></pre>
      `
    },
    6: {
      title: "可视化案例实战",
      content: `
        <h3>可视化案例实战</h3>
        <p>通过完整案例，综合运用所学可视化技术。</p>
        
        <h4>📋 案例：销售数据可视化报告</h4>
        <pre><code>import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# 设置样式
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['figure.dpi'] = 100

# 加载数据
df = pd.read_csv('sales_data.csv')
df['date'] = pd.to_datetime(df['date'])

# 创建报告
fig = plt.figure(figsize=(20, 24))
gs = fig.add_gridspec(5, 3, hspace=0.35, wspace=0.3)

# 标题
fig.suptitle('2024年度销售数据分析报告', fontsize=24, fontweight='bold', y=0.98)</code></pre>
        
        <h4>📊 KPI概览</h4>
        <pre><code># KPI卡片
def add_kpi_text(ax, label, value, change, color):
    ax.text(0.5, 0.7, label, ha='center', fontsize=14, color='gray', transform=ax.transAxes)
    ax.text(0.5, 0.4, value, ha='center', fontsize=24, fontweight='bold', transform=ax.transAxes)
    change_color = 'green' if change >= 0 else 'red'
    arrow = '↑' if change >= 0 else '↓'
    ax.text(0.5, 0.15, f'{arrow} {abs(change):.1%}', ha='center', fontsize=12, 
            color=change_color, transform=ax.transAxes)
    ax.axis('off')

ax1, ax2, ax3 = fig.add_subplot(gs[0, 0]), fig.add_subplot(gs[0, 1]), fig.add_subplot(gs[0, 2])
add_kpi_text(ax1, '总销售额', f'¥{df["amount"].sum():,.0f}', 0.15)
add_kpi_text(ax2, '订单数量', f'{len(df):,}', 0.08)
add_kpi_text(ax3, '平均客单价', f'¥{df["amount"].mean():,.0f}', 0.12)</code></pre>
        
        <h4>📈 趋势分析</h4>
        <pre><code># 月度趋势
ax_trend = fig.add_subplot(gs[1, :])
monthly = df.groupby(df['date'].dt.to_period('M'))['amount'].sum()
monthly.index = monthly.index.astype(str)

ax_trend.fill_between(range(len(monthly)), monthly.values, alpha=0.3)
ax_trend.plot(range(len(monthly)), monthly.values, linewidth=2, marker='o')
ax_trend.set_xticks(range(len(monthly)))
ax_trend.set_xticklabels(monthly.index, rotation=45)
ax_trend.set_title('月度销售趋势', fontsize=14, fontweight='bold')
ax_trend.set_ylabel('销售额')</code></pre>
        
        <h4>🏆 产品分析</h4>
        <pre><code># 产品销售排行
ax_product = fig.add_subplot(gs[2, 0])
top_products = df.groupby('product')['amount'].sum().nlargest(10)
ax_product.barh(range(len(top_products)), top_products.values)
ax_product.set_yticks(range(len(top_products)))
ax_product.set_yticklabels(top_products.index)
ax_product.set_title('Top 10 产品', fontsize=12, fontweight='bold')
ax_product.invert_yaxis()

# 品类分布
ax_category = fig.add_subplot(gs[2, 1])
category_sales = df.groupby('category')['amount'].sum()
ax_category.pie(category_sales, labels=category_sales.index, autopct='%1.1f%%')
ax_category.set_title('品类销售占比', fontsize=12, fontweight='bold')

# 区域分布
ax_region = fig.add_subplot(gs[2, 2])
region_sales = df.groupby('region')['amount'].sum()
ax_region.bar(range(len(region_sales)), region_sales.values, color='steelblue')
ax_region.set_xticks(range(len(region_sales)))
ax_region.set_xticklabels(region_sales.index, rotation=45)
ax_region.set_title('区域销售分布', fontsize=12, fontweight='bold')</code></pre>
        
        <h4>💡 结论与建议</h4>
        <pre><code># 添加结论文本
ax_conclusion = fig.add_subplot(gs[4, :])
ax_conclusion.axis('off')

conclusion = """
【分析结论】
1. 销售整体呈上升趋势，第四季度表现最佳
2. Top 10产品贡献了60%的销售额
3. 华东地区销售额最高，西部地区有增长潜力

【改进建议】
1. 加强热销产品的库存管理
2. 开拓西部市场，增加营销投入
3. 优化产品组合，提升低频产品销量
"""
ax_conclusion.text(0.1, 0.5, conclusion, fontsize=12, va='center', 
                   family='monospace', transform=ax_conclusion.transAxes)

plt.savefig('sales_report.png', dpi=150, bbox_inches='tight')
plt.show()</code></pre>
      `
    }
  },
  5: {
    1: {
      title: "机器学习概述",
      content: `
        <h3>机器学习概述</h3>
        <p>机器学习是人工智能的核心领域，让计算机从数据中学习规律。</p>
        
        <h4>🎯 什么是机器学习</h4>
        <p>机器学习是一种让计算机系统通过经验自动改进的技术，无需显式编程。</p>
        
        <h4>📚 机器学习类型</h4>
        <ul>
          <li><strong>监督学习：</strong>有标签数据，如分类、回归</li>
          <li><strong>无监督学习：</strong>无标签数据，如聚类、降维</li>
          <li><strong>半监督学习：</strong>部分有标签数据</li>
          <li><strong>强化学习：</strong>通过奖励学习最优策略</li>
        </ul>
        
        <h4>🔧 常用库介绍</h4>
        <pre><code># 机器学习常用库
import numpy as np          # 数值计算
import pandas as pd         # 数据处理
import matplotlib.pyplot as plt  # 可视化
import seaborn as sns       # 统计可视化

# 机器学习核心库
from sklearn.model_selection import train_test_split  # 数据分割
from sklearn.preprocessing import StandardScaler      # 标准化
from sklearn.metrics import accuracy_score, mean_squared_error  # 评估指标

# 常用算法
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA</code></pre>
        
        <h4>📊 机器学习流程</h4>
        <pre><code>def ml_pipeline(data_path):
    # 1. 数据收集
    df = pd.read_csv(data_path)
    
    # 2. 数据预处理
    df = preprocess_data(df)
    
    # 3. 特征工程
    X, y = feature_engineering(df)
    
    # 4. 数据分割
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    # 5. 模型训练
    model = train_model(X_train, y_train)
    
    # 6. 模型评估
    score = evaluate_model(model, X_test, y_test)
    
    # 7. 模型部署
    deploy_model(model)
    
    return model, score</code></pre>
      `
    },
    2: {
      title: "数据预处理",
      content: `
        <h3>数据预处理</h3>
        <p>数据预处理是机器学习中最关键的步骤，直接影响模型效果。</p>
        
        <h4>🔍 数据探索</h4>
        <pre><code>import pandas as pd
import numpy as np

# 加载数据
df = pd.read_csv('data.csv')

# 基本探索
print("数据形状:", df.shape)
print("\n数据类型:")
print(df.dtypes)
print("\n缺失值统计:")
print(df.isnull().sum())
print("\n统计描述:")
print(df.describe())

# 可视化探索
import matplotlib.pyplot as plt
import seaborn as sns

# 分布图
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
for i, col in enumerate(df.select_dtypes(include=[np.number]).columns[:4]):
    sns.histplot(df[col], ax=axes[i//2, i%2])
plt.tight_layout()
plt.show()</code></pre>
        
        <h4>🧹 数据清洗</h4>
        <pre><code># 处理缺失值
# 删除缺失值
df_drop = df.dropna()

# 填充缺失值
df_fill = df.fillna(df.mean())  # 均值填充
df_fill = df.fillna(df.median())  # 中位数填充
df_fill = df.fillna(method='ffill')  # 前向填充

# 处理异常值
def remove_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    return df[(df[column] >= lower) & (df[column] <= upper)]

df_clean = remove_outliers(df, 'value')

# 处理重复值
df = df.drop_duplicates()</code></pre>
        
        <h4>🔄 特征转换</h4>
        <pre><code>from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder

# 标准化 (均值为0，标准差为1)
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df[['col1', 'col2']])

# 归一化 (缩放到0-1)
minmax = MinMaxScaler()
df_normalized = minmax.fit_transform(df[['col1', 'col2']])

# 标签编码
le = LabelEncoder()
df['category_encoded'] = le.fit_transform(df['category'])

# 独热编码
df_onehot = pd.get_dummies(df, columns=['category'])

# 对数转换
df['log_value'] = np.log1p(df['value'])</code></pre>
        
        <h4>✂️ 数据分割</h4>
        <pre><code>from sklearn.model_selection import train_test_split

# 简单分割
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 分层抽样分割
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# 交叉验证
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
print(f"交叉验证分数: {scores.mean():.3f} (+/- {scores.std():.3f})")</code></pre>
      `
    },
    3: {
      title: "监督学习算法",
      content: `
        <h3>监督学习算法</h3>
        <p>监督学习使用有标签数据训练模型，进行预测。</p>
        
        <h4>📈 线性回归</h4>
        <pre><code>from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 创建模型
model = LinearRegression()

# 训练
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"MSE: {mse:.2f}")
print(f"R²: {r2:.2f}")

# 查看系数
print("截距:", model.intercept_)
print("系数:", model.coef_)</code></pre>
        
        <h4>🎯 逻辑回归</h4>
        <pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# 创建模型
model = LogisticRegression()

# 训练
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)

# 评估
print("准确率:", accuracy_score(y_test, y_pred))
print("\n分类报告:")
print(classification_report(y_test, y_pred))</code></pre>
        
        <h4>🌳 决策树</h4>
        <pre><code>from sklearn.tree import DecisionTreeClassifier, plot_tree

# 创建模型
model = DecisionTreeClassifier(max_depth=5, random_state=42)

# 训练
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 可视化决策树
plt.figure(figsize=(20, 10))
plot_tree(model, feature_names=X.columns, class_names=['0', '1'], filled=True)
plt.show()

# 特征重要性
importance = pd.DataFrame({
    'feature': X.columns,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)
print(importance)</code></pre>
        
        <h4>🌲 随机森林</h4>
        <pre><code>from sklearn.ensemble import RandomForestClassifier

# 创建模型
model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)

# 训练
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
print("准确率:", accuracy_score(y_test, y_pred))

# 特征重要性
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(feature_importance['feature'][:10], feature_importance['importance'][:10])
plt.title('Top 10 重要特征')
plt.show()</code></pre>
      `
    },
    4: {
      title: "无监督学习算法",
      content: `
        <h3>无监督学习算法</h3>
        <p>无监督学习从无标签数据中发现隐藏模式。</p>
        
        <h4>🎯 K-Means聚类</h4>
        <pre><code>from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# 确定最佳K值 - 肘部法则
inertias = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X)
    inertias.append(kmeans.inertia_)

plt.plot(range(1, 11), inertias, marker='o')
plt.xlabel('K值')
plt.ylabel('惯性')
plt.title('肘部法则')
plt.show()

# 训练模型
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)

# 评估
print("轮廓系数:", silhouette_score(X, labels))

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], 
            s=200, c='red', marker='X')
plt.title('K-Means聚类结果')
plt.show()</code></pre>
        
        <h4>📊 层次聚类</h4>
        <pre><code>from scipy.cluster.hierarchy import dendrogram, linkage

# 计算链接矩阵
Z = linkage(X, method='ward')

# 绘制树状图
plt.figure(figsize=(12, 6))
dendrogram(Z)
plt.title('层次聚类树状图')
plt.xlabel('样本')
plt.ylabel('距离')
plt.show()

# 使用sklearn
from sklearn.cluster import AgglomerativeClustering
model = AgglomerativeClustering(n_clusters=3)
labels = model.fit_predict(X)</code></pre>
        
        <h4>📉 降维 - PCA</h4>
        <pre><code>from sklearn.decomposition import PCA

# PCA降维
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

# 查看解释方差比
print("解释方差比:", pca.explained_variance_ratio_)
print("累计解释方差:", pca.explained_variance_ratio_.cumsum())

# 可视化
plt.figure(figsize=(10, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=labels, cmap='viridis', alpha=0.6)
plt.xlabel('第一主成分')
plt.ylabel('第二主成分')
plt.title('PCA降维结果')
plt.colorbar(label='聚类')
plt.show()

# 特征贡献
components = pd.DataFrame(pca.components_, columns=feature_names)
print("主成分贡献:")
print(components)</code></pre>
        
        <h4>🔍 DBSCAN</h4>
        <pre><code>from sklearn.cluster import DBSCAN

# DBSCAN聚类
dbscan = DBSCAN(eps=0.5, min_samples=5)
labels = dbscan.fit_predict(X)

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.title('DBSCAN聚类结果')
plt.show()

# 噪声点数量
n_noise = list(labels).count(-1)
print(f"噪声点数量: {n_noise}")</code></pre>
      `
    },
    5: {
      title: "模型评估与优化",
      content: `
        <h3>模型评估与优化</h3>
        <p>正确评估和优化模型是机器学习成功的关键。</p>
        
        <h4>📊 分类模型评估</h4>
        <pre><code>from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                             f1_score, roc_auc_score, confusion_matrix,
                             classification_report, roc_curve)

# 预测
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]

# 基本指标
print("准确率:", accuracy_score(y_test, y_pred))
print("精确率:", precision_score(y_test, y_pred))
print("召回率:", recall_score(y_test, y_pred))
print("F1分数:", f1_score(y_test, y_pred))
print("AUC:", roc_auc_score(y_test, y_prob))

# 混淆矩阵
cm = confusion_matrix(y_test, y_pred)
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.title('混淆矩阵')
plt.xlabel('预测值')
plt.ylabel('真实值')
plt.show()

# ROC曲线
fpr, tpr, _ = roc_curve(y_test, y_prob)
plt.plot(fpr, tpr, label=f'AUC = {roc_auc_score(y_test, y_prob):.2f}')
plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel('假阳性率')
plt.ylabel('真阳性率')
plt.title('ROC曲线')
plt.legend()
plt.show()</code></pre>
        
        <h4>📈 回归模型评估</h4>
        <pre><code>from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

# 预测
y_pred = model.predict(X_test)

# 评估指标
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MSE: {mse:.2f}")
print(f"RMSE: {rmse:.2f}")
print(f"MAE: {mae:.2f}")
print(f"R²: {r2:.2f}")

# 残差图
residuals = y_test - y_pred
plt.figure(figsize=(10, 6))
plt.scatter(y_pred, residuals, alpha=0.5)
plt.axhline(y=0, color='r', linestyle='--')
plt.xlabel('预测值')
plt.ylabel('残差')
plt.title('残差图')
plt.show()</code></pre>
        
        <h4>🔧 超参数调优</h4>
        <pre><code>from sklearn.model_selection import GridSearchCV, RandomizedSearchCV

# 网格搜索
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    RandomForestClassifier(),
    param_grid,
    cv=5,
    scoring='accuracy',
    n_jobs=-1
)
grid_search.fit(X_train, y_train)

print("最佳参数:", grid_search.best_params_)
print("最佳分数:", grid_search.best_score_)

# 随机搜索
random_search = RandomizedSearchCV(
    RandomForestClassifier(),
    param_distributions=param_grid,
    n_iter=10,
    cv=5,
    random_state=42
)
random_search.fit(X_train, y_train)</code></pre>
        
        <h4>✅ 交叉验证</h4>
        <pre><code>from sklearn.model_selection import cross_val_score, cross_validate

# 简单交叉验证
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"交叉验证分数: {scores.mean():.3f} (+/- {scores.std():.3f})")

# 多指标交叉验证
scoring = ['accuracy', 'precision', 'recall', 'f1']
results = cross_validate(model, X, y, cv=5, scoring=scoring)

for metric in scoring:
    print(f"{metric}: {results[f'test_{metric}'].mean():.3f}")</code></pre>
      `
    },
    6: {
      title: "机器学习实战案例",
      content: `
        <h3>机器学习实战案例</h3>
        <p>通过完整案例，综合运用机器学习技术解决实际问题。</p>
        
        <h4>📋 案例：客户流失预测</h4>
        <pre><code>import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

# 加载数据
df = pd.read_csv('customer_churn.csv')

# 数据探索
print("数据形状:", df.shape)
print("\n流失率:", df['churn'].mean())

# 特征工程
# 处理分类变量
df = pd.get_dummies(df, columns=['contract_type', 'payment_method'])

# 特征选择
features = ['tenure', 'monthly_charges', 'total_charges', 
            'contract_type_Month-to-month', 'payment_method_Electronic check']
X = df[features]
y = df['churn']

# 数据分割
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y)

# 标准化
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)</code></pre>
        
        <h4>🔧 模型训练</h4>
        <pre><code># 训练多个模型
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier

models = {
    'Logistic Regression': LogisticRegression(),
    'Decision Tree': DecisionTreeClassifier(max_depth=5),
    'Random Forest': RandomForestClassifier(n_estimators=100),
    'Gradient Boosting': GradientBoostingClassifier(n_estimators=100)
}

results = {}
for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    results[name] = {
        'accuracy': accuracy_score(y_test, y_pred),
        'precision': precision_score(y_test, y_pred),
        'recall': recall_score(y_test, y_pred),
        'f1': f1_score(y_test, y_pred)
    }

# 结果对比
results_df = pd.DataFrame(results).T
print(results_df)</code></pre>
        
        <h4>📊 模型评估</h4>
        <pre><code># 选择最佳模型
best_model = RandomForestClassifier(n_estimators=100)
best_model.fit(X_train, y_train)
y_pred = best_model.predict(X_test)

# 详细评估报告
print("分类报告:")
print(classification_report(y_test, y_pred))

# 混淆矩阵
plt.figure(figsize=(8, 6))
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.title('混淆矩阵')
plt.show()

# 特征重要性
importance = pd.DataFrame({
    'feature': features,
    'importance': best_model.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
plt.barh(importance['feature'], importance['importance'])
plt.title('特征重要性')
plt.show()</code></pre>
        
        <h4>💡 业务建议</h4>
        <pre><code># 生成业务建议
print("=" * 50)
print("客户流失预测分析报告")
print("=" * 50)

print(f"\n模型准确率: {accuracy_score(y_test, y_pred):.1%}")
print(f"流失客户召回率: {recall_score(y_test, y_pred):.1%}")

print("\n关键流失因素:")
for i, row in importance.head(5).iterrows():
    print(f"  {i+1}. {row['feature']}: {row['importance']:.1%}")

print("\n建议措施:")
print("  1. 针对短期合同客户提供优惠续约方案")
print("  2. 改善电子支付用户体验")
print("  3. 对高流失风险客户进行主动关怀")
print("  4. 优化定价策略，降低月费敏感度")
print("=" * 50)</code></pre>
      `
    }
  }
}

const courseLessons = {
  1: [
    { id: 1, title: "Python简介与环境搭建", duration: 30, type: "lesson", completed: false },
    { id: 2, title: "Python语法基础", duration: 45, type: "lesson", completed: false },
    { id: 3, title: "数据类型和变量", duration: 60, type: "lesson", completed: false },
    { id: 4, title: "控制流语句", duration: 60, type: "lesson", completed: false },
    { id: 5, title: "函数和模块", duration: 45, type: "lesson", completed: false },
    { id: 6, title: "实战练习", duration: 90, type: "exercise", completed: false }
  ],
  2: [
    { id: 1, title: "数据分析概述", duration: 30, type: "lesson", completed: false },
    { id: 2, title: "NumPy数组操作", duration: 60, type: "lesson", completed: false },
    { id: 3, title: "Pandas数据处理", duration: 60, type: "lesson", completed: false },
    { id: 4, title: "数据可视化", duration: 45, type: "lesson", completed: false },
    { id: 5, title: "数据清洗实战", duration: 60, type: "lesson", completed: false },
    { id: 6, title: "综合案例分析", duration: 90, type: "exercise", completed: false }
  ],
  3: [
    { id: 1, title: "商务数据分析概述", duration: 30, type: "lesson", completed: false },
    { id: 2, title: "销售数据分析", duration: 60, type: "lesson", completed: false },
    { id: 3, title: "客户分析", duration: 60, type: "lesson", completed: false },
    { id: 4, title: "市场分析", duration: 45, type: "lesson", completed: false },
    { id: 5, title: "运营分析", duration: 60, type: "lesson", completed: false },
    { id: 6, title: "综合案例：电商数据分析", duration: 90, type: "exercise", completed: false }
  ],
  4: [
    { id: 1, title: "高级可视化技术", duration: 45, type: "lesson", completed: false },
    { id: 2, title: "统计图表进阶", duration: 60, type: "lesson", completed: false },
    { id: 3, title: "地理数据可视化", duration: 45, type: "lesson", completed: false },
    { id: 4, title: "时间序列可视化", duration: 60, type: "lesson", completed: false },
    { id: 5, title: "仪表板设计", duration: 45, type: "lesson", completed: false },
    { id: 6, title: "可视化案例实战", duration: 90, type: "exercise", completed: false }
  ],
  5: [
    { id: 1, title: "机器学习概述", duration: 30, type: "lesson", completed: false },
    { id: 2, title: "数据预处理", duration: 60, type: "lesson", completed: false },
    { id: 3, title: "监督学习算法", duration: 60, type: "lesson", completed: false },
    { id: 4, title: "无监督学习算法", duration: 60, type: "lesson", completed: false },
    { id: 5, title: "模型评估与优化", duration: 45, type: "lesson", completed: false },
    { id: 6, title: "机器学习实战案例", duration: 90, type: "exercise", completed: false }
  ]
}

const defaultLessons = [
  { id: 1, title: "课程介绍", duration: 15, type: "lesson", completed: true },
  { id: 2, title: "课程内容概述", duration: 45, type: "lesson", completed: false },
  { id: 3, title: "核心概念讲解", duration: 60, type: "lesson", completed: false },
  { id: 4, title: "实践应用", duration: 60, type: "lesson", completed: false },
  { id: 5, title: "总结与展望", duration: 45, type: "lesson", completed: false },
  { id: 6, title: "实战练习", duration: 90, type: "exercise", completed: false }
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
    setOutput(`执行结果:\n${code.includes('print') ? code.replace(/print\("([^"]*)"\)/g, '$1').replace(/print\('([^']*)'\)/g, '$1') : '代码执行成功'}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-xl">📖</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Python学习网站</h1>
              <p className="text-xs text-slate-400">{course.title}</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">首页</a>
            <a href="/courses" className="text-slate-300 hover:text-white transition-colors">课程</a>
            <a href="/practice-center" className="text-slate-300 hover:text-white transition-colors">实战中心</a>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg p-4 sticky top-20 border border-slate-700/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📚</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">{course.title}</h2>
                </div>
              </div>
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <a 
                    key={lesson.id} 
                    href={`/learn/${currentCourseId}/${lesson.id}`}
                    className={`flex items-center p-3 rounded-lg transition-all ${lesson.id === currentLessonId ? 'bg-blue-600/30 border-l-4 border-blue-400' : 'hover:bg-slate-700/50'}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 bg-slate-700/50">
                      {lesson.completed ? '✅' : lesson.type === 'exercise' ? '✏️' : '📖'}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white">{lesson.title}</h3>
                      <p className="text-xs text-slate-400">{lesson.duration} 分钟</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden border border-slate-700/30">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-white">{currentLesson.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm ${lessonInfo.type === 'exercise' ? 'bg-violet-600/30 text-violet-400' : 'bg-blue-600/30 text-blue-400'}`}>
                    {lessonInfo.type === 'exercise' ? '实战练习' : '课程'}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-400">学习进度</span>
                    <span className="text-sm font-medium text-white">{progress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-2 bg-slate-700/50 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                
                <div className="mb-8" dangerouslySetInnerHTML={{ __html: currentLesson.content.replace(/<h3/g, '<h3 class="text-xl font-semibold text-white mb-3"').replace(/<h4/g, '<h4 class="text-lg font-medium text-blue-300 mb-2"').replace(/<p/g, '<p class="text-slate-300 mb-4"').replace(/<ul/g, '<ul class="list-disc pl-5 mb-4"').replace(/<li/g, '<li class="text-slate-300 mb-1"').replace(/<strong/g, '<strong class="text-blue-400"').replace(/<pre/g, '<pre class="bg-slate-900/50 p-4 rounded-lg mb-4 overflow-x-auto"').replace(/<code/g, '<code class="text-blue-300 font-mono text-sm"') }} />
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3">编程环境</h3>
                  <div className="bg-slate-900/70 rounded-xl overflow-hidden border border-slate-600/50">
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-slate-400">Python 3.9</span>
                    </div>
                    <textarea
                      value={code}
                      onChange={handleCodeChange}
                      className="w-full p-4 bg-transparent text-blue-100 font-mono resize-none min-h-[200px] focus:outline-none"
                      placeholder="在此输入Python代码..."
                    ></textarea>
                    <div className="px-4 py-3 bg-slate-800/50 flex justify-end gap-3">
                      <button
                        onClick={() => setCode('')}
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        清空
                      </button>
                      <button
                        onClick={runCode}
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
                      >
                        运行代码
                      </button>
                    </div>
                  </div>
                  {output && (
                    <div className="mt-4 bg-slate-900/50 rounded-xl p-4 border border-slate-600/50">
                      <h4 className="text-sm font-medium text-blue-400 mb-2">输出结果：</h4>
                      <pre className="text-slate-200 font-mono whitespace-pre-wrap">{output}</pre>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={handleMarkComplete}
                    className={`px-4 py-2 rounded-lg transition-colors ${completed ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/50' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                  >
                    {completed ? '✓ 已完成' : '标记为完成'}
                  </button>
                  <div className="flex space-x-4">
                    {currentLessonId > 1 && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId - 1}`}
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                      >
                        上一课
                      </a>
                    )}
                    {currentLessonId < lessons.length && (
                      <a 
                        href={`/learn/${currentCourseId}/${currentLessonId + 1}`}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all"
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
