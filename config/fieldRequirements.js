const fieldRequirements = {
    "products/": ["name", "price", "description", "stock", "imageSrc"],
    "products/:id": ["name", "price", "description", "stock", "imageSrc"],
    "users/register": [ "email", "password"],
    "users/login": ["email", "password"],
    "cart/": ["userId",  "quantity"], 
};

export default fieldRequirements;
