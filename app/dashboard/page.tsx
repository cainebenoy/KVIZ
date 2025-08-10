import { AuthGuard } from "@/components/auth-guard"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <AuthGuard>
      <div className="flex min-h-screen w-full flex-col items-center bg-gray-50 p-4 dark:bg-gray-950">
        <header className="flex w-full max-w-4xl items-center justify-between py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <form action="/auth/sign-out" method="post">
            <Button type="submit" variant="outline">
              Sign Out
            </Button>
          </form>
        </header>
        <main className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-8 py-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">Welcome, {user?.email}! You have admin access.</p>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <CardHeader>
                <CardTitle>Manage Quizzes</CardTitle>
                <CardDescription>Create, edit, and publish quizzes.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/dashboard/quizzes/create">
                  <Button className="mt-4">Create New Quiz</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <CardHeader>
                <CardTitle>Manage Leaderboard</CardTitle>
                <CardDescription>Update season winners and scores.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/dashboard/leaderboard/manage">
                  <Button className="mt-4">Update Leaderboard</Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <CardHeader>
                <CardTitle>View Leaderboard</CardTitle>
                <CardDescription>See the public leaderboard.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/leaderboard">
                  <Button className="mt-4" variant="secondary">
                    View Public Leaderboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
