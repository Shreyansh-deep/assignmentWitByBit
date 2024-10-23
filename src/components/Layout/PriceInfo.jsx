import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const PriceInfo = () => {
  const [selected, setSelected] = useState("dollar");

  const handleToggle = (id) => {
    setSelected(id);
  };
  return (
    <div className="px-6 mt-4">
      <div className="flex gap-5 items-center mb-6">
        <p className="px-4 py-1 bg-[#DAEDF9] rounded-lg text-primary font-medium text-sm">
          Description
        </p>
        <IoChevronForward className="text-textGray" />
        <p className="p-2 rounded-lg text-primary bg-[#DAEDF9] font-medium text-sm">
          Variants
        </p>
        <IoChevronForward className="text-textGray" />
        <p className="p-2 rounded-lg text-primary bg-[#DAEDF9] font-medium text-sm">
          Combinations
        </p>
        <IoChevronForward className="text-textGray" />
        <p className="p-2 rounded-lg text-primary bg-[#DAEDF9] font-medium text-sm">
          Price info
        </p>
      </div>
      <div className="w-[500px] h-auto rounded-xl shadow-2xl p-6 flex flex-col justify-between gap-5">
        <p className="font-semibold">Price Info</p>
        <div className="">
          <p className="text-sm">Price *</p>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
          />
        </div>
        <div className="flex gap-5 items-end w-full">
          <div className="w-full">
            <p className="text-sm">Discount</p>
            <input
              type="text"
              className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
            />
          </div>
          <div className="flex border border-gray-300 w-28 h-10 rounded-lg">
            <div
              className={`w-1/2 cursor-pointer flex justify-center rounded-lg items-center ${
                selected === "dollar"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              id="dollar"
              onClick={() => handleToggle("dollar")}
            >
              $
            </div>
            <div
              className={`w-1/2 flex justify-center items-center rounded-lg cursor-pointer ${
                selected === "percent"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              id="percent"
              onClick={() => handleToggle("percent")}
            >
              %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceInfo;
