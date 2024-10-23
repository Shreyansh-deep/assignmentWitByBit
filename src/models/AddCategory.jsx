import React from "react";

const AddCategory = ({
  toggleModal,
  setCategoryName,
  categoryName,
  handleSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-start w-[560px] h-56 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold">Add Category</h2>
        <div className="flex flex-col gap-2">
          <p className="text-sm ">Category name *</p>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-[512px] h-10 border-2 border-gray-200 rounded-lg pl-4"
          />
        </div>
        <div className="flex w-full justify-end gap-4">
          <div
            className="w-32 h-10.5 rounded-lg bg-[#E1E7EB] text-primary cursor-pointer items-center font-semibold flex justify-center"
            onClick={toggleModal}
          >
            Cancel
          </div>
          <div
            className="w-32 h-10.5 rounded-lg text-white bg-primary cursor-pointer items-center font-semibold flex justify-center"
            onClick={handleSave}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
