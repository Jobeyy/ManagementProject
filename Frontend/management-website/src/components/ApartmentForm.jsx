export default function ApartmentForm({ newApartment, setNewApartment, handleAddApartment }) {
  return (
    <form onSubmit={handleAddApartment} className="mb-6">
      <h2 className="text-xl font-semibold">Add New Apartment Building</h2>
      <input
        type="text"
        placeholder="Address"
        value={newApartment.Address || ''}
        onChange={(e) =>
          setNewApartment({ ...newApartment, Address: e.target.value })
        }
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Apartment
      </button>
    </form>
  );
} 