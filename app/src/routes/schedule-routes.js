const passport = require('passport');
const scheduleController = require('../controllers/schedule-controller');

module.exports = app => {
    app.get('/all-schedule/:id_user', passport.authenticate('bearer', { session:false }), (req, res) => scheduleController.allSchedule(req, res));
    
    app.post('/schedule/', passport.authenticate('bearer', { session:false }), (req, res) => scheduleController.registerScheduling(req, res));
    
    app.route('/schedule/:id')
        .get(passport.authenticate('bearer', { session:false }), (req, res) => scheduleController.scheduling(req, res))
        .patch(passport.authenticate('bearer', { session:false }), (req, res) => scheduleController.scheduling(req, res))
        .delete(passport.authenticate('bearer', { session:false }), (req, res) => scheduleController.scheduling(req, res))
}