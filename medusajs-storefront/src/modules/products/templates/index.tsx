import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import ChevronDown from "@modules/common/icons/chevron-down"
import { TruckIcon } from "@heroicons/react/24/outline"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      
      


      <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-24">
      <div className="md:w-1/2 rounded-lg overflow-hidden">


      <ImageGallery images={product?.images || []} />

      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
      <ProductInfo product={product} />
    
    
          <ProductTabs product={product} />



          <Suspense fallback={<SkeletonRelatedProducts />}>

        </Suspense>
    
       
        
        <div className="mb-4">
        <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
       
        </div>
        
        <div className="rounded-lg mb-4">
          {/* <p className="font-bold">-30% mit dem Code <span className="bg-red-700 text-white px-2 py-1 rounded">ZNUTRITION</span></p>
          <p className="text-sm">Code im Warenkorb einlösen und sparen:</p>
          <p className="font-bold text-xl">€25,13 <span className="line-through text-gray-500">€35,90</span></p>
          <a href="#" className="text-blue-600 text-sm">Mehr erfahren</a> */}
         
        </div>
        
       
        
        <div className="flex items-center text-sm text-gray-600">
          <TruckIcon className="mr-2 w-8 h-auto" />
          <span>Lieferzeit 2-3 Werktage</span>
          
        </div>
        
      </div>
     

</div>
<div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pb-24"> 
<RelatedProducts product={product} countryCode={countryCode} />

      </div> 
    </>
  )
}

export default ProductTemplate
