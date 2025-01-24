import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    userId: {
        type: String
    },
    productId: {
        type: String
    },
    quantity: {
        type: Number 
    }
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;