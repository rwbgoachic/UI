import { createClient } from '@supabase/supabase-js'
import { supabaseUrl, supabaseAnonKey } from '../config'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      todos: {
        Row: {
          id: string
          user_id: string
          title: string
          completed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          completed?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}