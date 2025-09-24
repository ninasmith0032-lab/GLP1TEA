export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">Thank you!</h1>
      <p className="text-lg text-gray-700 mb-6">Your order has been received. We’ll send tracking info once it ships.</p>
      <a href="/" className="px-6 py-3 bg-green-600 text-white rounded-xl">Back to Store</a>
    </div>
  )
}
