import React from "react";

const Footer = () => {
  return (
    <div className="border rounded-md p-6 flex">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-gray-800">
          Bose Bluetooth Wireless Headphones
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Crisp powerful sound from the best sounding wireless headphone in its
          class
        </p>
        <div className="mt-6">
          <p className="text-2xl font-bold text-green-600">$219.05</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 mt-4 rounded">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGf19R6hMx0IHi1xDr_Etee1bKeGBYlAUxwH5PRqShF_BZimFL-nEpVzrUOGqkImDc9kPa8zK9CC_vmrqZeCg_08SxkHnNI0TcAupjEAM3RajY6QfPf8HkW_bmsr82&usqp=CAc"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
