"use client"
import React from "react";
// import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Marketplace: React.FC = () => {
  


  const axies = [
    
           
            {
              id: 1,
              name: "Axie B",
              imgSrc: "/assets/Frame 131.png",
              
            },
            {
              id: 2,
              name: "Axie C",
              imgSrc: "/assets/image 137.png",
              
            },
            
              
          
  ];

  return (
    <div className=" bg-gray-900 text-lightGray p-8">
      {/* Content to Sell Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Market Place</h2>
        <div className="bg-[#212330] p-6 rounded-lg">
          <div className="flex space-x-6 overflow-x-auto">
            {[
              {
                id: 1,
                name: "Product 1",
                imgSrc: "/assets/Frame 36.png",
                price: "50",
              },
              {
                id: 2,
                name: "Product 2",
                imgSrc: "/assets/Frame 39.png",
                price: "75",
              },
              {
                id: 3,
                name: "Product 3",
                imgSrc: "/assets/Rectangle 395.png",
                price: "100",
              },

              {
                id: 4,
                name: "Product 4",
                imgSrc: "/assets/Frame 43 (1).png",
                price: "100",
              },
            ].map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 bg-[#2d2f3c] p-4 rounded-lg shadow-lg"
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Stats Section */}
      <section className="mb-12">
        <div className="bg-[#212330] p-10">
          <div className=" flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Overall Stats</h2>
            <div className="flex space-x-4 text-gray-400">
              <button className="px-4 py-2 bg-[#212330] rounded-lg text-[#FF9345]">
                24HR
              </button>
              <button className="px-4 py-2 bg-[#212330] rounded-lg text-lightGray">
                7D
              </button>
              <button className="px-4 py-2 bg-[#212330] rounded-lg text-lightGray">
                30D
              </button>
            </div>
          </div>

          <div className="  grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Sales */}
            <div className=" p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <img
                  src="/assets/image 133.png"
                  alt="Sales Icon"
                  className="w-5 h-5 mr-2"
                />
                Total Sales
              </h3>
              <p className="text-3xl font-bold mb-4">5,295</p>
              <img
                src="/assets/image 130.png"
                alt="Total Sales Chart"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Total Volume */}
            <div className=" p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <img
                  src="/assets/token-branded_solana.png"
                  alt="Volume Icon"
                  className="w-5 h-5 mr-2"
                />
                Total Volume
              </h3>
              <p className="text-3xl font-bold mb-4">22,893</p>
              <img
                src="/assets/image 132.png"
                alt="Total Volume Chart"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>

            {/* Axies Sold */}
            <div className=" p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <img
                  src="/assets/image 135.png"
                  alt="Axies Icon"
                  className="w-5 h-5 mr-2"
                />
                Axies Sold
              </h3>
              <p className="text-3xl font-bold mb-4">4,061</p>
              <img
                src="/assets/image 134.png"
                alt="Axies Sold Chart"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Axies Section */}
      <section>
       
        <div className=" bg-[#212330] p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <img
              src="/assets/image 135.png"
              alt="Axies Icon"
              className="w-10 h-10 mr-2 border bg-[#1C1F25] "
            />
            <p className="text-3xl font-bold mb-4">Axies</p>
            <p>
              Axies are the key into a vast universe of experiences. Battle,
              collect, breed, and befriend these adorable creatures.{" "}
            </p>
          </div>
          {axies.map((axie) => (
            <div key={axie.id} className="bg-[#212330] p-6 rounded-lg">
              {/* <h3 className="text-lg font-medium">{axie.name}</h3> */}

              <img
                src={axie.imgSrc}
                alt={axie.name}
                className="w-50 h-50  object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
