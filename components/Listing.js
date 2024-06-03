import React from "react";
import { listings } from "../utils/listing";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <div className="md:ml-52 p-4 flex flex-col overflow-x-hidden">
      <h1 className="font-bold text-2xl mx-10 ">Product Listing:</h1>
      <div className="flex flex-wrap gap-1 my-5">
        {listings.map((list) => (
          <Link key={list.id} to={`/product/listing/${list.id}`}>
            <div className="w-60 h-52 mx-16 md:mx-10 border border-black mb-9 rounded-md shadow-md">
              <div className="w-16 h-16 bg-yellow-300 mx-5 my-4"></div>
              <h3 className="mx-5 font-bold">{list.name}</h3>
              <p className="mx-3 ">{list.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listing;
