const passport = require('passport');
const ScheduleController = require('../controllers/schedule-controller');

module.exports = app => {
    app.get('/all-schedule/:id_company',
        passport.authenticate('bearer', { session:false }),
        ScheduleController.allSchedule
    );

    app.get('/schedule-today/:id_company',
        passport.authenticate('bearer', { session:false }),
        ScheduleController.scheduleToday
    );

    app.get('/schedule-date-selected/:id_company',
        passport.authenticate('bearer', { session:false }),
        ScheduleController.scheduleDateSelected
    );

    app.post('/schedule/',
        passport.authenticate('bearer', { session:false }),
        ScheduleController.registerScheduling
    );

    app.route('/schedule/:id')
        .get(passport.authenticate('bearer', { session:false }),
            ScheduleController.scheduling
        )
        .patch(passport.authenticate('bearer', { session:false }),
            ScheduleController.scheduling
        )
        .delete(passport.authenticate('bearer', { session:false }),
            ScheduleController.scheduling
        );
}