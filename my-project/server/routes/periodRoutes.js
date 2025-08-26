import express from "express";
import Period from "../models/Period.js";

const router = express.Router();

// Create new period record
router.post("/", async (req, res) => {
  try {
    const period = await Period.create(req.body);
    res.status(201).json(period);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all periods for a user
router.get("/:userId", async (req, res) => {
  try {
    const periods = await Period.find({ user: req.params.userId }).sort({ startDate: -1 });
    res.json(periods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a period record
router.put("/:id", async (req, res) => {
  try {
    const period = await Period.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(period);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a period record
router.delete("/:id", async (req, res) => {
  try {
    await Period.findByIdAndDelete(req.params.id);
    res.json({ message: "Period entry deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
