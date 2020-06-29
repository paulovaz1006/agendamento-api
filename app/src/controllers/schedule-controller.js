const ScheduleModel = require('../models/schedule-model');

class ScheduleController {
    async allSchedule(req, res) {
        const id = req.params.id_company;
        const allSchedule = await ScheduleModel.allSchedule(id, res);
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

    scheduleToday(req, res) {
        
        const id = req.params.id_company;
        
        ScheduleModel.scheduleToday(id, res);
    }
}

module.exports = new ScheduleController;