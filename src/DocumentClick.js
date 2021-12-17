import React, { useEffect, useRef, useState } from "react";

const Box = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState("");

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        setPosition("inside");
      } else {
        setPosition("outside");
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener(checkIfClickedOutside);
    };
  }, []);

  return (
    <>
      <div>{position ? `Clicked ${position}` : "Click somewhere"}</div>
      <div
        ref={ref}
        style={{
          width: "200px",
          height: "200px",
          border: "solid 1px",
        }}
      ></div>
    </>
  );
};

const DocumentClick = () => {
  const [showBox, setShowBox] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <button
          style={{ marginBottom: "1rem" }}
          onClick={() => setShowBox(!showBox)}
        >
          Toggle Box
        </button>
        {showBox && <Box />}
      </div>
    </>
  );
};

export default DocumentClick;
