import "dotenv/config";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import HandleError from "../middlewares/HandleError.js";
import { generateTokens } from "../middlewares/Auth.js";
import { Types } from "mongoose";

// export const getUsers = async (req, res) => {
//   try {
//     if (!req.user.isAdmin)
//       return res
//         .status(403)
//         .json({ message: "You are not authorized to view this" });
//     const users = await User.find();
//     if (users.length === 0) {
//       return res.status(404).json({ message: "No users found" });
//     }
//     return res.status(200).json(users);
//   } catch (err) {
//     HandleError(res, err);
//   }
// };

export const editMe = async (req, res) => {
  try {
    const id = req.user.userId;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const newData = req.body;
    if (newData.password) {
      const hashedPassword = bcrypt.hashSync(newData.password);
      await user.updateOne({ password: hashedPassword });
      return res.status(200).json({ message: "Updated password successfully" });
    }
    if (newData.address) {
      if (newData.address.trim() !== "")
        await user.updateOne({ address: newData.address });
      return res.status(200).json({ message: "Updated address successfully" });
    }
    if (newData.phone) {
      if (newData.phone.trim() !== "") {
        await user.updateOne({ phone: newData.phone });
      }
      return res.status(200).json({ message: "Updated address successfully" });
    }
    return res
      .status(400)
      .json({ message: "No valid data provided for update" });
  } catch (err) {
    HandleError(res, err);
  }
};

export const getMe = async (req, res) => {
  try {
    const id = req.user.userId;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    HandleError(res, err);
  }
};

export const signup = async (req, res) => {
  const { email, password, phone, name, address, ...otherData } = req.body;
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be atleast 6 characters in length!" });
  }
  if (password.trim() === "") {
    return res.status(400).json({ message: "Enter valid password!" });
  }
  if (phone.length !== 10 || phone.trim() === "") {
    return res.status(400).json({ message: "Invalid phone number!" });
  }
  if (name.trim() === "" || address.trim() === "" || email.trim() === "") {
    return res.status(400).json({ message: "Enter valid details!" });
  }
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User exists! Please Login instead." });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const newUser = new User({
      email,
      name,
      address,
      password: hashedPassword,
      phone,
      ...otherData,
    });
    await newUser.save();
    const payload = {
      userId: newUser._id,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    };
    const { accessToken, refreshToken, currentTime } = generateTokens(payload);
    res.status(201).json({
      message: "Signup Successful",
      accessToken: accessToken,
      refreshToken: refreshToken,
      currentTime: currentTime,
    });
  } catch (err) {
    HandleError(res, err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || email.trim() === "" || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Please enter valid email and password" });
  }
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(400)
        .json({ message: "User doesn't exist. Please signup!" });
    }
    const isCorrectPassword = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!isCorrectPassword) {
      return res.status(401).json({ message: "Incorrect Password!" });
    }

    const payload = {
      userId: userExists._id,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
    };
    const { accessToken, refreshToken, currentTime } = generateTokens(payload);
    return res.status(200).json({
      message: "Login Successful",
      accessToken: accessToken,
      refreshToken: refreshToken,
      currentTime: currentTime,
    });
  } catch (err) {
    HandleError(res, err);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.user.userId;
  try {
    // if (!req.user.isAdmin) {
    //   return res.status(403).json({ message: "You are not authorized!" });
    // }
    const userExists = await User.findByIdAndDelete(id);
    if (!userExists) {
      return res.status(404).json({ message: "User doesn't exist!" });
    }
    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    HandleError(res, err);
  }
};

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { car, parts } = user.cart; // Destructure car and parts arrays from user's cart

    const filteredCarItems = car.filter((item) => !item.bought);
    const filteredPartsItems = parts.filter((item) => !item.bought);

    const cart = {
      car: filteredCarItems,
      parts: filteredPartsItems,
    };

    if (Object.values(cart).every((array) => array.length === 0)) {
      // Check if both car and parts arrays are empty
      return res.status(404).json({ message: "Cart empty" });
    }

    return res.status(200).json({ cart: cart, address: user.address });
  } catch (err) {
    HandleError(res, err);
  }
};

// export const addToCart = async (req, res) => {
//   try {
//     const item = req.body;
//     const userId = req.user.userId;

