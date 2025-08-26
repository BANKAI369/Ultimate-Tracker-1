import express from "express";

const router = express.Router();

// Example: GET all expenses
router.get("/", async (req, res) => {
  // Replace with your DB logic
  res.json({ message: "Get all expenses" });
});

// Example: POST a new expense
router.post("/", async (req, res) => {
  // Replace with your DB logic
  res.json({ message: "Create new expense" });
});

// Example: GET a single expense by ID
router.get("/:id", async (req, res) => {
  // Replace with your DB logic
  res.json({ message: `Get expense ${req.params.id}` });
});

// Example: PUT update an expense
router.put("/:id", async (req, res) => {
  // Replace with your DB logic
  res.json({ message: `Update expense ${req.params.id}` });
});

// Example: DELETE an expense
router.delete("/:id", async (req, res) => {
  // Replace with your DB logic
  res.json({ message: `Delete expense ${req.params.id}` });
});

export default router;
