"use client";

import { useState, useEffect } from "react";

export default function StopWatch() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [laps, setLaps] = useState([]);
  const [splits, setSplits] = useState([]);
  const [bestTime, setBestTime] = useState(null);
  const [timerName, setTimerName] = useState("Default Timer 1");
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMilliseconds((milliseconds) => milliseconds + 10);
      }, 10);
    } else if (!isActive && milliseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, milliseconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    if (!bestTime || milliseconds < bestTime) {
      setBestTime(milliseconds);
    }
  };

  const handleReset = () => {
    setMilliseconds(0);
    setIsActive(false);
    setLaps([]);
    setSplits([]);
  };

  const handleLap = () => {
    setLaps([...laps, formatTime()]);
  };

  const handleSplit = () => {
    setSplits([...splits, formatTime()]);
  };

  const handleNameChange = (e) => {
    if (e.key === "Enter") {
      setTimerName(e.target.value);
      setIsEditingName(false);
    }
  };

  const formatTime = () => {
    const getMilliseconds = `0${milliseconds % 1000}`.slice(-2);
    const seconds = `0${Math.floor((milliseconds / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((milliseconds / (1000 * 60)) % 60)}`.slice(
      -2
    );
    const hours = `0${Math.floor(
      (milliseconds / (1000 * 60 * 60)) % 24
    )}`.slice(-2);

    return `${hours} : ${minutes} : ${seconds} : ${getMilliseconds}`;
  };

  const formatMainTimeDisplay = () => {
    const getMilliseconds = `0${milliseconds % 1000}`.slice(-2);
    const seconds = `0${Math.floor((milliseconds / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((milliseconds / (1000 * 60)) % 60)}`.slice(-2);
    const hours = `0${Math.floor((milliseconds / (1000 * 60 * 60)) % 24)}`.slice(-2);
  
    return {hours, minutes, seconds, getMilliseconds};
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 ease-in-out ">
      {isEditingName ? (
        <input
          type="text"
          defaultValue={timerName}
          onKeyDown={handleNameChange}
          className="border border-gray-900 rounded-lg px-4 py-2 bg-white text-1xl mb-4 text-center font-bold focus:outline-black"
        />
      ) : (
        <>
          <div className="relative">
            <div className="text-3xl mb-4 text-white font-bold border-4 px-4 py-2 solid rounded-full border-gray-300">
              {timerName}
            </div>
            <button
              className="absolute top-0 right-0 mb-7"
              onClick={() => setIsEditingName(true)}
            >
              <span className="absolute top-[-10px] right-[-18px] text-xs">
                ✏️
              </span>
            </button>
          </div>
        </>
      )}

<div className="text-5xl mb-4 font-bold">
  <span className="text-red-900">{formatMainTimeDisplay().hours}</span> : 
  <span className="text-green-900">{formatMainTimeDisplay().minutes}</span> : 
  <span className="text-blue-900">{formatMainTimeDisplay().seconds}</span> : 
  <span className="text-purple-900">{formatMainTimeDisplay().getMilliseconds}</span>
</div>      <div className="flex space-x-4 mt-8">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-green-500 text-white rounded transition-all duration-500 ease-in-out hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white rounded transition-all duration-500 ease-in-out hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-500 ease-in-out hover:bg-blue-600"
        >
          Reset
        </button>
        <button
          onClick={handleLap}
          className="px-4 py-2 bg-yellow-500 text-white rounded transition-all duration-500 ease-in-out hover:bg-yellow-600"
        >
          Lap
        </button>
        <button
          onClick={handleSplit}
          className="px-4 py-2 bg-purple-500 text-white rounded transition-all duration-500 ease-in-out hover:bg-purple-600"
        >
          Split
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div
          className={`h-32 overflow-auto bg-white rounded-lg p-4 flex flex-col ${
            bestTime ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-xl mb-4 text-black font-semibold">
            {bestTime ? `Best: ${formatTime(bestTime)}` : ""}
          </div>
        </div>
        <div
          className={`h-32 overflow-auto bg-yellow-500 rounded-lg p-4 flex flex-col ${
            laps.length > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          {laps.slice(-4).map((lap, index) => (
            <div key={index} className="text-xl text-black font-medium">
              {`Lap ${index + 1}: ${lap}`}
            </div>
          ))}
        </div>
        <div
          className={`h-32 overflow-auto bg-purple-500 rounded-lg p-4 flex flex-col ${
            splits.length > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          {splits.slice(-4).map((split, index) => (
            <div key={index} className="text-xl text-black font-medium">
              {`Split ${index + 1}: ${split}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
