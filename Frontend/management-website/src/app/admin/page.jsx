'use client'

import { useState, useEffect } from "react";
import ApartmentForm from "@/components/ApartmentForm";
import { ResidentForm } from "@/components/ResidentForm";
import { ApartmentTable } from "@/components/ApartmentTable";
import { ResidentTable } from "@/components/ResidentTable";

export default function Admin() {
  const [apartments, setApartments] = useState([]);
  const [residents, setResidents] = useState([]);
  const [newApartment, setNewApartment] = useState({});
  const [newResident, setNewResident] = useState({});

  useEffect(() => {
    fetchApartments();
    fetchResidents();
  }, []);

  const fetchApartments = async () => {
    const res = await fetch('http://localhost:8080/dim-apartments');
    const data = await res.json();
    setApartments(data);
  };

  const fetchResidents = async () => {
    const res = await fetch('http://localhost:8080/dim-residents');
    const data = await res.json();
    setResidents(data);
  };

  const handleAddApartment = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/add-apartment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newApartment),
    });
    setNewApartment({ Address: '', IsAvailable: 1 });
    fetchApartments();
  };

  const handleAddResident = async (e) => {
    e.preventDefault();
    const formattedResident = {
        ...newResident,
        MoveInDate: parseInt(newResident.MoveInDate.replaceAll("-", ""), 10),
        MoveOutDate: parseInt(newResident.MoveOutDate.replaceAll("-", ""), 10),
        _StatusID: parseInt(newResident._StatusID),
    };

    await fetch('http://localhost:8080/add-resident', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedResident),
    });
    setNewResident({
        FirstName: '',
        LastName: '',
        Email: '',
        ApartmentID: '',
        PhoneNumber: '',
        MoveInDate: '',
        MoveOutDate: '',
        MonthlyRent: '',
        _StatusID: ''
    });

    fetchResidents();
    fetchApartments();
  };

  const handleEndLease = async (_ResidentID) => {
  await fetch('http://localhost:8080/end-lease', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _ResidentID })  // <--- THIS is the req.body
  });

  fetchResidents();  // refresh tables
  fetchApartments();
};

  return (
    <div className="p-6">
         <div className="flex justify-center mb-8">
            <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
        </div>
        <div className="mb-8 mt-8">
            <ApartmentTable apartments={apartments} />
            <ResidentTable  
                residents={residents}
                onDeleteResident= {handleEndLease} 
            />
        </div>
        <div className="border border-gray-300 rounded-lg p-6 mb-8 shadow-sm">
            <ResidentForm
                newResident={newResident}
                setNewResident={setNewResident}
                handleAddResident={handleAddResident}
            />
        </div>

        <ApartmentForm
            newApartment={newApartment}
            setNewApartment={setNewApartment}
            handleAddApartment={handleAddApartment}
        />
        
    </div>
  );
}