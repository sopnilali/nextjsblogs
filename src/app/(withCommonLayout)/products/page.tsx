
"use client"

import { useGetAllProductsQuery } from '@/components/redux/feature/productApi'
import ProductCard from '@/components/shared/ProductCard'
import { TProductInterface } from '@/types'
import React from 'react'

const ProductsPage = () => {


      const {data: getProducts} = useGetAllProductsQuery(undefined)
      console.log(getProducts)

  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {
          getProducts?.data.map((product : TProductInterface, index : string) => (

            <ProductCard key={index} product={product} />
          )
        
        )
         }
        </div>
      
    </div>
    
  )
}

export default ProductsPage