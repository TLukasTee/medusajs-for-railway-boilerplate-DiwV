"use client"

import { Transition } from "@headlessui/react"
import { Cart } from "@medusajs/medusa"
import { useParams, usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { addToCart } from "@modules/cart/actions"

import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
  const [discountCode, setDiscountCode] = useState("")
  const { countryCode } = useParams()
  const countryCode2 = useParams().countryCode as string

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const itemRef = useRef<number>(totalItems || 0)

  const toggleCart = () => setCartDropdownOpen(!cartDropdownOpen)

  const pathname = usePathname()

  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      setCartDropdownOpen(true)
    }
  }, [totalItems, pathname])

  const subtotal = cartState?.subtotal || 0
  const freeShippingThreshold = 7500 // 75€ in cents
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)


  return (
    
    <div className="relative z-50">
      <button onClick={toggleCart} className="flex items-center">
        <ShoppingBagIcon className="h-8 w-8 text-black" />
        <span className={`absolute -right-3 top-4 ${totalItems > 0 ? 'bg-red-700 text-white' : 'bg-white text-black'} font-bold border-2 rounded-full px-1.5 text-sm`}>
          {totalItems}
        </span>
      </button>
      <Transition
        show={cartDropdownOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-xl font-semibold">Warenkorb</h3>
            <button onClick={toggleCart} className="text-2xl">&times;</button>
          </div>
          
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">
                {remainingForFreeShipping > 0 
                  ? `Nur noch €${(remainingForFreeShipping / 100).toFixed(2)} bis zum kostenlosen Versand.`
                  : "Du hast kostenlosen Versand erreicht!"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-red-700 h-2.5 rounded-full" 
                style={{ width: `${freeShippingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
                Versandkosten: 4,90
              </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartState && cartState.items?.length ? (
              <div className="divide-y divide-gray-200">
                {cartState.items.map((item) => (
                  <div key={item.id} className="flex p-4">
                 <LocalizedClientLink
                          href={`/products/${item.variant.product.handle}`}
                          className="w-24"
                        >
                          <Thumbnail thumbnail={item.thumbnail} size="square" />
                        </LocalizedClientLink>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <LocalizedClientLink href={`/products/${item.variant.product.handle}`}>
                              {item.title}
                            </LocalizedClientLink>
                          </h3>
                          <p className="ml-4">
                            {formatAmount({
                              amount: item.unit_price * item.quantity,
                              region: cartState.region,
                              includeTaxes: false,
                            })}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center">
                          {/* <button className="px-2 py-1 border rounded-l" > - </button> */}
                          <span className="px-2 py-1 border-t border-b">Anzahl {item.quantity}</span>
                          {/* <button className="px-2 py-1 border rounded-r">+</button> */}
                        </div>
                        <div className="flex">
                          <DeleteButton id={item.id}>
                            <span className="text-red-700">Entfernen</span>
                          </DeleteButton>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-4">
                <ShoppingBagIcon className="h-16 w-16 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Dein Warenkorb ist leer.</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Leg los und füll ihn mit tollen Produkten!
                </p>
                <div className="mt-6">
                  <LocalizedClientLink
                    href="/store"
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800"
                    onClick={toggleCart}
                  >
                    Zu den Produkten
                  </LocalizedClientLink>
                </div>
              </div>
            )}
          </div>

          {cartState && cartState.items?.length ? (
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Code einfügen"
                  className="flex-grow p-2 border rounded-l"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button className="bg-red-700 text-white px-4 py-2 rounded-r-full">
                  Anwenden
                </button>
              </div>
              
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Zwischensumme</p>
                <p>
                  {formatAmount({
                    amount: cartState.subtotal || 0,
                    region: cartState.region,
                    includeTaxes: false,
                  })}
                </p>
              </div>
             
              <p className="text-sm text-gray-500">
                Rabattcodes, Versandkosten und Steuern werden bei der Bezahlung berechnet.
              </p>
              <div className="mt-6">
                <LocalizedClientLink
                  href="/cart"
                  className="flex items-center justify-center rounded-md border border-transparent bg-red-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800"
                >
                  Zur Kasse
                </LocalizedClientLink>
              </div>
            </div>
          ) : null}
        </div>
      </Transition>
    </div>
  )
}

export default CartDropdown