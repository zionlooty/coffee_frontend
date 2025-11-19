import React from "react";
import { CiHeart } from "react-icons/ci";

const CoffeeCard = ({ img, name, title, price }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
      <div className="relative group">
        <img
          src={img}
          alt={name}
          className="w-full h-[330px] object-cover"
        />
      
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">View Details</span>
        </div>
        <CiHeart className="absolute top-3 right-5 text-2xl text-white cursor-pointer z-10" />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-black text-sm">{title}</p>

        <div className="flex items-center justify-between mt-3">
          <h1 className="font-bold">{price}</h1>
          <button className="bg-black text-white py-2 px-3 rounded-md hover:bg-gray-800 hover:scale-105 transition-transform">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
