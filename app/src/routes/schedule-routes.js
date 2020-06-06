const scheduleController = require()

module.exports = app => {
    app.route('/schedule')
        .get((req, res) => scheduleController.allSchedule(req, res));
}