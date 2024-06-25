import { createClient } from '@supabase/supabase-js';
import { Database } from './dbtypes';
const supabaseUrl = `${import.meta.env.VITE_APP_SERVERURL}`;
const supabaseKey = `${import.meta.env.VITE_APP_SERVERKEY}`;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
