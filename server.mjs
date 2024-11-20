import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (without deprecated options)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Route to fetch player data
app.get('/api/player-data/:name', async (req, res) => {
  const playerName = req.params.name;
  try {
    const response = await fetch(`http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataAdvancedPlayoffs/name/${playerName}`);
    if (!response.ok) {
      return res.status(response.status).send('Error fetching player data');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching player data');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
