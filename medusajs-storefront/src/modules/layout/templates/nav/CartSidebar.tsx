import React, { useState } from 'react';
import { formatAmount } from "@lib/util/prices";
import DeleteButton from "@modules/common/components/delete-button";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "@modules/products/components/thumbnail";
import { useCart } from './useCart'; // Import the custom hook

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [promoCode, setPromoCode] = useState<string>('');
  const { cart, loading, refreshCart } = useCart(); // Use the custom hook

  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const subtotal = cart?.subtotal || 0;
  const freeShippingThreshold = 75;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleDeleteItem = async (itemId: string) => {
    // Implement the delete logic here
    // After successful deletion, call refreshCart()
    refreshCart();
  };

  if (loading) {
    return <div>Loading...</div>; // Or a more sophisticated loading state
  }

  return (
    <div className={`fixed inset-y-0 right-0 rounded-l-2xl w-full sm:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50`}>
      <div className="h-full flex flex-col">
        <div className="px-6 py-6 flex justify-between items-center">
          <h2 className="text-4xl font-bold tracking-wider">Warenkorb</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {remainingForFreeShipping > 0 && (
            <div className="mb-4 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm">Nur noch €{remainingForFreeShipping.toFixed(2)} bis zum kostenlosen Versand.</p>
            </div>
          )}

          <div className="mb-4">
            <div className="flex items-center border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Rabattcode einfügen"
                className="flex-1 px-4 py-2 focus:outline-none"
                value={promoCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromoCode(e.target.value)}
              />
              <button className="bg-red-600 rounded-full text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                Anwenden
              </button>
            </div>
          </div>

          {cart && cart.items?.length ? (
            cart.items
              .sort((a, b) => (a.created_at > b.created_at ? -1 : 1))
              .map((item) => (
                <div key={item.id} className="flex items-center mb-6 pb-6 border-b border-t pt-6 mt-12">
                  <LocalizedClientLink href={`/products/${item.variant.product.handle}`}>
                    <Thumbnail thumbnail={item.thumbnail} size="square" />
                  </LocalizedClientLink>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="font-bold mt-1">
                      {formatAmount({
                        amount: item.unit_price || 0,
                        region: cart.region,
                        includeTaxes: false,
                      })}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="mx-2">Anzahl: {item.quantity}</span>
                    </div>
                  </div>
                  <DeleteButton id={item.id} className="text-gray-500 hover:text-gray-700 ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </DeleteButton>
                </div>
              ))
          ) : (
            <div className="flex py-16 flex-col gap-y-4 items-center justify-center rounded-2xl">
              <div className="bg-red-700 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                <span>0</span>
              </div>
              <span>Dein Warenkorb ist leer.</span>
              <span>Leg los und füll ihn mit tollen Produkten!</span>
              <LocalizedClientLink href="/store">
                <div className="bg-red-700 border-white rounded-full text-base px-12 py-2 text-white">
                  Zu den Produkten
                </div>
              </LocalizedClientLink>
            </div>
          )}
        </div>

        {cart && cart.items?.length ? (
          <div className="border-t px-4 py-6">
            <div className="flex justify-between mb-2">
              <span className='text-xl'>Zwischensumme</span>
              <span className='text-2xl font-extrabold'>
                {formatAmount({
                  amount: cart.subtotal || 0,
                  region: cart.region,
                  includeTaxes: false,
                })}
              </span>
            </div>
            <div className="flex justify-between mb-4 text-sm text-gray-600">
              <span>Rabattcodes, Versandkosten und Steuern werden bei der Bezahlung berechnet.</span>
            </div>
            <LocalizedClientLink href="/cart">
              <button className="w-72 flex justify-center mx-auto bg-red-600 rounded-full text-white py-3 hover:bg-red-600 transition-colors">
                Zur Kasse
              </button>
            </LocalizedClientLink>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartSidebar;