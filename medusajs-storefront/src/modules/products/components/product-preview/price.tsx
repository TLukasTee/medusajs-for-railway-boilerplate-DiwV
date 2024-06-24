import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"
import { StarIcon } from "@heroicons/react/24/outline"

export default async function PreviewPrice({ price }: { price: PriceType }) {
  return (
    <>
      {price.price_type === "sale" && (
        <Text className="line-through text-ui-fg-muted">
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-muted", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
      > 
      <span className="font-extrabold text-black text-black text-2xl">   {price.calculated_price} </span>
      </Text>
    </>
  )
}
