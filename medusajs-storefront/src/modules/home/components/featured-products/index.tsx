import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
  specificCollectionId, // New prop to specify which collection to display
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
  specificCollectionId: string
}) {
  const specificCollection = collections.find(
    (collection) => collection.id === specificCollectionId
  )

  if (!specificCollection) {
    return null // Or you could return a message saying the collection wasn't found
  }
  // console.log(collections.map(c => ({ id: c.id, title: c.title })));

  return (
    <li key={specificCollection.id}>
      <ProductRail collection={specificCollection} region={region} />
    </li>
  )
}