'use client';
import Image from "next/image"
import bed from "../../public/bed.svg"
import bath from "../../public/bath.svg"
import dog from "../../public/dog.svg"
import cat from "../../public/cat.svg"

export default function RentalCard({ rental }) {
  const petsAllowed = "OK";
  const Available = ["Available", "Now"];

  return (
    <div className="Card flex items-center flex-col">
      <div className="RentalImage relative bg-black w-72 h-56 flex flex-col justify-between shadow-xl pl-1 pr-1">
        <h1 className="text-white">Image Goes Here</h1>
        <h1 className="absolute bottom-1 left-1 right-1 bg-black/70 text-white text-xs font-semibold p-2 rounded">
          {rental.Address} {" "} {rental.ApartmentNumber}
        </h1>
      </div>

      <div className="CardDetails bg-white w-72 h-36 shadow-xl">
        <div className="pricing-info flex pl-1">
          <h1 className="pr-3">Rent:<span className="font-bold"> ${rental.MonthlyRent}</span></h1>
        </div>

        <div className="apartment-info flex flex-row justify-evenly items-center text-center pt-6 pb-6">
          <div className="bed flex flex-col text-center items-center">
            <Image src={bed} alt="Bed icon" width={35} height={30} />
            <p className="text-xs pt-1">{rental.BedCount} beds</p>
          </div>
          <div className="bath flex flex-col text-center items-center">
            <Image src={bath} alt="Bath icon" width={30} height={30} />
            <p className="text-xs pt-1">{rental.BathCount} baths</p>
          </div>
          <div className="pet flex flex-col text-center items-center">
            <div className="flex flex-row">
              <Image src={dog} alt="Dog icon" width={30} height={30} />
              <Image src={cat} alt="Cat icon" width={30} height={30} />
            </div>
            <p className="text-xs pt-1">{petsAllowed}</p>
          </div>
        </div>

        <div className="flex flex-row pl-1">
          <p className="text-sm pr-2">{Available[0]}</p>
          <p className="text-sm font-bold">{Available[1]}</p>
        </div>
      </div>

      <div className="Buttons w-72 flex flex-row justify-evenly shadow-xl mb-8">
        <a href="">
          <button className="bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-7">View Details</button>
        </a>
        <a href="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7">Apply Now</button>
        </a>
      </div>
    </div>
  );
}
