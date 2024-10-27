// Render the login page
const login = (req, res) => {
  res.render('login-form', { title: 'Sign In' });
};

// Render the register page
const register = (req, res) => {
  res.render('register-form', { title: 'Register' });
};

// Handle login logic (dummy version)
const loginUser = (req, res) => {
  // You can add authentication logic here
  res.redirect('/');
};

// Handle registration logic (dummy version)
const registerUser = (req, res) => {
  // Add registration logic here
  res.redirect('/login');
};

module.exports = {
  login,
  register,
  loginUser,
  registerUser
};
