import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const SupabaseTest = () => {
  const [status, setStatus] = useState('Testing...')

  useEffect(() => {
    const testSupabase = async () => {
      try {
        // 测试Supabase客户端是否初始化成功
        const { data, error } = await supabase.auth.getSession()
        if (error) {
          setStatus(`Error: ${error.message}`)
        } else {
          setStatus('Supabase client initialized successfully!')
        }
      } catch (error) {
        setStatus(`Error: ${error}`)
      }
    }

    testSupabase()
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Supabase Connection Test</h2>
      <p>{status}</p>
    </div>
  )
}

export default SupabaseTest