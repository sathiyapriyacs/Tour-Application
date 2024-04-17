import React from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon

const PlaceCard = ({ img, title, location, description, price, type, handleOrderPopup, toggleWishlist, wishlist }) => {
  const isWishlist = wishlist.includes(title);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-48 object-cover object-center" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-600">{location}</p>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-bold">${price}</p>
          <button
            onClick={() => toggleWishlist(title)}
            className={`text-gray-500 hover:text-red-500`}
          >
            <FaHeart className={`text-lg ${isWishlist ? 'text-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
