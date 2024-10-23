import React from "react";

const Navbar = ({
  toggleModal,
  btnText1,
  btnText2,
  goToPreviousSection,
  goToNextSection,
}) => {
  return (
    <div className="flex justify-between h-fit w-full mt-6 px-6">
      <p className="font-semibold text-2xl">Products</p>
      <div className="flex gap-4 items-center">
        <div
          className="w-40 h-10.5 flex justify-center cursor-pointer items-center font-semibold text-primary bg-[#E1E7EB] rounded-xl"
          onClick={goToPreviousSection}
        >
          {btnText1}
        </div>
        <div
          className="w-40 h-10.5 flex justify-center cursor-pointer items-center font-semibold bg-primary text-white rounded-xl"
          onClick={goToNextSection}
        >
          {btnText2}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
