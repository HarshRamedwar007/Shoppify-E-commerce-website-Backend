# Shoppy Globe - Backend

Welcome to the backend of **Shoppy Globe**, an e-commerce platform designed to provide seamless shopping experiences. This backend handles user registration and login, product management and cart operations.

## Link

[Github](https://github.com/mmj030703/Internshala-NodeJS-Project-ShoppyGlobe)

---

## Features

- **User Authentication**: Secure user registration and login with password hashing.
- **Product Management**: CRUD operations for products.
- **Cart Management**: Add, update, and delete items from the cart.
- **Middleware**: Centralized error handling, checking fields availability and authentication using JWT.
- **Database**: MongoDB for data storage.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or hosted instance)

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mmj030703/Internshala-NodeJS-Project-ShoppyGlobe.git
   cd Internshala-NodeJS-Project-ShoppyGlobe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   DATABASE_NAME=<db_name>
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET_KEY=<your_secret_key>
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

---

## API Endpoints

### Users

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | `/users/register` | Register a new user |
| POST   | `/users/login`    | Login a user        |

### Products

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | `/products`     | Get all products       |
| GET    | `/products/:id` | Get a product by ID    |
| POST   | `/products`     | Add a new product      |
| PUT    | `/products/:id` | Update a product by ID |
| DELETE | `/products/:id` | Delete a product by ID |

### Cart

| Method     | Endpoint          | Description                               |
| ---------- | ----------------- | ----------------------------------------- |
| GET        | `/cart/:id`       | Get all cart items for a user             |
| GET        | `/cart/items/:id` | Get a cart items for a user               |
| POST       | `/cart`           | Add an item to the cart                   |
| PUT        | `/cart/items/:id` | Update an item in the cart                |
| DELETE     | `/cart/:id`       | Remove an item from the cart              |
| DELETE ALL | `/cart/all/:id`   | Remove all items from the cart for a user |

---

## Project Structure

```plaintext
shoppy-globe-backend/
├── config/            # Configuration files
├── controllers/       # Route handlers
├── middlewares/        # Custom middleware
├── models/            # Mongoose models
├── routes/            # API routes
├── server.js          # Entry point
└── .env               # Environment variables
```

---

## Dependencies

- **Express**: Web framework
- **Mongoose**: MongoDB ODM
- **Bcrypt**: Password hashing
- **jsonwebtoken**: Token-based authentication
- **Dotenv**: Environment variable management

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
