import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    description: {
        type: String,
        required: true 
    },
    stock: {
        type: Number,
        required: true
        
    },
    imageSrc: {
        type: String,
        required: true,
    },
    rating:
    {
        type:Number,
        default:0
    }
});

const productsModel = mongoose.model("products", productSchema);
export default productsModel;
 