import React, { useState } from "react";
import TravelImg from "../../assets/travelbox.png";
import {
  MdFlight,
  MdOutlineLocalHotel,
  MdCheckCircleOutline,
} from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  const [showFlightForm, setShowFlightForm] = useState(false);
  const [showHotelForm, setShowHotelForm] = useState(false);
  const [showWifiForm, setShowWifiForm] = useState(false);
  const [showFoodForm, setShowFoodForm] = useState(false);
  const [flightData, setFlightData] = useState({});
  const [hotelData, setHotelData] = useState({});
  const [wifiData, setWifiData] = useState({});
  const [foodData, setFoodData] = useState({});
  const [showFlightSuccess, setShowFlightSuccess] = useState(false);
  const [showHotelSuccess, setShowHotelSuccess] = useState(false);
  const [showWifiSuccess, setShowWifiSuccess] = useState(false);
  const [showFoodSuccess, setShowFoodSuccess] = useState(false);

  const handleFlightClick = () => {
    setShowFlightForm(true);
  };

  const handleHotelClick = () => {
    setShowHotelForm(true);
  };

  const handleWifiClick = () => {
    setShowWifiForm(true);
  };

  const handleFoodClick = () => {
    setShowFoodForm(true);
  };

  const handleFlightSubmit = () => {
    console.log("Flight data:", flightData);
    setShowFlightForm(false);
    setShowFlightSuccess(true);
  };

  const handleHotelSubmit = () => {
    console.log("Hotel data:", hotelData);
    setShowHotelForm(false);
    setShowHotelSuccess(true);
  };

  const handleWifiSubmit = () => {
    console.log("Wi-fi data:", wifiData);
    setShowWifiForm(false);
    setShowWifiSuccess(true);
  };

  const handleFoodSubmit = () => {
    console.log("Food data:", foodData);
    setShowFoodForm(false);
    setShowFoodSuccess(true);
  };

  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={TravelImg}
                  alt="biryani img"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Explore all corners of The world with us
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  Exploring great places is a thrilling adventure, blending
                  stunning landscapes, rich cultures, and unforgettable
                  experiences.
                  <br />
                </p>
                <div
                  data-aos="zoom-in"
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="space-y-6">
                    <div
                      className="flex items-center gap-4"
                      onClick={handleFlightClick}
                    >
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 cursor-pointer" />
                      <p>Flight</p>
                    </div>
                    <div
                      className="flex items-center gap-4"
                      onClick={handleHotelClick}
                    >
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 cursor-pointer" />
                      <p>Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div
                      className="flex items-center gap-4"
                      onClick={handleWifiClick}
                    >
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 cursor-pointer" />
                      <p>Wi-fi</p>
                    </div>
                    <div
                      className="flex items-center gap-4"
                      onClick={handleFoodClick}
                    >
                      <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 cursor-pointer" />
                      <p>Foods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Flight Form */}
      {showFlightForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Flight Form</h2>
            <input
              type="text"
              placeholder="Departure"
              value={flightData.departure || ""}
              onChange={(e) =>
                setFlightData({ ...flightData, departure: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Destination"
              value={flightData.destination || ""}
              onChange={(e) =>
                setFlightData({ ...flightData, destination: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-2"
            />
            <button
              onClick={handleFlightSubmit}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Hotel Form */}
      {showHotelForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Hotel Form</h2>
            <input
              type="text"
              placeholder="Hotel Name"
              value={hotelData.name || ""}
              onChange={(e) =>
                setHotelData({ ...hotelData, name: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Location"
              value={hotelData.location || ""}
              onChange={(e) =>
                setHotelData({ ...hotelData, location: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-2"
            />
            <button
              onClick={handleHotelSubmit}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Wifi Form */}
      {showWifiForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Wi-fi Form</h2>
            <input
              type="text"
              placeholder="Network Name"
              value={wifiData.name || ""}
              onChange={(e) =>
                setWifiData({ ...wifiData, name: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="password"
              placeholder="Password"
              value={wifiData.password || ""}
              onChange={(e) =>
                setWifiData({ ...wifiData, password: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-2"
            />
            <button
              onClick={handleWifiSubmit}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Food Form */}
      {showFoodForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Food Form</h2>
            <input
              type="text"
              placeholder="Food Item"
              value={foodData.item || ""}
              onChange={(e) =>
                setFoodData({ ...foodData, item: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={foodData.quantity || ""}
              onChange={(e) =>
                setFoodData({ ...foodData, quantity: e.target.value })
              }
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mt-2"
            />
            <button
              onClick={handleFoodSubmit}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {/* Success Popups */}
      {showFlightSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <MdCheckCircleOutline className="text-6xl text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Flight Registration Successful</h2>
            <button
              onClick={() => setShowFlightSuccess(false)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showHotelSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <MdCheckCircleOutline className="text-6xl text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Hotel Registration Successful</h2>
            <button
              onClick={() => setShowHotelSuccess(false)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showWifiSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <MdCheckCircleOutline className="text-6xl text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Wi-fi Registration Successful</h2>
            <button
              onClick={() => setShowWifiSuccess(false)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showFoodSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <MdCheckCircleOutline className="text-6xl text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold mb-4">Food Registration Successful</h2>
            <button
              onClick={() => setShowFoodSuccess(false)}
              className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
