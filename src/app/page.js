export default function HomePage() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Phone Contact Manager</h1>
        <p className="text-gray-600 mb-6">Easily manage your contacts with simplicity and efficiency.</p>
        <div className="space-y-4">
          <a
            href="/signup"
            className="w-full inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </a>
          <a
            href="/signup"
            className="w-full inline-block bg-gray-100 text-blue-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-200 transition duration-200"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}
