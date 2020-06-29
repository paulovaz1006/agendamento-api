const passport = require('passport');
const UserController = require('../controllers/user-controller');

module.exports = app => {
    app.post('/user', (req, res) => UserController.registerUser(req, res));
    
    app.route('/user/:id')
        .get(passport.authenticate('bearer', { session: false }), (req, res) => UserController.getUser(req, res))        
        .patch(passport.authenticate('bearer', { session: false }), (req, res) => UserController.alterUser(req, res))
        .delete(passport.authenticate('bearer', { session: false }), (req, res) => UserController.deleteUser(req, res));
}