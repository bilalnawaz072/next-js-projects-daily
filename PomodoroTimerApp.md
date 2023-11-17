
```javascript
/**
 * This React component represents the Home page of a Pomodoro Timer application.
 * It allows users to start, stop, and reset a timer for focused work sessions.
 */
import { useState, useEffect } from 'react';

export default function Home() {
  /**
   * The 'time' state variable stores the remaining time on the timer in seconds.
   * It is initialized to 25 minutes (25 * 60 seconds).
   */
  const [time, setTime] = useState(25 * 60);

  /**
   * The 'isActive' state variable represents the status of the timer.
   * It is initially set to 'false' (timer is not active).
   */
  const [isActive, setIsActive] = useState(false);

  /**
   * The 'useEffect' hook is used to manage the timer logic.
   * It runs whenever 'isActive' or 'time' changes.
   * It sets up an interval to decrement the time when the timer is active.
   * It also clears the interval when the timer is stopped or reaches zero.
   */
/**
 * The 'useEffect' hook is a fundamental part of React that allows you to perform side effects
 * in functional components. Side effects include data fetching, manual DOM manipulations, or
 * in this case, managing the timer logic.
 * In this component, we're using 'useEffect' to ensure that the timer updates correctly
 * based on changes to 'isActive' and 'time' state variables.
 */
useEffect(() => {
  // 'interval' is a local variable used to store the ID of the interval that decrements the timer.
  let interval;

  // When 'isActive' is 'true', we start an interval to decrement the timer every second.
  if (isActive) {
    interval = setInterval(() => {
      // We use the 'setTime' function to update the 'time' state.
      // The 'prevTime' parameter is a function that helps ensure
      // we're working with the latest state value.
      setTime((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);
  }
  // When 'isActive' is 'false' and 'time' is not zero, we clear the interval.
  else if (!isActive && time !== 0) {
    clearInterval(interval);
  }

  // The 'return' statement within 'useEffect' defines a cleanup function.
  // It's important to clear the interval when the component unmounts or when
  // the dependencies ('isActive' or 'time') change.
  return () => clearInterval(interval);

  // The 'useEffect' hook takes an array of dependencies as its second argument.
  // In this case, it depends on 'isActive' and 'time'. Whenever these values change,
  // the effect will re-run.
}, [isActive, time]);


  /**
   * The 'resetTimer' function resets the timer to its initial state.
   * It sets 'isActive' to 'false' and 'time' to 25 minutes (25 * 60 seconds).
   */
  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  /**
   * The component's render method returns JSX for the user interface.
   * It displays the timer, start/stop buttons, and a reset button.
   */
  return (
    <div className="h-screen bg-green-500 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl mb-4">Pomodro Focus Time</h1>
        <div className="text-6xl mb-8">
          {Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')}
        </div>
        <button
          className="bg-green-700 p-4 mr-4"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button
          className="bg-red-700 p-4"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
```

