import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const Outlet: React.FC = () => {
  return (
    <div className='å'> 
    <div className="bg-gray-200 rounded-2xl overflow-hidden mx-auto  max-w-[76rem] my-24 ">
      <div className="flex flex-col md:flex-row  ">
        {/* Left side with image and discount text */}
        <div className="relative md:w-1/2 ">
          <Image
            src="https://res.cloudinary.com/dd0kypcrk/image/upload/v1719412241/Kopie_von_Kein_Titel_1920_x_1080_px_md9pkk.svg"
            alt="Athlete wearing ESN apparel"
            width={800}
            height={800}

            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 sm:bg-gradient-to-r bg-gradient-to-b from-black/10 to-transparent flex items-center justify-center">
            <div className="text-white text-center bg-gray-400/80  border-2 border-white p-4 rounded-2xl   relative">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold ">BIS ZU</p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-red-600">-17%</p>
            </div>
          </div>
        </div>

        {/* Right side with product images and text */}
        <div className="sm:bg-gradient-to-r bg-gradient-to-b from-gray-200 to-black/10 p-6 md:w-1/2 flex flex-col justify-between">
          <div className="">
            <Image
              src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
              alt="ESN products"
              width={800}
              height={800}
              className="w-full object-contain h-48 md:h-64"
            />
          </div>
          <div className="text-white mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center">RABATT</h2>
            <p className="text-lg md:text-xl mb-4 text-center  font-bold">-17% auf Premium-Supplements</p>
            <button className="bg-red-600  text-white text-center flex justify-center items-center mx-auto text-black font-bold py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
              CODE KOPIEREN <ClipboardDocumentIcon className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Outlet;