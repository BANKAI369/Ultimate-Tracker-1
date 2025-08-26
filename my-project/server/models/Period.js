import mongoose from "mongoose";

const periodSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // Start date of period
  startDate: { type: Date, required: true },

  // End date of period (optional if user tracks later)
  endDate: { type: Date },

  // Cycle length in days (average: 28)
  cycleLength: { type: Number, default: 28 },

  // Flow type
  flow: { 
    type: String, 
    enum: ["light", "medium", "heavy"], 
    default: "medium" 
  },

  // Symptoms tracking
  symptoms: [
    {
      type: String,
      enum: ["cramps", "headache", "fatigue", "mood swings", "nausea", "back pain", "bloating", "other"],
    }
  ],

  // Notes for custom info
  notes: { type: String },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Period", periodSchema);
