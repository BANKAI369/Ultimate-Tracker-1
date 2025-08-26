import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
});

export default mongoose.model("Reminder", reminderSchema);

