import { uploadOnCloudinary } from "../../fileUpload/cloudnary.js";
import { upload } from "../../fileUpload/multer.js";
import { Brand } from "../../models/brandSchema.js";
import { Category } from "../../models/categorySchema.js";
import { Product } from "../../models/productSchema.js";



export const createProduct = async (req, res) => {
    try {
        const {
            name,
            category,
            price,
            discountPercentage,
            description,
            productBrand,
            sizes,
            stockQuantity,
            colorsAvailable
        } = req.body;
          

        if (!name || !category || !price || !productBrand) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const paths = req.files.map(file => file.path);
    
        const uploadResults=await Promise.all(
            paths.map((path)=>uploadOnCloudinary(path))
        )

        const urls=uploadResults.map((data)=>data.url)
        


        
        let productCategory = await Category.findOne({ name: category });
        if (!productCategory) {
            productCategory = await Category.create({ name: category });
        }

        let brand = await Brand.findOne({ name: productBrand });
        if (!brand) {
            brand = await Brand.create({ name: productBrand });
        }


        const product = new Product({
            name,
            images:urls,
            price,
            discountPercentage,
            description,
            productBrand: brand._id,
            category: productCategory._id,
            sizes,
            inStock:true,
            stockQuantity,
            colorsAvailable
        });

        await product.save();

        return res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
