
'use client'
import { Fragment, Suspense, useState } from 'react'
import { AT } from 'country-flag-icons/react/3x2'
import { Bebas_Neue} from "next/font/google";
const Beba = Bebas_Neue({  weight: ['400'],
subsets: ['latin'], });

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'

import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CartButton from '@modules/layout/components/cart-button';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import Image from 'next/image';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Unser Sortiment',
      featured: [
        {
          name: 'NEU | HYDRO WHEY VANILLE ',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dd0kypcrk/image/upload/v1719410123/Design_ohne_Titel_1280x1280_1_j6vzuk.svg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Z-NUTRITION | Hydro Whey',
          href: '#',
          imageSrc: 'https://res.cloudinary.com/dd0kypcrk/image/upload/v1719408230/Design_ohne_Titel_1280x1280_skbzp5.svg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Vitalstoffe ',
          items: [
            { name: 'Magensium', href: '/products/magnesium-citrate' },
            { name: 'Omega 3', href: '/products/omega3' },
           
          ],
        },
        {
          id: 'accessories',
          name: 'Proteine ',
          items: [
            { name: 'Hydro Whey Vanille Eis', href: '/products/hydro-whey-vanille-eis'},
            { name: 'Hydro Whey Banane', href: '/products/hydro-whey-isolate-banane'},
            { name: 'Hydro Whey Erdbeere', href: '/products/hydro-whey-isolate-erdbeere'},
          ],
        },
        {
          id: 'brands',
          name: 'Zusatstoffe',
          items: [
            { name: 'Gorilla Pre Workout', href: '/products/preworkout-gorilla-zilime' },
           
          ],
        },
      ],
    },
  

  ],
  pages: [

    { name: 'Über Uns', href: '#' },
    { name: 'Kontakt', href: '#' },
  ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

export default function DropdownNav() {
  const [open, setOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <div className="">
 
     
              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? 'border-red-600 text-red-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group relative text-base sm:text-sm">
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 ">
                                          <Image
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            width={400}
                                            height={400}
                                            className="object-cover object-center hover:opacity-75"
                                          />
                                        </div>
                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                          <span className="absolute inset-0 z-10" aria-hidden="true" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Jetzt bestellen
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

   
    </div>
  )
}
