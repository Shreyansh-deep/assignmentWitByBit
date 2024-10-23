import React from "react";
import shoeImg from "../../assets/jordan_img.png";

const Hero = () => {
  return (
    <div className="px-6 flex gap-6 mt-4">
      <div className="w-80 h-[600px] rounded-xl bg-[#F8F8F8] p-4 flex flex-col gap-4">
        <p className="font-medium">Shoes</p>
        <div className="w-[288px] h-[100px] rounded-xl p-2 flex gap-4 bg-white">
          <img src={shoeImg} alt="" className="w-20 h-20 rounded-xl" />
          <div className="flex flex-col text-left">
            <p className="font-medium">Nike Air Jordan</p>
            <p>₹12,000</p>
            <div className="w-11 h-6 text-primary bg-[#ECF7FF] rounded-lg font-medium text-xs items-center flex justify-center mt-2">
              Nike
            </div>
          </div>
        </div>
        <div className="w-[288px] h-[100px] rounded-xl p-2 flex gap-4 bg-white">
          <img src={shoeImg} alt="" className="w-20 h-20 rounded-xl" />
          <div className="flex flex-col text-left">
            <p className="font-medium">Nike Dunk Low</p>
            <p>₹8,000</p>
            <div className="w-11 h-6 text-primary bg-[#ECF7FF] rounded-lg font-medium text-xs items-center flex justify-center mt-2">
              Nike
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-[600px] rounded-xl bg-[#F8F8F8] p-4 flex flex-col gap-4"></div>
    </div>
  );
};

export default Hero;
