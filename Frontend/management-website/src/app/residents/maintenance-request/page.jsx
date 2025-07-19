'use client';

import { useState } from 'react';
import MaintenanceHistoryTable from "@/components/MaintenanceHistoryTable";

export default function MaintenanceRequestForm() {
  const [form, setForm] = useState({
    maintenanceType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    isEmergency: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted maintenance request:', form);
    alert('Maintenance request submitted!');
    setForm({
      maintenanceType: '',
      description: '',
      preferredDate: '',
      preferredTime: '',
      isEmergency: false,
    });
  };


  const dummyRequests = [
  {
    id: 101,
    type: "Plumbing",
    status: "Completed",
    requestDate: "July 10, 2025",
    preferredDate: "July 11, 2025",
    isEmergency: false,
  },
  {
    id: 102,
    type: "Electrical",
    status: "In Progress",
    requestDate: "July 14, 2025",
    preferredDate: "July 15, 2025",
    isEmergency: true,
  },
  {
    id: 103,
    type: "Pest Control",
    status: "Pending",
    requestDate: "July 18, 2025",
    preferredDate: "July 19, 2025",
    isEmergency: false,
  },
];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Submit Maintenance Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Maintenance Type */}
          <div>
            <label htmlFor="maintenanceType" className="block text-sm font-medium text-gray-700">Maintenance Type</label>
            <select
              id="maintenanceType"
              name="maintenanceType"
              value={form.maintenanceType}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select type...</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="HVAC">HVAC</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Appliance">Appliance</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Access Date</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Preferred Time Window</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select time...</option>
              <option value="Morning">Morning (8am - 12pm)</option>
              <option value="Afternoon">Afternoon (12pm - 4pm)</option>
              <option value="Evening">Evening (4pm - 7pm)</option>
            </select>
          </div>

          {/* Emergency Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isEmergency"
              name="isEmergency"
              checked={form.isEmergency}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 border-gray-300 rounded"
            />
            <label htmlFor="isEmergency" className="ml-2 text-sm text-gray-700">This is an emergency</label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
        
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <MaintenanceHistoryTable requests={dummyRequests} />
            </div>
        </div>
    </div>
  );
}
