"use client";
import { useState } from "react";

export default function DiceRollSimulator() {
  const [diceValue, setDiceValue] = useState(1);
  const [history, setHistory] = useState([]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    // Show a series of random numbers while the dice is rolling
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      // Generate a random number between 1 and 6
      clearInterval(rollInterval);
      const newDiceValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newDiceValue);
      setHistory((prevHistory) => [
        { roll: prevHistory.length + 1, value: newDiceValue },
        ...prevHistory,
      ]);
      setRolling(false);
    }, 1000);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="fixed top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div className={`text-6xl ${rolling ? "animate-spin" : ""}`}>
          {diceValue}
        </div>
        <button
          onClick={rollDice}
          className="mt-10 p-4 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800"
          disabled={rolling}
        >
          Roll Dice
        </button>
        <button
          onClick={clearHistory}
          className="mt-10 p-4 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800"
        >
          Clear History
        </button>
        <div
          className={`mt-20 w-64 h-64 overflow-auto ${
            rolling
              ? "bg-gradient-to-r from-purple-500 via-pink-400 via-blue-500 via-yellow-200 via-green-500 to-green-400 rounded-lg shadow-lg rounded-lg animate-pulse"
              : "bg-gradient-to-r from-purple-500 to-blue-500 border-2 border-black rounded-lg shadow-lg rounded-lg"
          } flex flex-col items-center`}
        >
          <h2 className="text-2xl mb-4 text-black">Roll History:</h2>
          <ul className="p-4">
            {history.map((roll, index) => (
              <li key={index} className="text-xl text-black mb-2">
                <span className="font-bold text-black">Roll {roll.roll}:</span>{" "}
                {roll.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
