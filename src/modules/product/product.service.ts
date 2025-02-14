
import { TProductInterface } from "@/types"
import Products from "./product.model"

const getAllProductsfromDB = async () => {
    const result = await Products.find()
   return result
 }

 const createProductfromDB = async (
    payload: TProductInterface
  ) => {
    const result = await Products.create(payload)
    return result
  }


 export const ProductSrvices = {
  createProductfromDB,
  getAllProductsfromDB

}
  

