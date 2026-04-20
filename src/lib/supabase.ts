import { createClient } from '@supabase/supabase-js'

// 使用默认值，这样即使没有真实的 Supabase 配置，应用也能正常运行
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)