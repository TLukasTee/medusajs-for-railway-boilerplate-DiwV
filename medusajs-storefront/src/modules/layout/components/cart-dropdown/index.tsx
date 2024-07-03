'use client'
import { Transition } from "@headlessui/react"
import { Cart } from "@medusajs/medusa"
import { useParams, usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"
import { formatAmount } from "@lib/util/prices"
import DeleteButton from "@modules/common/components/delete-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { updateLineItem } from "@modules/cart/actions"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
}) => {
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)
  const [discountCode, setDiscountCode] = useState("")
  const { countryCode } = useParams()
  const pathname = usePathname()
  const [updating, setUpdating] = useState<string | null>(null)

  const changeQuantity = async (itemId: string, quantity: number) => {
    setUpdating(itemId)
    await updateLineItem({
      lineId: itemId,
      quantity,
    }).finally(() => {
      setUpdating(null)
    })
  }
  const totalItems = cartState?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0
  const itemRef = useRef<number>(totalItems)

  const toggleCart = () => setCartDropdownOpen(!cartDropdownOpen)

  useEffect(() => {
    // Close cart when navigating to any new page
    setCartDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    // Open cart only when items are added (totalItems increases)
    if (totalItems > itemRef.current) {
      setCartDropdownOpen(true)
    }
    itemRef.current = totalItems
  }, [totalItems])

  const subtotal = cartState?.subtotal || 0
  const freeShippingThreshold = 7500 // 75€ in cents
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <div className="relative z-50">
      <button onClick={toggleCart} className="flex items-center transition-all duration-200 hover:opacity-80">
        <ShoppingBagIcon className="h-8 w-8 text-black" />
        <span className={`absolute -right-2 top-4 border-2 border-gray-100 text-xs ${totalItems > 0 ? 'bg-red-700 text-white border-0' : 'bg-white text-black'} font-bold rounded-full px-1.5 text-sm transition-all duration-200`}>
          {totalItems}
        </span>
      </button>
      <Transition
        show={cartDropdownOpen}
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl flex flex-col p-6">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-2xl font-bold text-neutral-700">Warenkorb</h3>
            <button onClick={toggleCart} className="text-2xl transition-colors duration-200 hover:text-red-700">&times;</button>
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
                className="bg-red-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: `${freeShippingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
             
              {remainingForFreeShipping > 0 
                  ? ` Versandkosten: 4,90`
                  : ""}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartState && cartState.items?.length ? (
              <div className="divide-y divide-gray-200">
                {cartState.items.map((item) => (
                  <div key={item.id} className="flex p-4 hover:bg-gray-50 transition-colors duration-200">
                    <LocalizedClientLink
                      href={`/products/${item.variant.product.handle}`}
                      className="w-24 transition-opacity duration-200 hover:opacity-80"
                    >
                      <Thumbnail thumbnail={item.thumbnail} size="square"  />
                    </LocalizedClientLink>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <LocalizedClientLink href={`/products/${item.variant.product.handle}`} className="hover:text-red-700 transition-colors duration-200">
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
                        <button
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1 || updating === item.id}
                    className="px-2 py-1 border rounded-l hover:bg-gray-100 disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">
                  {updating === item.id
  ? <div className="animate-spin h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full"></div>
  : item.quantity}                  </span>
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    disabled={updating === item.id}
                    className="px-2 py-1 border rounded-r hover:bg-gray-100 disabled:opacity-50"
                  >
                    +
                  </button>
                        </div>
                        <div className="flex ">
                          <DeleteButton id={item.id} className="border-2 p-3 rounded-2xl ">
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
                    className="flex items-center justify-center rounded-md border border-transparent bg-red-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800 transition-colors duration-200"
                    onClick={toggleCart}
                  >
                    Zu den Produkten
                  </LocalizedClientLink>
                </div>
              </div>
            )}
          </div>

          {cartState && cartState.items?.length ? (
            <div className="border-t border-gray-200 p-6 ">
            
              
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="text-lg">Zwischensumme</p>
                <p className="text-lg font-bold">
                  {formatAmount({
                    amount: cartState.subtotal || 0,
                    region: cartState.region,
                    includeTaxes: false,
                  })}
                </p>
              </div>
             
              <p className="text-xs text-gray-500 mt-1">
                Gutscheine, Versandkosten und Steuern werden bei der Bezahlung berechnet.
              </p>
              <div className="mt-6 w-60 mx-auto">
                <LocalizedClientLink
                  href="/checkout"
                  className="flex items-center justify-center rounded-full border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-800 transition-all duration-200"
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