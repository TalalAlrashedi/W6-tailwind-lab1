import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:grid grid-cols-1">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-4 mb-8 ">

        <div className="relative border rounded-md w-2/3 overflow-hidden flex-grow ">
          <img
            src="https://images.squarespace-cdn.com/content/v1/62b707c0e1e6dc6560dd3325/1675633742451-MK3NTACGEWCE0D9NXS3N/Muted+Easy+Chair+D+by+NONO+%E2%80%943.jpg?format=1000w"
            className="w-full h-full object-cover rounded-lg shadow-md"
            alt="Minimalist chair"
          />
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaArrowAltCircleLeft />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <FaArrowAltCircleRight />
          </button>
        </div>


        <div className="relative border rounded-md w-1/3 overflow-hidden flex-grow">
          <img
            src="https://imagescdn.simons.ca/images/19444-23314326-1-A1_2/owing-oak-minimalist-chairs-set-of-2.jpg?__=6"
            className="w-full h-full object-cover rounded-lg shadow-md"
            alt="Set of chairs"
          />
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
            aria-label="Previous slide"
          ></button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
            aria-label="Next slide"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
