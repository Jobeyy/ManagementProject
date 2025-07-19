'use client';

import Link from 'next/link';

export default function PaymentSummaryCard({ onTimeCount, totalCount, nextDueDate, nextAmount }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">💳 Payment Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
        <div>
          <h2 className="text-sm font-medium text-gray-600">On-Time Payments</h2>
          <p>{onTimeCount} / {totalCount} Months</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">Next Payment Due</h2>
          <p>{nextDueDate}</p>
        </div>
        <div className="sm:col-span-2">
          <h2 className="text-sm font-medium text-gray-600">Next Amount</h2>
          <p>{nextAmount}</p>
        </div>
      </div>

      {/* Optional: View History Button */}
      <div className="pt-2">
        <Link
          href="/residents/payment-history" // optional future route
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          View Payment History 
        </Link>
      </div>
    </div>
  );
}
