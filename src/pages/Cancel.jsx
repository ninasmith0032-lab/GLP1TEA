export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Checkout Canceled</h1>
      <p className="text-lg text-gray-700 mb-6">Your order was not completed. No charges were made.</p>
      <a href="/" className="px-6 py-3 bg-red-600 text-white rounded-xl">Try Again</a>
    </div>
  )
}
