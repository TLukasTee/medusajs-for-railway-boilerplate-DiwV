import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { StarIcon, TagIcon } from "@heroicons/react/24/outline"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { LuTag } from "react-icons/lu";

import { Product } from "@medusajs/medusa"



export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }
 

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })
  const Star: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "gold" : "none"}
      stroke={filled ? "gold" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      


    <div  className="group relative ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200  h-80 lg:aspect-none group-hover:opacity-75 lg:h-80">
                
               <Thumbnail
                  thumbnail={productPreview.thumbnail}
                  size="full"
                  isFeatured={isFeatured}
                  className="h-full w-full object-cover object-center  p-24  lg:h-full lg:w-full  pt-6"
                  />
              </div> 
              <div className="absolute top-3 left-3 bg-red-600 outline-2 text-white text-xs font-bold px-2 py-1.5 rounded-full flex">
                   <TagIcon className="h-5 w-5  flex-inline relative text-white" /> 
                   <div className=" flex-inline ml-1 text-[15px] mt-0.5 tracking-tighter"> -17%    </div>   
                </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <div className="mt- mb-2 text-sm text-gray-500 font-normal border-2 rounded-full  w-max  px-2.5  "> {productPreview.material ? productPreview.material : "-"}</div>

                    <div >
                      <span aria-hidden="true" className="absolute inset-0 " />
                      
                     <span className="font-extrabold text-lg uppercase"> {productPreview.title}</span>
                    </div>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Z-NUTRITION | PREMIUM</p>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon   key={i} className="h-4 w-4 text-yellow-500"/>
                    ))}
                    <span className="ml-1 text-sm text-gray-500">2000</span>
                  </div>
            
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
   
                </div>
                
              </div>
            </div>
    </LocalizedClientLink>
  )
}
