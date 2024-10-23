import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const Combination = () => {
  const [sku, setSku] = useState({
    MBlack: "",
    MRed: "",
    LBlack: "",
    LRed: "",
  });
  const [quantity, setQuantity] = useState({
    MBlack: "",
    MRed: "",
    LBlack: "",
    LRed: "",
  });
  const [inStock, setInStock] = useState({
    MBlack: false,
    MRed: false,
    LBlack: false,
    LRed: false,
  });

  const handleSwitchChange = (key) => {
    setInStock({ ...inStock, [key]: !inStock[key] });
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
        <p className="p-2 rounded-lg text-textGray font-medium text-sm">
          Price info
        </p>
      </div>
      <div className="w-[500px] h-auto rounded-xl shadow-2xl p-6 flex flex-col justify-between">
        <p className="font-semibold">Description</p>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="font-bold"></div>
          <div className="font-bold">M/Black</div>
          <div className="font-bold">M/Red</div>
          <div className="font-bold">L/Black</div>
          <div className="font-bold">L/Red</div>

          <div className="font-bold">M/Black</div>
          {["MBlack", "MRed", "LBlack", "LReds"].map((key) => (
            <input
              key={key}
              type="text"
              value={sku[key]}
              onChange={(e) => setSku({ ...sku, [key]: e.target.value })}
              className="border rounded p-1"
            />
          ))}

          <div className="font-bold">M/Red</div>
          {["MBlack", "MRed", "LBlack", "LReds"].map((key) => (
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          ))}

          <div className="font-bold">L/Black</div>
          {["MBlack", "MRed", "LBlack", "LReds"].map((key) => (
            <input
              key={key}
              type="number"
              value={quantity[key]}
              onChange={(e) =>
                setQuantity({ ...quantity, [key]: e.target.value })
              }
              className="border rounded p-1"
            />
          ))}

          <div className="font-bold">L/Red</div>
          {["MBlack", "MRed", "LBlack", "LReds"].map((key) => (
            <input
              key={key}
              type="number"
              value={quantity[key]}
              onChange={(e) =>
                setQuantity({ ...quantity, [key]: e.target.value })
              }
              className="border rounded p-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Combination;
