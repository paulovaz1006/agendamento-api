const moment = require('moment');
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
        const date = new Date();
        const formatDate = moment(date).format('YYYY-MM-DD');
        const id = req.params.id_company;

        ScheduleModel.scheduleToday(id, formatDate, res);
    }

    scheduleDateSelected(req, res) {
        const formatDate = moment(req.params.date).format('YYYY-MM-DD');
        const id = req.params.id_company;
        const date = formatDate;

        ScheduleModel.scheduleDateSelected(id, date, res);
    }
}

module.exports = new ScheduleController;