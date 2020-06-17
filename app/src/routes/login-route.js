const passport = require('passport');
const LoginController = require('../controllers/login-controller');

module.exports = app => {
    app.route('/login')
        .post(passport.authenticate('local', { session: false }), 
        (req, res) => LoginController.login(req, res))
}