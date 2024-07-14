'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation2 = {
  categories: [
    {
      id: 'products',
      name: 'Produkte',
      featured: [
        {
          name: 'Proteine',
          href: '#',
          imageSrc: '/path/to/protein-image.jpg',
          imageAlt: 'Protein product image',
        },
        {
          name: 'Performance',
          href: '#',
          imageSrc: '/path/to/performance-image.jpg',
          imageAlt: 'Performance product image',
        },
      ],
      sections: [
        {
          id: 'categories',
          name: 'Kategorien',
          items: [
            { name: 'Proteine', href: '#' },
            { name: 'Performance', href: '#' },
            { name: 'Vitalstoffe', href: '#' },
            { name: 'Gesundheit', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Aktion', href: '#' },
    { name: 'Outlet', href: '#' },
    { name: 'Neuheiten', href: '#' },
    { name: 'Bestseller', href: '#' },
    { name: 'Trainingsziele', href: '#' },
    { name: 'Fitnesspläne', href: '#' },
    { name: 'Über Uns', href: '#' },
  ],
}

const navigation = {
    categories: [
      {
        id: 'women',
        name: ' ',
        featured: [
          {
            name: ' ',
            href: '/collections/vitalstoffe',
            imageSrc: 'https://res.cloudinary.com/dd0kypcrk/image/upload/v1720087687/Hydro_Whey_Vanille_g9fj2w.png',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: ' ',
            href: '/collections/proteinpulver',
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
            name: 'Zusatzstoffe',
            href: '/products/preworkout-gorilla-zilime',
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
export default function DropdownNavMobile() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="rounded-md p-2 text-gray-400 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open menu</span>
       <Bars3Icon className="h-6 w-6 text-neutral-800" aria-hidden="true" />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="mt-2">
                  <div className="border-b border-gray-200">
                    <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                      {navigation.categories.map((category) => (
                        <button
                          key={category.name}
                          className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          aria-controls={`${category.id}-content`}
                          role="tab"
                          type="button"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category sections */}
                  {navigation.categories.map((category) => (
                    <div
                      key={category.id}
                      className="space-y-10 px-4 pb-8 pt-10"
                      id={`${category.id}-content`}
                      role="tabpanel"
                      tabIndex={0}
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div key={item.name} className="group relative text-sm">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                                width={200}
                                height={200}
                              />
                            </div>
                            <a href={item.href} className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true" />
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                                                  <a href={section.href} className=" block font-medium text-gray-900">

                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                            {section.name}
                          </p>
                          </a>
                         
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
      <div className="flow-root">
        <a href="/account" className="-m-2 block p-2 font-medium text-gray-900">
          Anmelden
        </a>
      </div>
      <div className="flow-root">
        <a href="/account" className="-m-2 block p-2 font-medium text-gray-900">
          Kundenkonto erstellen
        </a>
      </div>
    </div>

    <div className="border-t border-gray-200 px-4 py-6">
      <a href="#" className="-m-2 flex items-center p-2">
        <img
              src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AT.svg"
              alt=""
          className="block h-auto w-5 flex-shrink-0"
        />
        <span className="ml-3 block text-base font-medium text-gray-900">AT</span>
        <span className="sr-only">, change currency</span>
      </a>
    </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}