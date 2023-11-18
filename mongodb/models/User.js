import mongoose from 'mongoose';

/**
 * @typedef User
 * @property {string} name
 * @property {string} email
 * @property {string} image
 * @property {Date} [createdAt]
 * @property {Date} [updatedAt]
 * @property {number} [walletBalance]
 */

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  walletBalance: { type: Number, default: 0 },
});

/**
 * @type {import('mongoose').Model<User>}
 */

export default mongoose.models.User || mongoose.model('User', userSchema);
