import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["credit", "debit"], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const walletSchema = new mongoose.Schema({
  balance: { type: Number, default: 0 },
  transactions: [transactionSchema],
});

export default mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
