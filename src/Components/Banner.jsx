import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 py-6">
      <div className="md:col-span-2">
        <img
          src="https://images.squarespace-cdn.com/content/v1/62b707c0e1e6dc6560dd3325/1675633742451-MK3NTACGEWCE0D9NXS3N/Muted+Easy+Chair+D+by+NONO+%E2%80%943.jpg?format=1000w"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="md:col-span-2">
        <img
          src="https://imagescdn.simons.ca/images/19444-23314326-1-A1_2/owing-oak-minimalist-chairs-set-of-2.jpg?__=6"
          className=" object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
