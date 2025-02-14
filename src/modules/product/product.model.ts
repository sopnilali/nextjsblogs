
import { TProductInterface } from '@/types'
import { model, Schema } from 'mongoose'

const ProductSchema = new Schema<TProductInterface>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    productImg: { type: String, required: true },
    author: { type: String, required: true },
    stock: { type: Number }
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
)

const Products = model<TProductInterface>('products', ProductSchema)

export default Products
