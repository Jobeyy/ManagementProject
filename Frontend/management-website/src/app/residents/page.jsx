'use client';

import { Card, CardContent } from "@/components/ui/card";
import LeaseInfoCard from '@/components/LeaseInfoCard';
import PaymentSummaryCard from '@/components/PaymentSummaryCard';
import Link from 'next/link';

export default function Residents() {
  // Hardcoded resident info
  const resident = {
    firstName: "John",
    lastName: "Doe",
    apartment: "B203",
    leaseStatus: "Active",
    leaseEnd: "June 30, 2026",
    rentAmount: "$1,500",
    nextPaymentDue: "August 1, 2025",
  };


  const lease = {
  leaseType: "Fixed-Term",
  startDate: "July 1, 2025",
  endDate: "June 30, 2026",
  rentAmount: "$1,500",
  status: "Active",
  leaseDocumentUrl: "https://example.com/lease.pdf", 
};

const paymentSummary = {
  onTimeCount: 6,
  totalCount: 6,
  nextDueDate: "August 1, 2025",
  nextAmount: "$1,500",
};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Welcome Banner */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            Welcome back, {resident.firstName}!
          </h1>
          <p className="text-gray-600">
            Here’s a quick overview of your lease and rent status.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-5 mb-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Current Balance</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {
              // Example logic: show $1,500 if today is the 28th or later, else show $0
              new Date().getDate() >= 28 ? "$1,500" : "$0.00"
            }
          </p>
          <p className="text-sm text-gray-500 mt-1">Due on the 1st of every month</p>
        </div>
        {/* Resident Info Card */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6 grid grid-cols-2 gap-4 text-gray-800">
            <div>
              <h2 className="font-semibold text-gray-600">Apartment</h2>
              <p>{resident.apartment}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Lease Status</h2>
              <p>{resident.leaseStatus}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Lease End</h2>
              <p>{resident.leaseEnd}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-600">Monthly Rent</h2>
              <p>{resident.rentAmount}</p>
            </div>
            <div className="col-span-2">
              <h2 className="font-semibold text-gray-600">Next Payment Due</h2>
              <p>{resident.nextPaymentDue}</p>
            </div>
          </CardContent>
        </Card>
        


        <div className="flex flex-col sm:flex-row gap-4">
          {/* 🛠️ Request Maintenance Button */}
          <Link href="/residents/maintenance-request" className="w-full">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
              Request Maintenance
            </button>
          </Link>

          {/* 💳 Pay Now Button (future Stripe integration) */}
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            onClick={() => alert("In the future, this will connect to Stripe or a payment API.")}
          >
            Pay Now
          </button>

          {/* 📞 Contact Office Button */}
          <Link href="/residents/contact" className="w-full">
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition">
              Contact Office
            </button>
          </Link>
        </div>
        <div>
          <LeaseInfoCard
            leaseType={lease.leaseType}
            startDate={lease.startDate}
            endDate={lease.endDate}
            rentAmount={lease.rentAmount}
            status={lease.status}
            leaseDocumentUrl={lease.leaseDocumentUrl}
          />
        </div>
        <PaymentSummaryCard
          onTimeCount={paymentSummary.onTimeCount}
          totalCount={paymentSummary.totalCount}
          nextDueDate={paymentSummary.nextDueDate}
          nextAmount={paymentSummary.nextAmount}
        />
      </div>
      
    </div>
  );
}
