import React from "react";
import { useParams } from "react-router-dom";
import { singleProduct } from "../utils/singleProduct";

const ProductDetails = () => {
  const { proId } = useParams();
  const product = singleProduct.find((product) => product.id === parseInt(proId));

  return (
    <div className="md:ml-52 p-4 flex flex-col ">
      {product ? (
        <>
        
          <h1 className="mx-10 text-2xl font-bold">{product.title}</h1>
          <div className="md:flex  gap-36">

             <div className="relative md:my-16 md:mx-10 my-20">
            <div className="md:w-[28rem] rounded-lg shadow-lg w-96 h-72 mx-2 my-10 md:h-72 bg-yellow-300"></div>
          <div className="md:w-72 absolute w-72 md:my-10 md:left-20 left-16  -top-10 rounded-lg shadow-xl h-96 bg-yellow-400"></div>
          </div>
          <div className="flex flex-col">
               <h3 className="underline text-lg  font-bold ">Details</h3>
          <p className="max-w-96 my-2 font-semibold">{product.description}</p> 
          <h3 className="font-bold text-xl my-3">Rs 25</h3>
                

      
          </div>



          </div>
         
          
        </>
      ) : (
        <p>Product not found</p>
      )}
          <h1 className="md:text-center mx-20 font-bold text-2xl  md:text-3xl my-5 md:my-10">Product Highlights</h1>
<div className="md:flex md:mx-64 gap-40">
  <div className="flex  flex-col gap-5 items-center">
     <img className="md:w-36 md:h-36  h-36 w-36" src="\pngegg (20).png"></img>
     <p className="md:text-xl font-bold ">Easy to use</p>
  </div>
  <div className="flex flex-col gap-5 items-center">
     <img className="md:w-36 md:h-36 h-36 w-36" src="\pngegg (20).png"></img>
     <p className="text-xl font-bold ">Easy Return</p>
  </div>
  <div className="flex flex-col gap-5 items-center">
     <img className="md:w-36 md:h-36 h-36 w-36" src="\pngegg (20).png"></img>
     <p className="md:text-xl font-bold ">Results in 10 days</p>
  </div>
  <div className="flex flex-col gap-5 items-center">
     <img className="md:w-36 md:h-36 h-36 w-36" src="\pngegg (20).png"></img>
     <p className="text-xl font-bold ">Google Certified</p>
  </div>
           
           
          </div>
    </div>
  );
};

export default ProductDetails;
