import React, { useState } from "react";
import { GiCutLemon } from "react-icons/gi";
import { IoChevronForward } from "react-icons/io5";
import { sidebarArray } from "../../data/sidebar.data";
import avatar from "../../assets/Container (2).png";

const Sidebar = () => {
  const [checkedItems, setCheckedItems] = useState(
    Array(sidebarArray.length)
      .fill(false)
      .map((item, index) => index === 2)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = checkedItems.map((item, i) =>
      i === index ? !item : item
    );
    setCheckedItems(updatedCheckedItems);
  };
  return (
    <div className="p-6 w-80 flex flex-col justify-between">
      <div>
        <div className="w-[116px] h-12 rounded-md bg-cyan-600 flex justify-center gap-1 items-center text-white leading-none">
          <GiCutLemon className="text-yellow-300" size={30} />
          Lemon
          <br /> Inc.
        </div>
        <div className="my-6 border w-full border-gray-200"></div>
        <div className="flex flex-col gap-2">
          {sidebarArray.map((item, index) => (
            <label
              key={index}
              className={`flex items-center ${
                checkedItems[index] ? "bg-[#ECF7FF]" : ""
              } p-2 rounded-md`}
            >
              <input
                type="checkbox"
                className="mr-2 w-4 h-4 bg-[#F5F5F5] border-[#F5F5F5]"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className={checkedItems[index] ? "text-primary" : ""}>
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <div className="my-6 border w-full border-gray-200"></div>
        <div className="flex gap-1 items-center justify-center">
          <div className="w-10 h-10 rounded-full flex items-center">
            <img src={avatar} alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-center text-left">
            <p>Andy Samberg</p>
            <p className="text-[#8C8C8C]">andy.samberg@gmail.com</p>
          </div>
          <IoChevronForward size={40} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
