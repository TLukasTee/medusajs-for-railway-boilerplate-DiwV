import { Customer, Order } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import { formatAmount } from "@lib/util/prices"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CircularProgress from "./CircularProgress"

type OverviewProps = {
  customer: Omit<Customer, "password_hash"> | null
  orders: Order[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  const profileCompletion = getProfileCompletion(customer);

  return (
    <div>
      <div className="hidden small:block">
        <div className="text-xl-semi flex justify-between items-center mb-4">
          <span className="font-extrabold text-xl">Hallo {customer?.first_name} !</span>
         
          
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi text-start font-bold text-lg">Profil | Status</h3>
                  <div className="flex items-center gap-x-4">
                <CircularProgress percentage={profileCompletion} />
               
        </div>
              </div>

              {/* <div className="flex flex-col gap-y-4">
                <h3 className="text-large-semi">Addressen</h3>
                <div className="flex items-end gap-x-2">
                  <span className="text-3xl-semi leading-none">
                    {customer?.shipping_addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-ui-fg-subtle">
                    GESPEICHERT
                  </span>
                </div>
              </div> */}
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-large-semi font-extrabold">Letzten Bestellungen ({orders?.length})</h3>
              </div>
              <ul className="flex flex-col gap-y-4">
                {orders && orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li key={order.id}>
                        <LocalizedClientLink
                          href={`/account/orders/details/${order.id}`}
                        >
                          <Container className="bg-gray-100 flex justify-between items-center p-4">
                            <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
                              <span className="font-semibold">Bestelldatum</span>
                              <span className="font-semibold">
                                Bestellnummer
                              </span>
                              <span className="font-semibold">
                               Gesamtanzahl
                              </span>
                              <span>
                                {new Date(order.created_at).toDateString()}
                              </span>
                              <span>#{order.display_id}</span>
                              <span>
                                {formatAmount({
                                  amount: order.total,
                                  region: order.region,
                                  includeTaxes: false,
                                })}
                              </span>
                            </div>
                            <button className="flex items-center justify-between">
                              <span className="sr-only">
                               Bestellung #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </Container>
                        </LocalizedClientLink>
                      </li>
                    )
                  })
                ) : (
                  <span className="text-base">Keine Bestellungen bis jetzt.</span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (
  customer: Omit<Customer, "password_hash"> | null
) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  if (customer.billing_address) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
