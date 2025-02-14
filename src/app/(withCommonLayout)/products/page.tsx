
import ProductCard from '@/components/shared/ProductCard'
import { TProductInterface } from '@/types'
import { productModule } from '@/utils'
import React from 'react'

const ProductsPage = async() => {

  const allproducts = await productModule.getAllProducts();

  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
         {
          allproducts?.data.map((product : TProductInterface, index : string) => (

            <ProductCard key={index} product={product} />
          )
        
        )
         }
        </div>
      
    </div>
    
  )
}

export default ProductsPage