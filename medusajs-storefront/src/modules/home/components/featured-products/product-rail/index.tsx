import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="mx-auto max-w-2xl px-12 py-16 sm:px-6 sm:pt-24 sm:pb-38 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold mb-2 dark:text-neutral-800 text-neutral-800">Unsere Bestseller</h2>
      <h3 className="text-xl mb-6 dark:text-neutral-800 text-neutral-800">Besonders beliebt </h3>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview

                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
