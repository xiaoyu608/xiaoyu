import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-purple-500/30">
        <h1 className="text-2xl font-bold text-center text-purple-100 mb-6">登录</h1>
        {error && (
          <div className="mb-4 p-3 bg-red-900/30 text-red-300 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
              邮箱
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-100"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-1">
              密码
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-100"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
          >
            登录
          </button>
          <div className="mt-4 text-center">
            <a href="/register" className="text-purple-300 hover:text-purple-100 transition-colors">
              没有账号？点击注册
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}