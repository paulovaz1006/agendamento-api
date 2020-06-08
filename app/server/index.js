const customExpress = require('../config/custom-express');
const connection = require('../database/connection');
const TableSchedule = require('../database/table-schedule');
const TableUser = require('../database/table-user');

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        TableUser.init(connection);

        const app = customExpress();

        app.listen(3300, () => console.log('run server'));
    }
});


