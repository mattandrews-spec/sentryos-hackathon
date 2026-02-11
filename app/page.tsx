import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Sales Pod Manager
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Streamline customer requests and assign tasks to your team with ease
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Create Requests
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Quickly log customer requests with all the details you need
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Assign Team Members
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Delegate tasks to Matt, Gene, Said, or Chris S.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Track Everything
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Keep all your requests organized in one place
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Lightning Fast
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              No setup required, start managing requests instantly
            </p>
          </div>
        </div>

        <Link
          href="/requests"
          className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Get Started →
        </Link>
      </main>
    </div>
  );
}
