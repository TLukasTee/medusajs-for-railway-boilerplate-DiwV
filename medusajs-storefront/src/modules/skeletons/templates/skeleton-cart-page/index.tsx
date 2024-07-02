import { Table } from "@medusajs/ui"

import repeat from "@lib/util/repeat"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="py-12  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-12">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-40">
          <div className="flex flex-col bg-white p-6 gap-y-6">

            <div className="bg-white flex items-start justify-between">
            <div className="pb-3">
                <div className="w-24 h-6  bg-gray-200 animate-pulse" />
                <div className="w-32 h-6 mt-2 bg-gray-200 animate-pulse" />

              </div>
              
              <div className="flex flex-col gap-y-2">
              
              </div>
              <div>
                <div className="w-24 h-8 rounded-full bg-gray-200 animate-pulse" />
              </div>
            </div>
            <div>
              
              <Table>
                <Table.Header className="border-t-0">
                  <Table.Row>
                    <Table.HeaderCell className="!pl-0">
                    </Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                 
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {repeat(1).map((index) => (
                    <SkeletonCartItem key={index} />
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <SkeletonOrderSummary />
            <SkeletonCodeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
