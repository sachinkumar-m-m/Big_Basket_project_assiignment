const mongoose = require("mongoose");

const Auth = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "hotel", "supermarket", "superadmin"],
      required: true,
    },
    orders: {
      type: Array,
      default: [],
    },
    cart: {
      type: Array,
      default: [],
    },
    image: {
      type: Object,
      default: {
        url: "https://res.cloudinary.com/dhina/image/upload/v1662720718/ProjectImage/notFound_f5b0sn.jpg",
      },
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("Auth", Auth);
