export function ResidentForm({ newResident, setNewResident, handleAddResident }) {
  const statusOptions = [
  { _StatusID: 1, StatusName: "Active" },
  { _StatusID: 3, StatusName: "Prospective" },
  { _StatusID: 4, StatusName: "Pending Approval" },
  { _StatusID: 5, StatusName: "Waitlisted" },
  { _StatusID: 8, StatusName: "Transferred" },
  { _StatusID: 9, StatusName: "Lease Signed" },
  { _StatusID: 10, StatusName: "Notice Given" },
  { _StatusID: 11, StatusName: "Renewal Offered" },
  { _StatusID: 12, StatusName: "Renewed" }
];

  return (
    <form onSubmit={handleAddResident} className="mb-6 space-y-4">
        <div className="flex justify-center mb-8">
            <h2 className="text-xl font-semibold">Add New Resident</h2>
        </div>
      

      {/* Full Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            placeholder="John"
            value={newResident.FirstName || ''}
            onChange={(e) =>
              setNewResident({ ...newResident, FirstName: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            value={newResident.LastName || ''}
            onChange={(e) =>
              setNewResident({ ...newResident, LastName: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="John.Doe@gmail.com"
            value={newResident.Email || ''}
            onChange={(e) =>
              setNewResident({ ...newResident, Email: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>
      </div>

      {/* Contact, Dates, Status, Rent */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div>
    <label className="block text-sm font-medium mb-1">Apartment ID</label>
    <input
      type="number"
      placeholder="Must be a currently available _ApartmentID #"
      value={newResident.ApartmentID || ''}
      onChange={(e) =>
        setNewResident({ ...newResident, ApartmentID: e.target.value })
      }
      className="border p-2 w-full"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Phone Number</label>
    <input
      type="tel"
      pattern="^[0-9\\-]+$"
      placeholder="e.g. 123-456-7890"
      title="Phone number must be in the format 123-456-7890"
      value={newResident.PhoneNumber || ''}
      onChange={(e) =>
        setNewResident({ ...newResident, PhoneNumber: e.target.value })
      }
      className="border p-2 w-full"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Status</label>
    <select
      value={newResident._StatusID || ''}
      onChange={(e) =>
        setNewResident({ ...newResident, _StatusID: e.target.value })
      }
      className="border p-2 w-full"
      required
    >
      <option value="">Select Status</option>
      {statusOptions.map((status) => (
        <option key={status._StatusID} value={status._StatusID}>
          {status.StatusName}
        </option>
      ))}
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Monthly Rent ($) (If it differs from listing price)</label>
    <input
      type="number"
      placeholder="e.g. 1500"
      value={newResident.MonthlyRent || ''}
      onChange={(e) =>
        setNewResident({ ...newResident, MonthlyRent: e.target.value })
      }
      className="border p-2 w-full"
    />
  </div>
</div>

      {/* Move-in/Move-out Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Move-In Date</label>
          <input
            type="date"
            value={newResident.MoveInDate || ''}
            onChange={(e) =>
              setNewResident({ ...newResident, MoveInDate: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Move-Out Date</label>
          <input
            type="date"
            value={newResident.MoveOutDate || ''}
            onChange={(e) =>
              setNewResident({ ...newResident, MoveOutDate: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition"
      >
        Add Resident
      </button>
    </form>
  );
}
