var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User home page or list of users');
});

/* User-related pages */
router.get('/login', userController.login);
router.get('/register', userController.register);

/* Post routes for login and register */
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

module.exports = router;
