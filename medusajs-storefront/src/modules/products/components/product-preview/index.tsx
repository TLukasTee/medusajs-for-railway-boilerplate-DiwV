import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { StarIcon } from "@heroicons/react/24/outline"

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

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div>
      
       
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-black text-white text-xs px-2 py-1 rounded">Geschmack</span>
      
      </div>
      <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
          className="w-full h-48 object-cover mb-4"
        />
      <div className="flex items-center space-x-2 mb-2">
        <span className="bg-gray-200 text-xs px-2 py-1 rounded">Geschmack</span>
        <span className="text-gray-400 text-xs">Banane</span>
      </div>
      <h2 className="text-lg font-bold mb-1">{productPreview.title}</h2>
      <p className="text-gray-600 mb-3">Z-NUTRITION | AUSTRIA </p>
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
          ))}
        </div>
        <span className="text-gray-600 ml-2"> </span>
      </div>
      <div className="text-2xl font-bold mb-2">{cheapestPrice && <PreviewPrice price={cheapestPrice} />}</div>
    </div>
    </LocalizedClientLink>
  )
}
