// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Oops! Page not found.
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved. If you think
        this is a mistake, let us know and we’ll fix it.
      </p>

      <div className="flex space-x-4">
        <Link
          href="/"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>

        <a
          href="mailto:devjayswal404@gmail.com?subject=Site%20Error%20Report&body=I%20found%20a%20broken%20link%20at%20URL:%20"
          className="px-5 py-3 border border-transparent bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Report Issue
        </a>
      </div>
    </div>
  );
}
