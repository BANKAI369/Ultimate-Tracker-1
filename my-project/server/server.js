// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import expenseRoutes from './models/Expenses.js';
import reminderRoutes from './models/Reminder.js';
import habitRoutes from './routes/habitRoutes.js';
import periodRoutes  from './models/Period.js';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//api routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/periods', periodRoutes);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/habits', habitRoutes);
app.use('/api/periods', periodRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// Basic test route
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
