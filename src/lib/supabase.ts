import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

export class SupabaseProvider {
  private static _instance: SupabaseProvider
  private _client: ReturnType<typeof createClient<Database>>

  private constructor() {
    this._client = createClient(
      import.meta.env.VITE_SUPABASE_URI,
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    )
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new SupabaseProvider()
    }
    return this._instance
  }
}