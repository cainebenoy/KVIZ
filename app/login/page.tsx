import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const supabase = createClient()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">Quiz Admin Login</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          redirectTo={`${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/auth/callback`}
          onlyThirdPartyProviders
          localization={{
            variables: {
              sign_in: {
                email_label: "Email address",
                password_label: "Your Password",
                email_input_placeholder: "Enter your email address",
                password_input_placeholder: "Enter your password",
                button_label: "Sign in",
                social_provider_text: "Sign in with {{provider}}",
                link_text: "Already have an account? Sign in",
              },
            },
          }}
        />
      </div>
    </div>
  )
}
