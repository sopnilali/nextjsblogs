import dbConnect from '@/lib/dbConnect';
import { cors } from '@/middleware/cors';
import { ProductSrvices } from '@/modules/product/product.service';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      await dbConnect();

      const users = await ProductSrvices.getAllProductsfromDB();
      res.status(200).json({ success: true, data: users });
    } catch (error : any) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, brand, category, description, price, productImg, author, stock} = req.body;

      // Validate input
      if (!name || !brand || !author) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
      }
      const ProductData : any = {
        name,
        brand,
        category,
        description,
        price,
        productImg,
        author,
        stock
      }

      // Create a new user
      const user = await ProductSrvices.createProductfromDB(ProductData);
      res.status(201).json({ success: true, data: user });
    } catch (error : any) {
      res.status(400).json({ success: false, error: error.message });
    } 
}
  else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}

export default cors(handler);