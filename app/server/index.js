const customExpress = require('../config/custom-express');
const connection = require('../database/connection');
const TableSchedule = require('../database/table-schedule');
const TableUser = require('../database/table-user');
const TableTypeUser = require('../database/table-type-user');

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        TableUser.init(connection);
        TableSchedule.init(connection);
        TableTypeUser.init(connection);

        const app = customExpress();

        app.listen(3300, () => console.log('run server'));
    }
});


