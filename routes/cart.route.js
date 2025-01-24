import { Router } from "express"
import { addItemToCart,  deleteCartItemById,   updateCartItemById ,getAllCartItems, getCartItemById } from "../controllers/cart.controller.js";
import fieldsMissingValidation from "../middlewares/fieldsMissingValidation.middleware.js";
import verifyJwtToken from "../middlewares/verifyJwtToken.middleware.js";

const cartRouter = Router();

 cartRouter.use(verifyJwtToken);



 cartRouter.get("/:id", getAllCartItems);

 cartRouter.get("/items/:id", getCartItemById);

 cartRouter.post("/", fieldsMissingValidation, addItemToCart);

 cartRouter.put("/items/:id", fieldsMissingValidation, updateCartItemById);

 cartRouter.delete("/:id", deleteCartItemById);

 

export default cartRouter;