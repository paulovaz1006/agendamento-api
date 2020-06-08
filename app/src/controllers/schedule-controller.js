const ScheduleModel = require('../models/schedule-model');

class ScheduleController {
    allSchedule(res) {
        ScheduleModel.allSchedule(res);
    }

    registerScheduling(req, res) {
        const data = req.body;
        ScheduleModel.registerScheduling(data, res);
    }

    scheduling(req, res) {
        const id = req.params.id;
        const method = req.method.toLowerCase();
        ScheduleModel.scheduling(data, id, method, res);
    }
}

module.exports = new ScheduleController;