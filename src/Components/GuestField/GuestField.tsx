import React, { useState } from "react";

const GuestField: React.FC = () => {
  const [guests, setGuests] = useState(1); // Default to 1 guest

  const handleGuestChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-1 shrink gap-3 justify-between items-center px-3 py-2 my-auto bg-white rounded border border-solid border-zinc-300">
      <label htmlFor="guest-count" className="text-sm font-medium text-black">
        Guests
      </label>
      <select
        id="guest-count"
        value={guests}
        onChange={handleGuestChange}
        className="px-4 py-2 text-sm font-medium text-black bg-white border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
      >
        {[1, 2, 3, 4, 5].map((guest) => (
          <option key={guest} value={guest} className="text-base text-black">
            {guest} {guest === 1 ? "Guest" : "Guests"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GuestField;
