import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Timer Running");
  // reference used so that it does not change across renders
  let timeoutID = useRef(null);
  useEffect(() => {
    timeoutID.current = setTimeout(() => {
      setMessage("Times Up!");
    }, 5000);
    return () => {
      clearTimeout(timeoutID.current);
      console.log("timeout cleared");
    };
  }, []);
  return <div>{message}</div>;
};

const Timeout = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      <div>{showTimer && <Timer />}</div>
    </div>
  );
};

export default Timeout;
