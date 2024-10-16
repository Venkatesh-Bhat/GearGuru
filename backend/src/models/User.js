import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    maxLength: 10,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cart: {
    car: [
      {
        name: {
          type: String,
          required: true,
        },
        model: {
          type: String,
          required: true,
        },
        mileage: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        address: {
          // Add address field for car
          type: String,
        },
        bought: {
          type: Boolean,
          default: false,
        },
      },
    ],
    parts: [
      {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        address: {
          type: String,
        },
        bought: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
});

export default mongoose.model("User", userSchema);
