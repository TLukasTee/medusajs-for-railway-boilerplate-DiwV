import { EnvelopeIcon, GiftTopIcon, TruckIcon, UserIcon } from '@heroicons/react/24/outline';

import React from 'react';
import { FaHeadset } from 'react-icons/fa';
import { LuPackage } from 'react-icons/lu';

const HeroBanner: React.FC = () => {
  return (

    <div>
       
<div className="flex flex-col rounded-lg overflow-hidden py-0 pb-6 pt-24  ">
 
      <div className="bg-gray-100/10 border-4 border-gray-100/50 flex flex-wrap justify-around items-center text-center text-lg text-red-500 md:shadow-md  md:mx-24 rounded-2xl p-10">
        <div className="flex flex-col items-center ">
            <div  className=' bg-gray-200 rounded-full w-24 h-24'> 
         <TruckIcon className="w-12 h-12 mb-2 text-red-600  mx-auto items-center flex justify-center relative top-6" />
</div>
          <span className='text-xl font-extrabold mt-4'>Kurzer Versandweg</span>
          <span className='text-sm text-neutral-800'> Postversand: 1-2 Werktage </span>
        </div>
        <div className="flex flex-col items-center">
            <div  className=' bg-gray-200 rounded-full w-24 h-24'> 
         <FaHeadset className="w-12 h-12 mb-2 text-red-600  mx-auto items-center flex justify-center relative top-6" />
</div>
          <span className='text-xl font-extrabold mt-4'>Kundenservice</span>
          <span className='text-sm text-neutral-800'> Keine Warteschleife | 100% Persönlich </span>
        </div>
        
        <div className="flex flex-col items-center ">
            <div  className=' bg-gray-200 rounded-full w-24 h-24'> 
         <LuPackage className="w-12 h-12 mb-2 text-red-600  mx-auto items-center flex justify-center relative top-6" />
</div>
          <span className='text-xl font-extrabold mt-4'>Versandkostenfrei</span>
          <span className='text-sm text-neutral-800' > Regulär ab €75  </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroBanner;