import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

const Variants = ({ product }) => {
  const [options, setOptions] = useState([{ option: "", values: [""] }]);

  const handleAddOption = () => {
    setOptions([...options, { option: "", values: [""] }]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].option = value;
    setOptions(newOptions);
  };

  const handleValueChange = (optionIndex, valueIndex, value) => {
    const newOptions = [...options];
    newOptions[optionIndex].values[valueIndex] = value;
    setOptions(newOptions);
  };

  const handleAddValue = (index) => {
    const newOptions = [...options];
    newOptions[index].values.push("");
    setOptions(newOptions);
  };

  const handleRemoveValue = (optionIndex, valueIndex) => {
    const newOptions = [...options];
    newOptions[optionIndex].values.splice(valueIndex, 1);
    setOptions(newOptions);
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
        <p className="p-2 rounded-lg text-textGray font-medium text-sm">
          Combinations
        </p>
        <IoChevronForward className="text-textGray" />
        <p className="p-2 rounded-lg text-textGray font-medium text-sm">
          Price info
        </p>
      </div>
      <div className="w-[500px] h-auto rounded-xl shadow-2xl p-6 flex flex-col justify-between">
        <p className="font-semibold">Description</p>
        {options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center mb-4 ">
            <div>
              <p className="text-sm">Option *</p>
              <input
                type="text"
                value={option.option}
                onChange={(e) =>
                  handleOptionChange(optionIndex, e.target.value)
                }
                className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
              />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-sm">Values *</p>
              {option.values.map((value, valueIndex) => (
                <div key={valueIndex} className="flex items-center mb-1">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleValueChange(optionIndex, valueIndex, e.target.value)
                    }
                    className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
                  />
                  <RiDeleteBinLine
                    size={20}
                    className="text-red-500 cursor-pointer ml-2"
                    onClick={() => handleRemoveValue(optionIndex, valueIndex)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div
          className="text-primary text-sm font-medium cursor-pointer"
          onClick={handleAddOption}
        >
          + Add Option
        </div>
      </div>
    </div>
  );
};

export default Variants;
