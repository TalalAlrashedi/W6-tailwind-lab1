import React from "react";

let categories = [
  {
    name: "Electronics",
    descr: "TV, Headphones, Air Conditioners...",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Clothing",
    descr: "Women's, Men's, Kids...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn5YA5IT_Pe4E0aSebA6PmzGK4zogKmOvCrZPvM2R7RrwBFRwqKa29fQ&usqp=CAE&s",
  },
  {
    name: "Computers",
    descr: "Desktop PC, Laptop, Gaming...",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1viGacT98Y4YHHQpY2IUS-tQSxKurgwzvvTwPECDJ2XxLT9bVQ4BsyTE-bv_liVVCOgNYGK9DUiCZS2g_ru-1tOyOTp3esRsIpBDz3_1pInNhBo3gXE2xUvD8FCeAPT6cAtCpVsmM1A&usqp=CAc",
  },
  {
    name: "Home & Kitchen",
    descr: "Furniture, Decor, Appliances...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn5YA5IT_Pe4E0aSebA6PmzGK4zogKmOvCrZPvM2R7RrwBFRwqKa29fQ&usqp=CAE&s",
  },
  {
    name: "Healthy & Beauty",
    descr: "Makeup, Skin Care, Hair Care...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn5YA5IT_Pe4E0aSebA6PmzGK4zogKmOvCrZPvM2R7RrwBFRwqKa29fQ&usqp=CAE&s",
  },
  {
    name: "Jewelry & Watch",
    descr: "Pendant, Necklace, Watch...",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn5YA5IT_Pe4E0aSebA6PmzGK4zogKmOvCrZPvM2R7RrwBFRwqKa29fQ&usqp=CAE&s",
  },
];

const Category = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold ">Top Categories Of The Month</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 gap-4 mx-auto">
          {categories.map((category) => (
            <a>
              <div className="relative ">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 w-full p-2 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    {category.descr}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
