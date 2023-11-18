"use client";

import { Carousel } from "keep-react";

const Banner = () => {
  return (
    <div className="h-56 w-full  sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel indicatorsType="ring" indicators={true}>
        <div className="grid grid-cols-2 bg-orange-950 text-white">
          <h1 className="col-span-1 text-5xl md:text-10xl lg:text-12xl font-bold text-center flex items-center">
            Best Selling Earring
          </h1>
          <img
            src="https://i.ibb.co/rZdF7Qn/baylee-gramling-FOw-YSRl-L-Bk-unsplash.jpg"
            alt="slider-1"
            className="w-full sm:h-64 xl:h-80 2xl:h-96 "
          />
        </div>
        <div className="grid grid-cols-2 bg-orange-950 text-white">
          <h1 className="col-span-1 text-5xl md:text-10xl lg:text-12xl font-bold text-center flex items-center">
            Best Selling Earring
          </h1>
          <img
            src="https://i.ibb.co/68RMbnr/istockphoto-1270108679-1024x1024.jpg"
            alt="slider-1"
            className="w-full sm:h-64 xl:h-80 2xl:h-96 "
          />
        </div>
        <div className="grid grid-cols-2 bg-orange-950 text-white">
          <h1 className="col-span-1 text-5xl md:text-10xl lg:text-12xl font-bold text-center flex items-center">
            Best Selling Earring
          </h1>
          <img
            src="https://i.ibb.co/kHX2z01/jackie-tsang-3-YP8-mh-Kg-unsplash.jpg"
            alt="slider-1"
            className="w-full sm:h-64 xl:h-80 2xl:h-96 "
          />
        </div>
        <div className="grid grid-cols-2 bg-orange-950 text-white">
          <h1 className="col-span-1 text-5xl md:text-10xl lg:text-12xl font-bold text-center flex items-center">
            Best Selling Earring
          </h1>
          <img
            src="https://i.ibb.co/8BkmthN/download-43.jpg"
            alt="slider-1"
            className="w-full sm:h-64 xl:h-80 2xl:h-96 "
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
