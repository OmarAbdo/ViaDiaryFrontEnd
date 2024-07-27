import React from "react";

const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];

export default function User() {
  return (
    <>
      <div className=" py-16 px-4">
        <div className="container mx-auto">
          {/* Discover new Tracks */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800">
              <span style={{ fontSize: "12px" }}>Your uploaded new</span> <br />{" "}
              Tracks
            </h1>
            <a href="#" className="text-gray-500 hover:text-indigo-500">
              See all
            </a>
          </div>

          {/* Track rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/id/${1009 + index}/400/300`}
                  alt="Track cover"
                  className="h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 hover:text-indigo-500">
                    My first day in Germany
                  </h3>
                  <p className="text-gray-500 text-sm">Your Diary</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-16 px-4">
        <div className="container mx-auto">
          {/* Discover new Tracks */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800">
              <span style={{ fontSize: "12px" }}>Your created</span> <br />{" "}
              Playlists
            </h1>
            <a href="#" className="text-gray-500 hover:text-indigo-500">
              See all
            </a>
          </div>

          {/* Track rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/id/${1009 + index}/400/300`}
                  alt="Track cover"
                  className="h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 hover:text-indigo-500">
                    German Diaries part {index + 1}
                  </h3>
                  <p className="text-gray-500 text-sm">Your own playlist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
