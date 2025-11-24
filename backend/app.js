// app.js - Express backend API for songs

const express = require('express');
const cors = require('cors');

// Create the Express app
const app = express();

// Enable CORS so a separate frontend can call this API
app.use(cors());

// Create a router for API routes
const router = express.Router();

// Example data: array of song objects
const songs = [
  {
    title: 'Uptown Funk',
    artist: 'Bruno Mars',
    rating: 10,
    genre: ['fun', 'boogie']
  },
  {
    title: 'Hello',
    artist: 'Adele',
    rating: 9,
    genre: ['sad', 'ballad']
  }
];

// GET /api/songs - return the list of songs as JSON
router.get('/songs', (req, res) => {
  res.json(songs);
});

// Prefix all router routes with /api
app.use('/api', router);

// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
