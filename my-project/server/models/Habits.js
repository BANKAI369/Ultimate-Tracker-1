import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  frequency: { type: String, enum: ["daily", "weekly", "monthly"], default: "daily" },
  streak: { type: Number, default: 0 },
  completedDates: [Date],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Habit", habitSchema);
