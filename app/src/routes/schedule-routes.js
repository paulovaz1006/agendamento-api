const passport = require('passport');
const ScheduleController = require('../controllers/schedule-controller');

module.exports = app => {
    app.get('/all-schedule/:id_company', passport.authenticate('bearer', { session:false }), (req, res) => ScheduleController.allSchedule(req, res));
    
    app.post('/schedule/', passport.authenticate('bearer', { session:false }), (req, res) => ScheduleController.registerScheduling(req, res));
    
    app.route('/schedule/:id')
        .get(passport.authenticate('bearer', { session:false }), (req, res) => ScheduleController.scheduling(req, res))
        .patch(passport.authenticate('bearer', { session:false }), (req, res) => ScheduleController.scheduling(req, res))
        .delete(passport.authenticate('bearer', { session:false }), (req, res) => ScheduleController.scheduling(req, res))
}