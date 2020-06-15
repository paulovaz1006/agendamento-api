const ScheduleModel = require('../models/schedule-model');

class ScheduleController {
    allSchedule(req, res) {
        const id = req.params.id_user;
        ScheduleModel.allSchedule(id, res);
    }

    registerScheduling(req, res) {
        const data = req.body;
        ScheduleModel.registerScheduling(data, res);
    }

    scheduling(req, res) {
        const data = req.body;
        const id = req.params.id;
        const method = req.method.toLowerCase();
        ScheduleModel.scheduling(data, id, method, res);
    }
}

module.exports = new ScheduleController;