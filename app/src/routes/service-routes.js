const ServiceController = require('../controllers/service-controller');
const passport = require('passport');

module.exports = app => {
    app.post('/service', 
        passport.authenticate('bearer', { session: false }), 
        (req, res) => ServiceController.registerService(req, res));

    app.route('/service/:id')    
        .get(passport.authenticate('bearer', { session: false }), (req, res) => ServiceController.allService(req, res))
        .patch(passport.authenticate('bearer', { session: false }), (req, res) => ServiceController.updateService(req, res))
        .delete(passport.authenticate('bearer', { session: false }), (req, res) => ServiceController.deleteService(req, res));
}