import Header from "@/components/Header";
import Image from "next/image";
import Chair from "../../public/Right Image.png";

export default function Home() {
  return (
    <section className="text-gray-400 bg-[#2A254B] body-font">
      <div className="container mx-auto flex px[1280] py[584] md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font pt-4 text-[32px] sm:text-4xl text-3xl mb-4 font-medium text-white">
            The furniture brand for the future, with timeless designs
          </h1>

          <div className="flex justify-center">
            <button className="inline-flex text-white text-[16px] font-satoshi bg-slate-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              View Collection
            </button>
          </div>
          <p className="mt-28 text-18px mb-8 pt-5 leading-relaxed">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-[520px] h-[584px] object-cover object-center rounded"
            alt="Chair"
            src="Right Image.png"
          />
        </div>
      </div>
      <div className="bg-white flex items-center justify-center">
        <h1 className="pt-7 text-[25px] text-[#2A254B] font-clash block">
          What makes our brand different
        </h1>
      </div>
      <div className="bg-white">
        <div className="container px-2 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <h1 className="font-bold text-[#2A254B]">Next day as standard</h1>
            <p className="py-7 text-[16px] text-[#2A254B]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="flex flex-wrap md:text-left text-center order-first">
            <h1 className="font-bold text-[#2A254B]">Made by true artisans</h1>
            <p className="py-7 text-[16px] text-[#2A254B]">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          <div className="flex flex-wrap md:text-left text-center order-first">
            <h1 className="font-bold text-[#2A254B]">Unbeatable prices</h1>
            <p className="py-7 text-[16px] text-[#2A254B]">
              For our materials and quality, you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="flex flex-wrap md:text-left text-center order-first">
            <h1 className="font-bold text-[#2A254B]">Recycled packaging</h1>
            <p className="py-7 text-[16px] text-[#2A254B]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center pb-10">
        <h1 className="text-[#2A254B] pt-7 text-[32px] font-clash text-center">
          New Ceramics
        </h1>
        <div className="flex justify-center space-x-5 mt-5">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="w-[305px] h-[375px] object-cover object-center rounded"
              alt="Chair"
              src="Parent 1.png"
            />
            <div className="bg-white flex items-start justify-start">
              <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                The Dandy chair
              </h1>
            </div>
            <h2 className="text-[16px] text-[#2A254B]">£250</h2>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="w-[305px] h-[375px] object-cover object-center rounded"
              alt="Chair"
              src="Parent 2.png"
            />
            <div className="bg-white flex items-start justify-start">
              <h1 className="text-[16px] font-clash flex flex-wrap md:text-left text-center order-first">
                Rustic Vase Set
              </h1>
            </div>
            <h2 className="text-[16px] text-[#2A254B]">£155</h2>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="w-[305px] h-[375px] object-cover object-center rounded"
              alt="Chair"
              src="Photo 3.png"
            />
            <div className="bg-white flex items-start justify-start">
              <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                The Silky Vase
              </h1>
            </div>
            <h2 className="text-[16px] text-[#2A254B]">£125</h2>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="w-[305px] h-[375px] object-cover object-center rounded"
              alt="Chair"
              src="Photo 4.png"
            />
            <div className="bg-white flex items-start justify-start">
              <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                The Lucy Lamp
              </h1>
            </div>
            <h2 className="text-[16px] text-[#2A254B]">£399</h2>
          </div>
        </div>
        <div className="justify-center items-center">
          <button className="bg-gray-200 text-[#2A254B] pr-5 pl-5 pt-2 pb-2 m-5">
            View Collection
          </button>
        </div>
        <div className="bg-white flex flex-col items-start pb-10">
          <h1 className="text-[#2A254B] pt-2 text-[32px] font-clash text-left items-start">
            Our Popular Products
          </h1>
          <div className="flex justify-between space-x-5 mt-5">
            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
              <img
                className="w-[630px] h-[375px] object-cover object-center"
                alt="Chair"
                src="Large 1.png"
              />
              <div className="bg-white flex items-start justify-start">
                <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                  The Poplar suede sofa
                </h1>
              </div>
              <h2 className="text-[16px] text-[#2A254B]">£950</h2>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
              <img
                className="w-[630px] h-[375px] object-cover object-center"
                alt="Chair"
                src="Parent 1.png"
              />
              <div className="bg-white flex items-start justify-start">
                <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                  The Dandy chair
                </h1>
              </div>
              <h2 className="text-[16px] text-[#2A254B]">£250</h2>
            </div>

            <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
              <img
                className="w-[630px] h-[375px] object-cover object-center"
                alt="Chair"
                src="Black 1.png"
              />
              <div className="bg-white flex items-start justify-start">
                <h1 className="text-[16px] text-[#2A254B] font-clash flex flex-wrap md:text-left text-center order-first">
                  The Dandy chair
                </h1>
              </div>
              <h2 className="text-[16px] text-[#2A254B]">£250</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <h1 className="text-[36px] text-[#2A254B] pb-5">
            Join The Club & Get The Benefits
          </h1>
          <p className="text-[24px] text-[#2A254B]">
            Sign up for our newsletter and receive exclusive offers on new
          </p>
          <p className="text-[24px] text-[#2A254B]">
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
          <label
            form="footer-field"
            className="leading-7 text-sm text-[#2A254B]"
          >
            your@email.com
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full bg-gray-800 border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#2A254B] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
}
