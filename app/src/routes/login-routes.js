const passport = require('passport');
const LoginController = require('../controllers/login-controller');

module.exports = app => {
    app.post('/login', 
        passport.authenticate('local', { session: false }), 
        (req, res) => LoginController.login(req, res));
}