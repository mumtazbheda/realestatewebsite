import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h2
        style={{
          background: "linear-gradient(-45deg, #3db3c5, #274685)",
        }}
        className="text-[2rem] leading-[1.2] font-bold !text-transparent !bg-clip-text"
      >
        {children}
      </h2>
      <hr className="w-[50px] h-[5px] bg-[#c51232]" />
    </div>
  );
};

export default Title;
