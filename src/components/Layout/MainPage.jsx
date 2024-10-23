import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";
import Hero from "./Hero";
import AddCategory from "../../models/AddCategory";
import Variants from "./Variants";
import Description from "./Description";
import Combination from "./Combination";
import PriceInfo from "./PriceInfo";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [currentSection, setCurrentSection] = useState("hero");
  const [product, setProduct] = useState({
    name: "",
    category: ["Shoes"],
    brand: "",
    image: "",
    variants: [
      {
        name: "Size",
        values: ["M", "L"],
      },
      {
        name: "Color",
        values: ["Black", "Red"],
      },
    ],
    combinations: {
      a: {
        name: "M/Black",
        sku: "ABC12",
        quantity: 4,
        inStock: false,
      },
      b: {
        name: "L/Red",
        sku: "ABC12",
        quantity: null,
        inStock: true,
      },
    },
    priceInr: null,
    discount: {
      method: "pct",
      value: 12,
    },
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSave = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: [...prevProduct.category, categoryName],
    }));
    setCategoryName("");
    setCurrentSection("description");
    toggleModal();
  };

  const goToNextSection = () => {
    switch (currentSection) {
      case "hero":
        setCurrentSection("description");
        break;
      case "description":
        setCurrentSection("variants");
        break;
      case "variants":
        setCurrentSection("combinations");
        break;
      case "combinations":
        setCurrentSection("priceInfo");
        break;
      default:
        break;
    }
  };

  const goToPreviousSection = () => {
    switch (currentSection) {
      case "hero":
        toggleModal()
      case "description":
        setCurrentSection("hero");
        break;
      case "variants":
        setCurrentSection("description");
        break;
      case "combinations":
        setCurrentSection("variants");
        break;
      case "priceInfo":
        setCurrentSection("combinations");
        break;
      default:
        break;
    }
  };

  const getButtonTexts = () => {
    switch (currentSection) {
      case "hero":
        return { btnText1: "Add Category", btnText2: "Add Product" };
      case "description":
        return { btnText1: "Cancel", btnText2: "Next" };
      case "variants":
        return { btnText1: "Back", btnText2: "Next" };
      case "combinations":
        return { btnText1: "Back", btnText2: "Next" };
      case "priceInfo":
        return { btnText1: "Back", btnText2: "Confirm" };
      default:
        return { btnText1: "Add Category", btnText2: "Add Product" };
    }
  };

  const { btnText1, btnText2 } = getButtonTexts();

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen border border-gray-200"></div>
      <div className="w-full">
        <Navbar
          toggleModal={toggleModal}
          btnText1={btnText1}
          btnText2={btnText2}
          goToNextSection={goToNextSection}
          goToPreviousSection={goToPreviousSection}
        />
        {currentSection === "hero" ? (
          <Hero />
        ) : currentSection === "description" ? (
          <Description product={product} />
        ) : currentSection === "variants" ? (
          <Variants product={product} />
        ) : currentSection === "combinations" ? (
          <Combination product={product} />
        ) : currentSection === "priceInfo" ? (
          <PriceInfo product={product} />
        ) : null}
      </div>
      {showModal && (
        <AddCategory
          toggleModal={toggleModal}
          setCategoryName={setCategoryName}
          categoryName={categoryName}
          handleSave={handleSave}
          setProduct={setProduct}
        />
      )}
    </div>
  );
};

export default MainPage;
