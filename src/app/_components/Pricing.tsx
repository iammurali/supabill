import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center">
      {/* Pricing Header */}
      <h1 className="text-5xl font-bold text-center mb-4">Pricing</h1>
      <p className="text-lg text-gray-400 text-center mb-8">
        One Price Fits All — No Hidden Fees, No Surprises
      </p>

      {/* Pricing Card */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full text-center border border-purple-500">
        <h2 className="text-yellow-400 font-bold text-lg mb-2">
          SupaUser (First 6 Months Free)
        </h2>
        <p className="text-gray-400 mb-4">
          Get unlimited features, offline functionality, and top-notch support
          — all for a single, straightforward price.
        </p>
        <div className="text-gray-500 line-through text-lg">₹ 599</div>
        <div className="text-5xl font-bold text-white mb-2">₹ 180/month</div>
        <p className="text-gray-400 mb-6">Billed annually</p>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-gray-200">
          Get Supabill Now
        </button>

        {/* Features List */}
        <div className="mt-6 text-left text-gray-400">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>✔</span> Unlimited bill creation
            </li>
            <li className="flex items-center gap-2">
              <span>✔</span> Detailed report generation
            </li>
            <li className="flex items-center gap-2">
              <span>✔</span> Expense tracking
            </li>
            <li className="flex items-center gap-2">
              <span>✔</span> Hardware integration for billing
            </li>
            <li className="flex items-center gap-2">
              <span>✔</span> Downloadable and offline use
            </li>
            <li className="flex items-center gap-2">
              <span>✔</span> Quick support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}