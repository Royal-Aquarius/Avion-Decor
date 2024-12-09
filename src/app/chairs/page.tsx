import React from "react";

const page = () => {
  return (
    <section className="text-[#2A254B] bg-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="Image left.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2A254B]">
            The Dandy Chair
            <h2>£250</h2>
          </h1>
          <p className="mb-8 leading-relaxed">
            Description A timeless design, with premium materials features as
            one of our most popular and iconic pieces. The dandy chair is
            perfect for any stylish living space with beech legs and lambskin
            leather upholstery.
            <p>-Premium material</p>
            <p>-Handmade upholstery</p>
            <p>-Quality timeless classic</p>
          </p>
          <p className="text-sm mt-2 text-[#2A254B] mb-2 w-full">Dimensions:</p>
          <h1 className="flex items-center justify-center gap-5 pb-5">
            <h2>
              Height
              <p>110cm</p>
            </h2>
            <h2>
              Width
              <p>75cm</p>
            </h2>
            <h2>
              Depth
              <p>50cm</p>
            </h2>
          </h1>

          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label
                form="hero-field"
                className="leading-7 text-sm text-[#2A254B]"
              >
                Ammount:
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-24 bg-gray-800 border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="inline-flex text-white bg-[#2A254B] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
