
import { createClient } from '@supabase/supabase-js'
import { Database } from './dbtypes'
const supabaseUrl :string = import.meta.env.SUPABASE_URL
const supabaseKey :string = import.meta.env.SUPABASE_KEY
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// console.log(supabaseUrl, supabaseKey)