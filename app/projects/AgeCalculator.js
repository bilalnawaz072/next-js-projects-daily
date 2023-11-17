"use client";
import { useState } from "react";

export default function AgeCalculator() {
  const [birthday, setBirthday] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  function calculateAge() {
    const today = new Date();
    const birthDate = new Date(birthday);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    setYears(years);
    setMonths(months);
    setDays(days);
  }

  function handleBirthdayChange(event) {
    setBirthday(event.target.value);
  }

  return (
<div className="flex flex-col items-center justify-center min-h-screen py-2">
  <div className="flex flex-col bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg w-64 animate-pulse">
    <h2 className="mb-4 text-2xl text-center font-bold text-white border-b-2 pb-2">Age Calculator</h2>
    <input className="border-2 border-blue-300 rounded p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" type="date" onChange={handleBirthdayChange} />
    <button className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={calculateAge}>Calculate Age</button>
    <p className="mt-4 text-center font-medium text-white">Your age is: <span className="text-yellow-300">{years}</span> years, <span className="text-red-500">{months}</span> months, and <span className="text-green-400">{days}</span> days old</p>
  </div>
</div>
  );
}
