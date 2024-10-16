import express from "express";
import {
  // getUsers,
  signup,
  login,
  getMe,
  editMe,
  deleteUser,
  getCart,
  addToCart,
  removeFromCart,
  getBuy,
  buyItem,
} from "../controllers/user-controller.js";
import { authenticateToken, refreshAccessToken } from "../middlewares/Auth.js";

const userRouter = express.Router();

//Get all users, requires admin privileges
// userRouter.get("/allUsers", authenticateToken, getUsers);

//Get my  profile (requires authentication)
userRouter.get("/getMe", authenticateToken, getMe);

//Edit my  profile (requires authentication)
userRouter.put("/editMe", authenticateToken, editMe);

//Delete a particular user, requires admin privileges
userRouter.delete("/del", authenticateToken, deleteUser);

//Signup a new user
userRouter.post("/signup", signup);

//Login an existing user
userRouter.post("/login", login);

//Produce a new access token if it has expired. Requires valid refresh token and user must be logged in.
userRouter.post("/token", refreshAccessToken);

//Get all items that aren't bought in cart
userRouter.get("/cart/all", authenticateToken, getCart);

//Add item to cart
userRouter.post("/cart", authenticateToken, addToCart);

//Remove item from cart
userRouter.delete("/cart/:id", authenticateToken, removeFromCart);

//Get all items that aren't bought in cart
userRouter.get("/buy/all", authenticateToken, getBuy);

//Purchase item(s) from the cart
userRouter.put("/buy", authenticateToken, buyItem);

export default userRouter;
