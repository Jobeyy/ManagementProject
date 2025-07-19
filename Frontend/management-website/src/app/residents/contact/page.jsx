'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    apartment: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", form);
    alert("Message sent! We'll get back to you shortly.");
    setForm({ name: '', apartment: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">📞 Contact Leasing Office</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name (optional) */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder="Jane Doe (optional)"
            />
          </div>

          {/* Apartment Number */}
          <div>
            <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
              Apartment Number
            </label>
            <input
              id="apartment"
              name="apartment"
              type="text"
              value={form.apartment}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder="e.g., B203"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder="Ex: Issue with plumbing"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
