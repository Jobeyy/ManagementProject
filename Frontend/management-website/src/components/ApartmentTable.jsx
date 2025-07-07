export function ApartmentTable({ apartments }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Current Available Apartments</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Apartment ID</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Apartment Number</th>
            <th className="border px-4 py-2">Listing Price</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apt) => (
            <tr key={apt._ApartmentID}>
              <td className="border px-4 py-2">{apt._ApartmentID}</td>
              <td className="border px-4 py-2">{apt.Address}</td>
              <td className="border px-4 py-2">{apt.ApartmentNumber}</td>
              <td className="border px-4 py-2">${apt.MonthlyRent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}