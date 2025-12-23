"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const CustomPointer = () => {
  const circle = useRef(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function moveCircle(e: any) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useLayoutEffect(() => {
    document.addEventListener("mousemove", moveCircle);
  }, []);

  return (
    <>
      <div
        ref={circle}
        style={{
          transform: `translate(${x - 23}px, ${y - 18}px)`,
        }}
        className="transition-all !ease-out duration-500 fixed !z-[999] w-14 h-14 border-2 border-[#274685] rounded-full full pointer-events-none"
      ></div>
      <span
        style={{
          top: y + "px",
          left: x + "px",
        }}
        className="fixed mt-1 w-2.5 h-2.5 !z-[999] bg-[#274685] rounded-full"
      ></span>
    </>
  );
};

export default CustomPointer;
