import React, { useEffect, useRef, useState } from "react";

const CountDown = () => {
  const [remaining, setRemaining] = useState(10);
  // reference used so that it does not change across renders
  let intervalID = useRef(null);
  useEffect(() => {
    if (!intervalID.current) {
      intervalID.current = setInterval(() => {
        console.log("interval");
        setRemaining((existingValue) =>
          existingValue > 0 ? existingValue - 1 : existingValue
        );
      }, 1000);
    }
    return () => {
      clearInterval(intervalID.current);
    };
  }, []);
  return <div>Time Left: {remaining}s</div>;
};

const Interval = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      <div>{showTimer && <CountDown />}</div>
    </div>
  );
};

export default Interval;
