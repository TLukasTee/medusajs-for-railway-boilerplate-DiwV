import { EnvelopeIcon, GiftTopIcon, InboxStackIcon, PhoneIcon, TruckIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { FaHeadset } from 'react-icons/fa';
import { LuPackage } from 'react-icons/lu';

const HeroBanner: React.FC = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 pt-24'>
      <div className="flex flex-col overflow-hidden md:shadow-md rounded-3xl">
        <div className="bg-gray-100/10 border-4 border-gray-100/50 flex flex-col sm:flex-row justify-between items-center text-center text-lg text-red-500 rounded-3xl py-8 px-4 sm:px-12">
          <BannerItem
            icon={<TruckIcon className="w-8 h-8 sm:w-12 sm:h-12 text-red-600" />}
            title="Kurzer Versandweg"
            subtitle="Postversand: 1-2 Werktage"
          />
          <BannerItem
            icon={<PhoneIcon className="w-8 h-8 sm:w-12 sm:h-12 text-red-600" />}
            title="Kundenservice"
            subtitle="Keine Warteschleife | 100% Persönlich"
          />
          <BannerItem
            icon={<InboxStackIcon className="w-8 h-8 sm:w-12 sm:h-12 text-red-600" />}
            title="Versandkostenfrei"
            subtitle="Regulär ab €75"
          />
        </div>
      </div>
    </div>
  );
};

interface BannerItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center mb-8 sm:mb-0">
      <div className='bg-gray-200 rounded-full w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center'>
        <div className="relative top-0 sm:top-1.5">
          {icon}
        </div>
      </div>
      <span className='text-lg sm:text-xl font-extrabold mt-4'>{title}</span>
      <span className='text-xs sm:text-sm text-neutral-800'>{subtitle}</span>
    </div>
  );
};

export default HeroBanner;