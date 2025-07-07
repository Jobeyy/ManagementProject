export function ResidentTable({ residents, onDeleteResident }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Current Active  Residents</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Resident ID</th>
            <th className="border px-4 py-2">Apartment ID</th>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">PhoneNumber</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Apartment Number</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((res) => (
            <tr key={res._ResidentID}>
              <td className="border px-4 py-2">{res._ResidentID}</td>
              <td className="border px-4 py-2">{res._ApartmentID}</td>
              <td className="border px-4 py-2">{res.FullName}</td>
              <td className="border px-4 py-2">{res.Email}</td>
              <td className="border px-4 py-2">{res.PhoneNumber}</td>
              <td className="border px-4 py-2">${res.MonthlyRent}</td>
              <td className="border px-4 py-2">{res.ApartmentNumber}</td>
              <td className="border px-4 py-2">{res.StatusName}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => onDeleteResident(res._ResidentID)}
                  className="text-red-600 hover:text-red-800 font-bold"
                  title="End Lease"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
