

import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline"
import { hasFlag } from 'country-flag-icons'
import  { AT } from 'country-flag-icons/react/3x2'
import Header from "./Header"
import DropdownNav from "./DropdownNav"




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
   
    <div className="sticky top-0 inset-x-0 z-50 group bg-white">
        <p className="flex h-10 items-center justify-center bg-red-600 px-4 sm:text-sm text-xs font-medium text-white sm:px-6 lg:px-8">
          Neu in Österreich! Kostenloser Versand ab 50€ Bestellwert.
        </p>
          <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          
            <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
        

              <div className="flex items-center h-full mt-1">
                <LocalizedClientLink
                  href="/"
                  className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                >
                <div className=" inline-flex"> 

                <img
                    className="h-8 w-auto  sm:h-14 sm:w-auto"
                    src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                    alt=""
                  />
                  </div>
                </LocalizedClientLink>
              </div>

              <DropdownNav />
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
             
                </div>
                <div className="flex lg:ml-6">
                <form className="max-w-md mx-auto">   
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Suche</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block py-2 w-8 outline-red-500 border-0 sm:border-2 px-2 sm:p-4 sm:ps-10 ps-7  placeholder:text-white  sm:placeholder:text-neutral-800  sm:w-96 text-sm text-neutral-900  bg-white rounded-full " placeholder="Suche nach Wheys, Magnesium..." required />
                        </div>
                    </form>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AT.svg"
                      alt=""
                      className="block h-auto w-7 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">AT</span>
                    <span className="sr-only">, Land ändern</span>
                  </a>
                </div>

                {/* Search */}
                <div className="ml-2 flow-root lg:mx-4">
                  <a href="account" className="group  flex items-center p-2">
                    <UserIcon
                      className="h-8 w-8 flex-shrink-0 text-neutral-700 group-hover:text-gray-800"
                      aria-hidden="true"
                    />
            
                    <span className="sr-only">Produkte im Warenkorb</span>
                  </a>
                </div>
                <Suspense
                  fallback={
                    <LocalizedClientLink
                      className="hover:text-ui-fg-base flex gap-2"
                      href="/cart"
                    >
                      Warenkorb
                    </LocalizedClientLink>
                  }
                >
                  <CartButton />
                </Suspense>
              </div>
            </nav>
            {/* <div className=" border-gray-200">
            <div className="max-w-7xl px-10 mt-4 items-center mx-auto justify-center flex flex gap-x-12 ">
              <ul className="flex justify-between items-center py-3 text-sm font-medium  gap-x-12">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
                    Protein <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>            <li>
                  <button className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
                    Vitalstoffe <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li>
                  <button className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
                    Alle Produkte <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                </li>
                <li>
                  <button className="flex items-center text-gray-700 hover:text-gray-900 font-bold">
                    Bestseller <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                </li>
              
              
              </ul>
            </div>
            </div> */}
      </header>
    </div>
  )
}
