const passport = require('passport');
const ClientController = require('../controllers/client-controller');

module.exports = app => {
    app.post('/client', passport.authenticate('bearer', { session: false }), (req, res) => ClientController.registerClient(req, res));
    
    app.get('/client/:id_company', passport.authenticate('bearer', { session: false }), (req, res) => ClientController.allClient(req, res));    
}