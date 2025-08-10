import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  // Create a Supabase client configured to work with cookies in a Browser environment.
  // Temporarily hardcode the Supabase URL and Anon Key for the initial deployment.
  // IMPORTANT: After successful deployment, revert this to use process.env.
  // Your Supabase URL: https://ncajeeigmxkegbwzhlsd.supabase.co
  // Your Supabase Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jYWplZWlnbXhrZWdid3pobHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MzkxMTUsImV4cCI6MjA3MDQxNTExNX0.mScUeHsTiRRNe7GIV5EfvLVEJVPgYRWv2zrKPgmwgcg
  return createBrowserClient(
    "https://ncajeeigmxkegbwzhlsd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jYWplZWlnbXhrZWdid3pobHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MzkxMTUsImV4cCI6MjA3MDQxNTExNX0.mScUeHsTiRRNe7GIV5EfvLVEJVPgYRWv2zrKPgmwgcg",
  )
}
