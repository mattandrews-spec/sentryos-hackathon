import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 dark:from-[#1a1625] dark:via-[#1d1328] dark:to-[#1a1625]">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Sales Pod Manager
          </h1>
          <p className="text-xl text-purple-900 dark:text-purple-200 max-w-2xl">
            Streamline customer requests and assign tasks to your team with ease
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              Create Requests
            </h2>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Quickly log customer requests with all the details you need
            </p>
          </div>

          <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              Assign Team Members
            </h2>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Delegate tasks to Matt, Gene, Said, or Chris S.
            </p>
          </div>

          <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              Track Everything
            </h2>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Keep all your requests organized in one place
            </p>
          </div>

          <div className="bg-white dark:bg-[#251e35] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border border-purple-100 dark:border-purple-900/50">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              Lightning Fast
            </h2>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              No setup required, start managing requests instantly
            </p>
          </div>
        </div>

        <Link
          href="/requests"
          className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Started →
        </Link>
      </main>
    </div>
  );
}
