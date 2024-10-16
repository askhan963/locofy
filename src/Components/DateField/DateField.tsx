import React, { useState } from "react";

interface DateFieldProps {
  label: string;
  onDateChange: (date: string) => void; // Notify parent of date change
}

const DateField: React.FC<DateFieldProps> = ({ label, onDateChange }) => {
  const [date, setDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    onDateChange(e.target.value); // Send selected date to parent
  };

  return (
    <div className="flex flex-col shrink gap-2 justify-center items-center px-3 py-2 my-auto bg-white rounded border border-solid basis-0 border-zinc-300 min-w-[160px] max-md:w-full max-md:items-center"> {/* Centered on mobile */}
      <label htmlFor={`${label.toLowerCase()}-date`} className="text-sm text-black">
        {label}
      </label>
      <input
        type="date"
        id={`${label.toLowerCase()}-date`}
        value={date}
        onChange={handleDateChange} // Handle date input
        className="p-2 text-black border border-gray-300 rounded outline-none w-full max-w-[200px] min-w-[100px] focus:border-teal-500 focus:ring-teal-500 focus:ring-2" // Adjusted for mobile
        aria-label={label}
      />
    </div>
  );
};

export default DateField;
