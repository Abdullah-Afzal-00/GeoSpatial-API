const mongoose = require("mongoose");
const crypto = require("crypto");
const uniqueValidator = require("mongoose-unique-validator");
const multer = require("multer");

const multerStorage = multer.memoryStorage();

const AdSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  description: {
    type: String,
    required: true,
  },
});

AdSchema.methods.toJSON = function () {
  return {
    productName: this.productName,
    price: this.price,
    by: this.by,
    description: this.description,
    images: this.imges,
  };
};

// AdSchema.methods.toAuthJSON = function () {
//   return {
//     token: this.generateJWT(),
//     email: this.email,
//     username: this.username,
//     firstName: this.firstName,
//     lastName: this.lastName,
//     role: this.role,
//     location: this.location,
//   };
// };
module.exports = mongoose.model("Ad", AdSchema);
