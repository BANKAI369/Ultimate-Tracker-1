import express from "express";
import Habit from "../models/Habit.js";
import protect from "../middleware/authMiddleware.js";
import { createHabit, getHabits } from "../controllers/habitController.js";


const router = express.Router();


// Create a habit
router.post("/", createHabit);

// Get all habits for a user
router.get("/", getHabits);

// Get all habits for a user
router.get("/:userId", async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.params.userId });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a habit
router.put("/:id", async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a habit
router.delete("/:id", async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
