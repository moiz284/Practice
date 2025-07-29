export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
      <p className="mb-8 text-gray-600 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
} 