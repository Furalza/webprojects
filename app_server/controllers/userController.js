const login = (req, res) => {
  res.render('login-form', { title: 'Sign In' });
};

const register = (req, res) => {
  res.render('register-form', { title: 'Register' });
};

const loginUser = (req, res) => {
  res.redirect('/');
};

const registerUser = (req, res) => {
  res.redirect('/login');
};

module.exports = {
  login,
  register,
  loginUser,
  registerUser
};
