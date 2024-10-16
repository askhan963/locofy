import React, { useState } from "react";
import SearchField from "../SearchField/SearchField";
import DateField from "../DateField/DateField";
import GuestField from "../GuestField/GuestField";
import SearchButton from "../SearchButton/SearchButton";

const AccommodationSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform search logic here with searchTerm, checkInDate, checkOutDate
    console.log("Search term:", searchTerm, "Check-in:", checkInDate, "Check-out:", checkOutDate);
  };

  return (
    <form
      className="flex flex-wrap gap-3.5 items-center px-3 py-2.5 mt-6 w-full bg-white rounded-xl border border-solid border-slate-200 shadow-[0px_6px_12px_rgba(0,0,0,0.02)] max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <SearchField label="Accommodation" onSearchChange={setSearchTerm} />
      <div className="flex flex-wrap flex-1 shrink gap-3.5 items-center self-stretch my-auto basis-[60px] min-w-[240px] max-md:max-w-full">
        <DateField label="Check-in" onDateChange={setCheckInDate} />
        <DateField label="Check-out" onDateChange={setCheckOutDate} />
        <GuestField />
      </div>
      <SearchButton />
    </form>
  );
};

export default AccommodationSearch;
