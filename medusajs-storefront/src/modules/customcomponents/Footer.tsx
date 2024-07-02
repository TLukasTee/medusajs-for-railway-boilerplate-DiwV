import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const FooterCustom: React.FC = () => {
  return (
    <footer className="bg-white  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-12 pt-44">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Informationen</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Zahlungs- und Versandinformationen</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Widerrufsbelehrung</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Allgemeine Geschäftsbedingungen</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Datenschutzerklärung</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Impressum</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">About</h2>
            <p className="text-gray-600">
              Aus Österreich für Österreich! Erreiche mit unseren Supplement bester Qualität Dein 
              Fitness-/ Gesundheitsziel. Faire Preise ✓ VERSANDKOSTENFREI bestellen ✓ Lieferung 
              innerhalb von 1-2 Tagen ✓
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2024, ZNutrition</p>
        </div>
      
      </div>
    </footer>
  );
};

export default FooterCustom;