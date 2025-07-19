'use client';

export default function MaintenanceHistoryTable({ requests }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠 Maintenance Request History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2">Request ID</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Requested On</th>
              <th className="px-4 py-2">Preferred Date</th>
              <th className="px-4 py-2">Emergency</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((req) => (
                <tr key={req.id} className="border-t">
                  <td className="px-4 py-2">{req.id}</td>
                  <td className="px-4 py-2">{req.type}</td>
                  <td className="px-4 py-2">{req.status}</td>
                  <td className="px-4 py-2">{req.requestDate}</td>
                  <td className="px-4 py-2">{req.preferredDate}</td>
                  <td className="px-4 py-2">{req.isEmergency ? 'Yes' : 'No'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
