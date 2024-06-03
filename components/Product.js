import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { categories, features } from "../utils/constants";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLaunchProduct = () => {
    navigate("/product/listing");
  };

  return (
    <div className="md:ml-52 p-4 flex flex-col overflow-x-hidden">
      {loading ? (
        <div className="flex justify-center items-center -mx-36 h-screen w-screen">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="font-bold text-2xl py-5 md:px-10">Create something new</h1>
          <h2 className="font-bold text-xl py-1 md:px-10">
            Input/Product Image/Video
          </h2>
          <div className="md:flex md:flex-row flex flex-col gap-10">
            {/* Image/Video uploader section */}
            <div className="flex-col flex">
              <div className="md:w-80 md:h-80 w-96 h-96 bg-yellow-300 md:mx-10 my-5">
                <div className="flex justify-center py-20 px-28">
                  <div className="md:h-28 md:w-36 w-20 h-20 bg-gray-300 flex justify-center items-center">
                    <FaPlus className="text-5xl" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mx-7 md:mx-10">
                <div className="w-24 h-24 md:w-24 md:h-24 bg-yellow-300 flex justify-center items-center">
                  <div className="h-10 w-10 md:w-10 md:h-10 bg-gray-300 flex justify-center items-center">
                    <FaPlus className="text-2xl" />
                  </div>
                </div>
                <div className="w-24 h-24 bg-yellow-300 flex justify-center items-center">
                  <div className="h-10 w-10 md:w-10 md:h-10 bg-gray-300 flex justify-center items-center">
                    <FaPlus className="text-2xl" />
                  </div>
                </div>
                <div className="w-24 h-24 bg-yellow-300 flex justify-center items-center">
                  <div className="h-10 w-10 md:w-10 md:h-10 bg-gray-300 flex justify-center items-center">
                    <FaPlus className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-xl">Input Product Name</h2>
              <input
                type="text"
                className="md:w-[33rem] w-96 my-5 h-12 border-2 border-black bg-gray-300 rounded-md"
              ></input>

              <h2 className="font-bold text-xl">Input Product Description</h2>

              <textarea className="md:w-[33rem] md:h-[20rem] w-96 h-96 bg-gray-300 border-2 border-black my-3"></textarea>
            </div>
          </div>
          <h2 className="font-bold text-xl py-4 mx-10 md:text-left text-center">Input Product Category</h2>
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((category) => (
              <div key={category.id} className="w-60 h-52 mx-16 md:mx-10 border border-black rounded-md shadow-md">
                <div className="w-16 h-16 bg-yellow-300 mx-5 my-4"></div>
                <h3 className="mx-5 font-bold">{category.name}</h3>
                <p className="mx-3">{category.description}</p>
              </div>
            ))}
          </div>

          <h1 className="text-center my-20 font-extrabold text-3xl">
            Your Product Highlights
          </h1>
          <div className="md:flex md:flex-wrap gap-8">
            {features.map((feature, index) => (
              <div key={index} className="md:flex items-center gap-8">
                <h3 className="text-blue-800 font-bold text-lg">{feature}</h3>
                <input type="text" placeholder="Input Area" className="border-2 border-black rounded-lg bg-gray-300 w-80 h-14 px-28 font-bold my-3"></input>
              </div>
            ))}
          </div>

          <h1 className="md:my-16 my-5 mx-5 font-extrabold text-3xl">Set Price</h1>
          <div>
            <input type="text" placeholder="₹" className="w-96 bg-gray-300 text-3xl font-bold text-black px-10 md:mx-10 h-14 border-2 border-black"></input>
            <div>
              <button className="w-40 md:mx-10 my-5 border-2 border-black shadow-md rounded-md h-12 bg-yellow-300 font-bold">Cancel</button>
              <button onClick={handleLaunchProduct} className="w-40 mx-5 my-5 border-2 border-black shadow-md rounded-md h-12 bg-yellow-300 font-bold">Launch Product</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
