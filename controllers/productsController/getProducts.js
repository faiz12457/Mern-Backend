import { Product } from "../../models/productSchema.js"






export const getProducts=async(req,res)=>{
     const products=await Product.find({});

         try {
            if(products.length>=1){
              return res.status(200).send(products);
            }
       
        
            
         } catch (error) {
             res.status(401).send(error.message);
         }

}



