import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { TbBookUpload } from "react-icons/tb";

const Description = ({ product, setProduct }) => {
  const [productName, setProductName] = useState(product.name);
  const [brand, setBrand] = useState(product.brand);
  const [image, setImage] = useState(product.image);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      name: e.target.value,
    }));
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      brand: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-6 mt-4">
      <div className="flex gap-5 items-center mb-6">
        <p className="px-4 py-1 bg-[#DAEDF9] rounded-lg text-primary font-medium text-sm">
          Description
        </p>
        <IoChevronForward className="text-textGray" />
        <p className="p-2 rounded-lg text-textGray font-medium text-sm">
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
      <div className="w-[500px] h-auto rounded-xl shadow-2xl p-6 flex flex-col gap-5 justify-between">
        <p className="font-semibold">Description</p>
        <div className="">
          <p className="text-sm">Product name *</p>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
          />
        </div>
        <div className="">
          <p className="text-sm">Category *</p>
          <select className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4">
            {product.category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <p className="text-sm">Brand *</p>
          <input
            type="text"
            value={brand}
            onChange={handleBrandChange}
            className="w-full h-10 border-2 border-gray-200 rounded-lg pl-4"
          />
        </div>
        <div className="flex flex-col w-44 h-10.5 rounded-lg items-center justify-center text-primary border-2 border-primary">
          <label className="flex items-center cursor-pointer">
            <TbBookUpload />
            <span className="font-semibold">Upload Image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {image && (
            <img
              src={image}
              alt="Product"
              className="mt-2 w-32 h-32 object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
