import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

export default function ProductPrice({
  product,
  variant,
  region,
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  return (
    <div className="flex flex-col text-ui-fg-base">
      <span
        className={clx("text-3xl font-bold text-black", {
          "": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "From "}
        {selectedPrice.calculated_price}
    
      </span>
      <p className="text-xs mb-4 text-gray-500">inkl. MwSt.</p>
      {selectedPrice.price_type === "sale" && (
        <>


        <div className="bg-gray-100 shadow-lg gap-y-4  rounded-md p-7">
        <span className="line-through text-gray-400 text-lg"></span>


         <p className="font-bold mb-4 text-xs">Rabattcode <span className="bg-red-600 text-white px-2 py-1 rounded font-semibold">ZNUTRITION</span> ist automatisch aktiviert.</p>
          <p className="font-bold text-xl">  {selectedPrice.calculated_price} <span className="line-through text-gray-500">{selectedPrice.original_price}</span></p>
    

          </div> 

        </>

        
      )}
    </div>



  )
}
