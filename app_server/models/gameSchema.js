const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Path to image
  genre: { type: String, required: true },
  platform: [String], // Array of platforms
  releaseDate: Date,
  developer: String,
  rating: Number
});
mongoose.model('Game', gameSchema); // Create the Game model