import React from "react";
import InputBox from "../components/InputBox";

function CurrencyChange() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="changeBox w-1/2 h-1/2 bg-blue-500">
        <InputBox />
      </div>
    </div>
  );
}

export default CurrencyChange;
