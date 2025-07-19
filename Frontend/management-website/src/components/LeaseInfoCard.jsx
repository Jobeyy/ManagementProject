'use client';

import Link from 'next/link';

export default function LeaseInfoCard({
  leaseType,
  startDate,
  endDate,
  rentAmount,
  status,
  leaseDocumentUrl,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">📄 Lease Information</h1>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
        <div>
          <h2 className="text-sm font-medium text-gray-600">Lease Type</h2>
          <p>{leaseType}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">Lease Status</h2>
          <p>{status}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">Start Date</h2>
          <p>{startDate}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-600">End Date</h2>
          <p>{endDate}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-sm font-medium text-gray-600">Monthly Rent</h2>
          <p>{rentAmount}</p>
        </div>
      </div>

      {/* View Lease Button */}
      <div>
        <h2 className="text-sm font-medium text-gray-600 mb-1">Lease Agreement</h2>
        <Link
          href={leaseDocumentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          View Lease PDF
        </Link>
      </div>
    </div>
  );
}