//     // Check if the user already has an item with the same name and model in their car or parts
//     let cartItem = await User.findOne({
//       _id: userId,
//       $or: [
//         { "cart.car.name": item.name, "cart.car.model": item.model },
//         { "cart.parts.name": item.name, "cart.parts.category": item.category },
//       ],
//     });

//     if (cartItem) {
//       // Item already exists in the cart, you might want to update its quantity or handle it differently
//       return res
//         .status(400)
//         .json({ message: "Item already exists in the cart" });
//     } else {
//       // Item does not exist in the cart, add it to the appropriate array
//       let updateQuery = {};
//       if (item.model) {
//         updateQuery = { $push: { "cart.car": item } };
//       } else {
//         updateQuery = { $push: { "cart.parts": item } };
//       }
//       await User.findByIdAndUpdate(userId, updateQuery);
//       const updatedUserCart = await User.findById(userId);

//       // Find the added item in the cart to send it back in the response
//       let addedItem;
//       if (item.model) {
//         addedItem = updatedUserCart.cart.car.find(
//           (i) => i.model === item.model
//         );
//       } else {
//         addedItem = updatedUserCart.cart.parts.find(
//           (i) => i.name === item.name
//         );
//       }

//       return res.status(200).json({
//         message: "Item added to cart successfully",
//         cart: addedItem,
//       });
//     }
//   } catch (err) {
//     HandleError(res, err);
//   }
// };

