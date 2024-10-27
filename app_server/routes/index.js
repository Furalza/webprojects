const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const gameController = require('../controllers/gameController');
const aboutController = require('../controllers/aboutController'); // Import the about controller

// User-related routes
router.get('/login', userController.login);               // Renders Login page
router.post('/login', userController.loginUser);          // Handles login submission
router.get('/register', userController.register);         // Renders Registration page
router.post('/register', userController.registerUser);    // Handles registration submission

// Main page for games
router.get('/games', gameController.mainPage);            // Main page displaying games

// About page
router.get('/about', aboutController.about);               // Route for About page

// Redirect root to games page (optional)
router.get('/', (req, res) => {
  res.redirect('/games');
});

module.exports = router;
