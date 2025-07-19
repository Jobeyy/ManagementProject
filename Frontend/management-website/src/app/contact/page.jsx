'use client';

import { useState } from 'react';

export default function PublicContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Non-resident message submitted:', form);
    alert("Thanks for contacting us! We'll get back to you within 24 hours.");
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2">
        {/* Left Column - Info */}
        <div className="p-6 space-y-4 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            Have questions about the apartment? Just write us a message and our team will respond within 24 hours.
          </p>

          <div className="space-y-2 text-sm text-gray-700 mt-4">
            <p><strong>Phone:</strong> (956) 802-2564</p>
            <p><strong>Email:</strong> Jobeyfarias01@gmail.com</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First Last"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="sample@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={form.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message (please include apartment number if applicable)"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
