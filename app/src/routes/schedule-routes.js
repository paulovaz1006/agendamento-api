const scheduleController = require('../controllers/schedule-controller');

module.exports = app => {
    app.route('/schedule')
        .get((req, res) => scheduleController.allSchedule(res))
        .post((req, res) => scheduleController.registerScheduling(req, res));
    
    app.route('/schedule/:id')
        .get((req, res) => scheduleController.scheduling(req, res))
        .patch((req, res) => scheduleController.scheduling(req, res))
        .delete((req, res) => scheduleController.scheduling(req, res))
}