import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font-bold text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col items-start mt-12">
            <span className="text-[#8F9499] text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="text-[16px] font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[50px] font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/01.jpg"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/02.jpg"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/03.jpg"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/04.jpg"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/05.jpg"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/06.jpg"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
