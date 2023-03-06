import React, { useState } from "react";

export default function App() {
  const [cls, setCls] = useState("white");

  return (
    <>
      <div id="div" className={cls} >
        <h1>Hello world</h1>
        <button
          className={cls}
          onClick={() => setCls((cls) => (cls === "black" ? "white" : "black"))}
        >Click</button>
      </div>
    </>
  );
}