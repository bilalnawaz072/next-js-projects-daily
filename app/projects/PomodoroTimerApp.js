
'use client';
import { useState, useEffect } from 'react';

export default function PomodoroTimerApp() {
    
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [inputTime, setInputTime] = useState(25);
  const [timerColor, setTimerColor] = useState('#000000');  

  useEffect(() => {
    let interval;
    if (isActive) {
      setTimerColor(getRandomColor()); // Update the timer color
      interval = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const resetTimer = () => {
    setIsActive(false);
    setTime(inputTime * 60);
  };

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
    setTime(e.target.value * 60);
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
<div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center transition-all duration-500 ease-in-out ">
  <div className="text-white text-center ">
    <h1 className="text-4xl mb-4">Pomodro Focus Time</h1>
    
    {isActive ? (
      <div className="text-6xl mb-8 transform scale-100 hover:scale-105 transition-transform duration-300" style={{ color: timerColor }}>
      {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
    </div>
    ) : (
      <div className="relative mb-4 transform scale-100 hover:scale-105 transition-transform duration-300">
        <input
          type="number"
          value={inputTime}
          onChange={handleInputChange}
          className='bg-transparent border-b-2 border-gray-300 text-2xl text-white placeholder-white focus:outline-none focus:border-green-500 transition-all duration-300 pl-2'
          placeholder="Enter time"
        />
        <span className="absolute left-2 top-1 text-gray-400">&#8981;</span>
      </div>
    )}

    <div className="transition-transform hover:scale-105 duration-300">
      <button 
        className={`bg-${isActive ? 'red' : 'green'}-700 text-white py-3 px-4 mr-4 rounded hover:bg-opacity-80 transform hover:scale-105`}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>

      <button 
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  </div>
</div>




  );
}
