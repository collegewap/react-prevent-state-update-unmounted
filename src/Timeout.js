import React, { useEffect, useState } from "react";

const Timer = () => {
  const [message, setMessage] = useState("Timer Running");
  useEffect(() => {
    setTimeout(() => {
      setMessage("Times Up!");
    }, 5000);
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
