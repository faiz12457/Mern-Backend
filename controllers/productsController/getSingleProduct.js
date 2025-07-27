import { Product } from "../../models/productSchema.js";




export const getSingleProduct=async(req,res)=>{
        try {
            const {id}=req.params;
    
            
               const product=await Product.findById(id).populate("category").populate("productBrand");
            
               if(!product){
                return res.status(401).json({ message: 'Product not found' })
               }

               res.status(200).json(product);
    
        } catch (error) {
            res.status(500).send(error);
        }

        
}