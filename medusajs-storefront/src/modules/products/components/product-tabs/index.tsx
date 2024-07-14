"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import ChevronDown from "@modules/common/icons/chevron-down"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
  
    {
      label: "Versand & Rückgabe",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <div className="text-small-regular pb-8 pt-5">
  
       
  <div className="">
  
  <label className="block text-sm font-medium mb-1 text-neutral-800">Geschmack</label>
  <div className="relative bg-white">
    <select className="w-full p-2 rounded-md border-2 appearance-none bg-white text-black">
      <option>{product.material ? product.material : "Neutral"}</option>
    </select>
    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
  </div>
</div>

{/* <div className="mb-4">
  <label className="block text-sm font-medium mb-1">Inhaltsgröße</label>
  <div className="relative">
    <select className="w-full p-2 border rounded appearance-none">
      <option>1000g</option>
    </select>
    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2" />
  </div>
  <p className="text-sm text-gray-500 mt-1">30 Portionen</p>
</div> */}


{product.tags?.length ? (
  <div>
    <span className="font-semibold">-</span>
  </div>
) : null}
</div>
      {/* <Accordion type="multiple" className="mb-4">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion> */}
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
  
       

      
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">Tags</span>
        </div>
      ) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Schnelle Lieferung</span>
            <p className="max-w-sm">
            Ihr Paket wird innerhalb von 2-3 Werktagen an Ihrem Abholort oder bequem zu Hause ankommen.

            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Einfache Rückgabe</span>
            <p className="max-w-sm">
            Passt nicht ganz? Keine Sorge - wir tauschen Ihr Produkt gegen ein neues um.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Einfache Rückgabe</span>
            <p className="max-w-sm">
            Schicken Sie einfach Ihr Produkt zurück und wir erstatten Ihnen Ihr Geld. Keine Fragen – wir tun unser Bestes, um sicherzustellen, dass Ihre Rückgabe problemlos verläuft.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
