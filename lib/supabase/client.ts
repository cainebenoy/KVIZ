import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  // Create a Supabase client configured to work with cookies in a Browser environment.
  // Reverting to use environment variables for security and best practices.
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}