export const addToCart = async (req, res) => {
  try {
    const item = req.body;
    const userId = req.user.userId;

    // if (!item || (item.parts && !Array.isArray(item.parts))) {
    //   return res.status(400).json({ message: "Invalid item data" });
    // }

    // let conditions = [
    //   {
    //     "cart.car.name": item.name,
    //     "cart.car.model": item.model,
    //     "cart.car.bought": false,
    //   },
    // ];

    // if (Array.isArray(item)) {
    //   conditions.push({
    //     "cart.parts.name": { $in: item.map((part) => part.name) },
    //     "cart.parts.category": { $in: item.map((part) => part.category) },
    //     "cart.parts.bought": false,
    //   });
    // }

    // let conditions = [
    //   {
    //     $or: [
    //       {
    //         "cart.car": {
    //           $not: {
    //             $elemMatch: {
    //               name: item.name,
    //               model: item.model,
    //               bought: false,
    //             },
    //           },
    //         },
    //       },
    //       {
    //         "cart.car.name": { $ne: item.name },
    //         "cart.car.model": { $ne: item.model },
    //       },
    //     ],
    //   },
    // ];

    // if (Array.isArray(item)) {
    //   conditions.push({
    //     $or: [
    //       {
    //         "cart.parts": {
    //           $not: {
    //             $elemMatch: {
    //               name: { $in: item.map((part) => part.name) },
    //               category: { $in: item.map((part) => part.category) },
    //               bought: false,
    //             },
    //           },
    //         },
    //       },
    //       {
    //         "cart.parts.name": { $nin: item.map((part) => part.name) },
    //       },
    //     ],
    //   });
    // }

    // // Check if the user already has an item with the same name and model in their car or parts
    // let cartItem = await User.findOne({
    //   _id: userId,
    //   $or: conditions,
    // });
    // // console.log(cartItem.cart.car);
    // if (cartItem) {
    //   console.log(cartItem);
    //   // Item already exists in the cart, you might want to update its quantity or handle it differently
    //   return res
    //     .status(400)
    //     .json({ message: "Item already exists in the cart" });
    // } else {
    //   // Item does not exist in the cart, add it to the appropriate array
    //   let updateQuery = {};
    //   if (item.model) {
    //     updateQuery = { $push: { "cart.car": item } };
    //   } else {
    //     updateQuery = { $push: { "cart.parts": { $each: item } } };
    //   }
    //   await User.findByIdAndUpdate(userId, updateQuery);
    //   const updatedUserCart = await User.findById(userId);

    //   // Find the added item in the cart to send it back in the response
    //   let addedItem;
    //   if (item.model) {
    //     addedItem = updatedUserCart.cart.car.find(
    //       (i) => i.model === item.model
    //     );
    //   } else {
    //     addedItem = updatedUserCart.cart.parts.filter((i) =>
    //       item.map((part) => part.name).includes(i.name)
    //     );
    //   }

    //   return res.status(200).json({
    //     message: "Item added to cart successfully",
    //     cart: addedItem,
    //   });
    // }
    let pipeline = [];

    // Match stage to find the user by userId
    pipeline.push({ $match: { _id: userId } });

    // Project stage to create a temporary array combining both car and parts items
    pipeline.push({
      $project: {
        cart: {
          $concatArrays: ["$cart.car", "$cart.parts"],
        },
      },
    });

    // Unwind stage to deconstruct the combined array
    pipeline.push({ $unwind: "$cart" });

    // Match stage to filter items matching the provided item's name, model, and bought status
    pipeline.push({
      $match: {
        $and: [
          { "cart.name": item.name },
          {
            "cart.model": {
              $exists: item.model ? true : false,
              $eq: item.model,
            },
          },
          { "cart.bought": false },
        ],
      },
    });

    // Group stage to check if any matching item exists
    pipeline.push({
      $group: {
        _id: null,
        exists: { $sum: 1 },
      },
    });

    // Project stage to shape the output
    pipeline.push({
      $project: {
        exists: 1,
      },
    });

    let result = await User.aggregate(pipeline);

    if (result.length > 0 && result[0].exists > 0) {
      // Item already exists in the cart, you might want to update its quantity or handle it differently
      return res
        .status(400)
        .json({ message: "Item already exists in the cart" });
    } else {
      // Item does not exist in the cart, add it to the appropriate array
      let updateQuery = {};
      if (item.model) {
        updateQuery = { $push: { "cart.car": item } };
      } else {
        updateQuery = { $push: { "cart.parts": { $each: item } } };
      }
      await User.findByIdAndUpdate(userId, updateQuery);
      const updatedUserCart = await User.findById(userId);

      // Find the added item in the cart to send it back in the response
      let addedItem;
      if (item.model) {
        addedItem = updatedUserCart.cart.car.find(
          (i) => i.model === item.model
        );
      } else {
        addedItem = updatedUserCart.cart.parts.filter((i) =>
          item.map((part) => part.name).includes(i.name)
        );
      }

      return res.status(200).json({
        message: "Item added to cart successfully",
        cart: addedItem,
      });
    }
  } catch (err) {
    HandleError(res, err);
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const itemId = new Types.ObjectId(req.params.id);
    const userId = req.user.userId;

    // Check if user exists
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Check if the item exists in the user's cart (either in car or in parts)
    let cartType;
    let itemIndex;
    let carIndex = user.cart.car.findIndex((i) => i._id.equals(itemId));
    let partIndex = user.cart.parts.findIndex((i) => i._id.equals(itemId));
    if (carIndex !== -1) {
      itemIndex = carIndex;
      cartType = "car";
    } else if (partIndex !== -1) {
      itemIndex = partIndex;
      cartType = "parts";
    }
    if (itemIndex === undefined) {
      return res.status(404).json({ message: "Item not found in user cart" });
    }

    const updateQuery = {
      $pull: { [`cart.${cartType}`]: { _id: itemId, bought: false } },
    };

    // Delete the item from the cart
    await User.findByIdAndUpdate(userId, updateQuery);

    res.status(200).json({ message: "Item deleted from cart successfully" });
  } catch (err) {
    HandleError(res, err);
  }
};

export const getBuy = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // const { car, parts } = user.cart;
    if (user.cart.car.length === 0 && user.cart.parts.length === 0) {
      return res
        .status(404)
        .json({ message: "You have not purchased anything!!" });
    }
    // const cart = user.cart.filter((item) => item.bought === true);
    const filteredCar = user.cart.car.filter((item) => item.bought);
    const filteredParts = user.cart.parts.filter((item) => item.bought);
    const data = { car: filteredCar, parts: filteredParts };
    return res.status(200).json({ bought: data, user: user });
  } catch (err) {
    HandleError(res, err);
  }
};

export const buyItem = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { itemIDs, address } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    for (const cartItem of [...user.cart.car, ...user.cart.parts]) {
      if (itemIDs.includes(cartItem._id.toString()) && !cartItem.bought) {
        cartItem.bought = true;
        cartItem.address = address;
      }
    }
    await user.save();
    res.status(200).json({ message: "Items bought successfully" });
  } catch (err) {
    HandleError(res, err);
  }
};
