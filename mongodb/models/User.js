import mongoose from "mongoose";

// Also create unique invite code for the user to share it with others for referrals, use v4 uuid4

/**
 * @typedef User
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} image
 * @property {string} [phoneNumber]
 * @property {Date} [createdAt]
 * @property {Date} [updatedAt]
 * @property {number} [walletBalance]
 */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  image: { type: String, required: false },
  phoneNumber: { type: String },
  // country: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  wallet: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },
});

/**
 * @type {import('mongoose').Model<User>}
 */

export default mongoose.models.User || mongoose.model("User", userSchema);