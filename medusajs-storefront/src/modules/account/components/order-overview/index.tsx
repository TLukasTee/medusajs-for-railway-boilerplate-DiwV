"use client"

import { Order } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const OrderOverview = ({ orders }: { orders: Order[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi text-xl">Nichts zu sehen hier {": ("}</h2>
      <p className="text-base-regular text-base">
        Du hast <span className="font-bold">noch</span> keine Bestellungen. 
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button variant="transparent" className="bg-red-600 text-white px-12 py-2 text-base hover:bg-red-700">Weiter einkaufen</Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default OrderOverview
